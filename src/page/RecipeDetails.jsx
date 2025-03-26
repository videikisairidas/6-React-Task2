import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect (() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);
            const data = await response.json();
            setRecipe(data);
            console.log(data)
        };
        fetchRecipe();
    }, [id]);
    // console.log(recipe)

    if (!recipe) {
        return <div>Loading recipe details...</div>; // Show a loading message
    }

    return (
        <div>
            <h3>details</h3>
            <h2> {recipe.name}</h2>
            <img src={recipe.image} width={500}/>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeDetail;