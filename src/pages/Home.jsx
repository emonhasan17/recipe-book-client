import React, { useEffect, useState } from 'react';
import Slider from '../components/slider/Slider';
import { useTypewriter } from 'react-simple-typewriter'
import TopRecipeCard from '../components/TopRecipeCard';
import MenberSection from '../components/MenberSection';
import IncomingRecipe from '../components/IncomingRecipe';
import { Link } from 'react-router';
const Home = () => {

    const [topRecipe, setTopRecipe] = useState([])

    const [text] = useTypewriter({
        words: ['Our Best Offerings Chosen by the People', 'The Star of the Kitchen', 'Most-Cooked, Most-Loved'],
        loop: 0
    })

    useEffect(() => {
        fetch('https://recipe-book-server-indol.vercel.app/recipes/like')
            .then(res => res.json())
            .then(data => setTopRecipe(data))
    }, [])

    return (
        <div>
            <div>
                <div className='text-center pb-3 mb-6 mt-10'>
                    <h1 className='md:text-7xl text-6xl'><span className='text-green-600'>Cookbook</span> Central</h1>
                    <p className='md:text-2xl text-xl  text-gray-500 mt-2'>Explore flavors from every corner of the globe</p>
                </div>
                <div className=' h-[40vh] lg:h-[80vh] mx-auto rounded-4xl md:w-full w-9/10  md:border-28 border-gray-400 border-double mb-10'>
                    <Slider></Slider>
                </div>
                <div className='App md:text-6xl text-4xl text-center h-18'>
                    <span>{text}</span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-3 md:mt-10 mt-5 md:w-10/12 w-11/12 mx-auto'>
                    {
                        topRecipe.map((topmenu, index) => <TopRecipeCard index={index} topmenu={topmenu}></TopRecipeCard>)
                    }

                </div>
                <div className='text-center mt-16'>
                    <button className='btn bg-green-600 text-2xl p-8 text-white'><Link to='/allrecipes'>See All Recipes</Link></button>
                </div>
                <div className='lg:w-10/12 mx-auto'>
                    <MenberSection></MenberSection>
                </div>
                <div className='lg:w-10/12 mx-auto'>
                    <IncomingRecipe></IncomingRecipe>
                </div>
            </div>



        </div>
    );
};

export default Home;