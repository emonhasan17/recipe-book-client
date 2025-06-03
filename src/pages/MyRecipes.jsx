import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import MyRecipeCard from '../components/MyRecipeCard';

const MyRecipes = () => {
    const { user } = use(AuthContext)
    const mail = user?.email

    const [recipeData, setRecipeData] = useState([])

    useEffect(() => {
        fetch(`https://recipe-book-server-indol.vercel.app/recipes/email/${mail}`)
            .then(res => res.json())
            .then(data => setRecipeData(data))
    }, [mail])


    return (
        <div>
            <div >
                <h1 className='md:text-6xl text-4xl font-medium text-center mt-10 mb-4 text-[#FCBC58]'>My World of Flavors</h1>
                <p className='text-xl px-2 font-light text-[#38B4D0]  text-center'>The global dishes I’ve loved and saved, ready for my next kitchen adventure</p>
            </div>
            <div className='w-10/12   mx-auto mt-12'>
                {
                    recipeData.map(recipe => <MyRecipeCard
                        key={recipe._id}
                        recipe={recipe}
                        recipeData={recipeData}
                        setRecipeData={setRecipeData}></MyRecipeCard>)
                }
            </div>
        </div>
    );
};

export default MyRecipes;