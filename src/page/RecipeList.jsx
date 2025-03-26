import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [selectedPage, setPage] = useState(1);
    const recipesPerPage = 5; 

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('https://dummyjson.com/recipes');
            const data = await response.json();
            setRecipes(data.recipes);
            console.log(data.recipes);
        }
        fetchRecipes();
    }, []);

    // const indexOfFirstPage =
    const indexOfLastRecipe = selectedPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const handleNext = () => {
        if (selectedPage < Math.ceil(recipes.length / recipesPerPage)) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrev = () => {
        if (selectedPage > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div>
            <h2> REceipes</h2>
            {currentRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            <div>
                <button onClick={handlePrev} disabled={selectedPage === 1}>&#x290C;</button>
                <div>{selectedPage}</div>
                <button onClick={handleNext} disabled={selectedPage === Math.ceil(recipes.length / recipesPerPage)}>&#x290D;</button>
            </div>
        </div>
    )
}

export default RecipeList;