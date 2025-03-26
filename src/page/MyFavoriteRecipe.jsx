import React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { getFavorites, removeFromFavorites } from '/src/services/recipe.js';

const MyFavoriteRecipe = () => {
    const [userId, setUserId] = useState(null);
    const [favorites, setFavorites] = useState([]);
    
    // console.log(userId);
    
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getFavorites(userId);
            if (data) setFavorites(data);
        };
        fetchFavorites();
    }, [userId]);

    const handleRemoveFavorite = async (postId) => {
        await removeFromFavorites(userId, postId);
        const updatedFavorites = await getFavorites(userId);
        setFavorites(updatedFavorites);
    };

    return (
        <div>
            <h2>Your Favorites</h2>
            <ul>
                {favorites.map((fav) => (
                    <li key={fav.id}>
                        Post ID: {fav.postId}
                        <button onClick={() => handleRemoveFavorite(fav.postId)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyFavoriteRecipe;