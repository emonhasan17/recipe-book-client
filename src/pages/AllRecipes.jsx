import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ReceipeCard from '../components/ReceipeCard';
import { Fade } from "react-awesome-reveal";

const AllRecipes = () => {

    const recipeData = useLoaderData()
    const [cuisine, setCuisine] = useState('')

    let filterData = cuisine ? recipeData.filter(recipe => recipe.cuisine === cuisine) : recipeData
    if(cuisine === 'All'){
        filterData=recipeData
    }
    //  console.log(filterData)

    return (
        <div>
            <Fade direction='down'>
                <h1 className='md:text-6xl text-4xl font-medium text-center mt-10 mb-4'>Discover Our Recipes</h1>
                <p className='text-xl text-gray-500 font-light text-center '>Browse breakfast to dinner, sweet to savory — all in one spot</p>
                <fieldset className="fieldset md:w-6/12 mx-auto  rounded-box   p-4">
                    <label className="label">Cuisine Type</label>
                    <select type="text" name='cuisine' defaultValue="Cuisine Type" onChange={e => setCuisine(e.target.value)} className="select select-neutral w-full h-[6vh]">
                        <option disabled={true}>Cuisine Type</option>
                        <option>Italian</option>
                        <option> Mexican</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        <option>Others</option>
                        <option>All</option>
                    </select>
                </fieldset>
            </Fade>
            <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 mx-auto md:w-full gap-4 md:gap-8 mt-10'>
                {
                    filterData.map((recipe, index) => <ReceipeCard
                        index={index}
                        key={recipe._id}
                        recipe={recipe}>

                    </ReceipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;