export const getFavorites = async (userId) => {
    try {
        const response = await fetch('https://localhost:8081/api/recipe/favorites', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'userId': userId, // Send the userId in the header
            },
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Favorites:', data);
            return data; // Return favorite recipes
        } else {
            console.error('Error fetching favorites:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export const addToFavorites = async (userId, postId) => {
    try {
        const response = await fetch('https://localhost:8081/api/Recipe/favorites/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, postId }), // Send userId and postId in the body
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Added to favorites:', data);
        } else {
            console.error('Error adding to favorites:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export const removeFromFavorites = async (userId, postId) => {
    try {
        const response = await fetch('https://localhost:8081/api/recipe/favorites/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, postId }), // Send userId and postId in the body
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Removed from favorites:', data);
        } else {
            console.error('Error removing from favorites:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
