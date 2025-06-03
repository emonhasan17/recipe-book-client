import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Fade } from "react-awesome-reveal";

const ReceipeCard = ({ recipe, index }) => {
    // console.log(recipe)
    const { title, image, cuisine, ingredients, categories, like, _id } = recipe



    return (
        <div>
            <Fade direction='up' cascade={false} delay={index * 100} triggerOnce='true'>
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="text-center md:text-2xl  font-bold pt-5 pb-4 border-b-1 border-gray-400">{title}</h2>
                        <p className='md:text-xl py-1'><span className='md:text-xl'>Cuisine : </span> {cuisine}</p>
                        <div>
                            <p className=' py-1 flex-1 h-[10vh]'>
                                <span className='md:text-xl'>Categories</span> :
                                {
                                    categories.map(cat => <li>{cat}</li>)
                                }
                            </p>
                        </div>
                        <Link to={`/recipedetails/${_id}`} className='text-right md:text-xl '>See Details</Link>

                    </div>
                    <figure>
                        <img className='w-full md:h-[20vh]'
                            src={image}
                            alt="Shoes" />
                    </figure>
                </div>
            </Fade>
        </div>
    );
};

export default ReceipeCard;