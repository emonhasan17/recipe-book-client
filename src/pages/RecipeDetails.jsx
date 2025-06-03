import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import LefrSide from '../components/LefrSide';
import RightSide from '../components/RightSide';

const RecipeDetails = () => {
    const recipes = useLoaderData()
    const [liked, setLiked] = useState(recipes.like)
    return (
        <div>
            <div className='grid md:grid-cols-12 md:w-full mx-auto w-9/10 gap-6 mt-10'>
                
                    <div className='md:col-span-8'>
                        <LefrSide liked={liked} setLiked={setLiked} recipes={recipes}></LefrSide>
                    </div>
                
                    <div className='md:col-span-4'>
                        <RightSide liked={liked} recipes={recipes}></RightSide>
                    </div>
            </div>

        </div>
    );
};

export default RecipeDetails;