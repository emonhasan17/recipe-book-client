import React from 'react';
import { Fade } from 'react-awesome-reveal';
import topRecipe from '../assets/generate a image for  top recipe contributors get reward.jpg'
import addRecipe from '../assets/generate a image for add recipe (1).jpg'
import community from '../assets/generate a image for join our community cartoon pic.jpg'

const IncomingRecipe = () => {
    return (
        <div>
            <Fade direction='right' triggerOnce='true'>
                <div className='mb-24'>
                    <h1 className='text-3xl lg:text-6xl text-orange-400 text-center mb-12'>New Recipes Added Weekly</h1>
                    <div className='flex lg:flex-row flex-col justify-between gap-12 mx-6'>
                        <div className='space-y-4 '>
                            <img src={addRecipe} alt="" className='rounded-4xl' />
                            <h1 className='text-3xl text-center ' >Add Your Recipe</h1>
                            <p className='text-xl text-center'>Add new recipe, cooking tips, seasonal suggestions, or featured community comments.y</p>
                        </div>
                        <div className='space-y-4'>
                            <img src={topRecipe} alt="" className='rounded-4xl' />
                            <h1 className='text-3xl text-center'>Get Reward For Top Recipe
                            </h1>
                            <p className='text-xl text-center'>Became a top contributor and win rewards like kitchen gadgets, gift cards, or discount coupons</p>
                        </div>
                        <div className='space-y-4'>
                            <img src={community} alt="" className='rounded-4xl' />
                            <h1 className='text-3xl text-center'>Join Our Community
                            </h1>
                            <p className='text-xl text-center'>Become an official Chef, with over 300 members worldwide & Receive reward points.</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default IncomingRecipe;