import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToFavorites } from '/src/services/recipe.js';

const RecipeCard = ({ recipe }) => {
    // console.log(recipe)
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        setUserId(Number(storedUserId)); // Parse as number if needed
    }, []);

    const handleAddFavorite = async (postId) => {
        try {
            await addToFavorites(userId, postId);
            const updatedFavorites = await getFavorites(userId);
            setFavorites(updatedFavorites);
        } catch (error) {
            // console.error("Error adding to favorites:", error);
        }
    };

    return (
        
        <div>
            <img src={recipe.image} width={250} />
            <h2>{recipe.name}</h2>
            {/* <p>{recipe.description}</p> */}
            <button onClick={() => handleAddFavorite(recipe.id)}>ADD</button>
            <Link to={`/recipes/${recipe.id}`}>Read more</Link>
        </div>
    )
}

export default RecipeCard;