import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const MenberSection = () => {
    return (
        <div>
            <Fade direction='left' triggerOnce='true'>
                <div className='mt-28'>
                    <h1 className='text-3xl lg:text-6xl font-medium text-center text-green-500 mb-16'>Member Benefits for Adding Recipes</h1>
                    <div className='flex lg:flex-row flex-col justify-between gap-8 mt-10 mb-20 mx-4'>
                        <div className='border-1 border-green-400 p-3 space-y-4 rounded-2xl flex-1'>
                            <h1 className='text-4xl  text-center'>Member Benefits for Adding Recipes</h1>
                            <ul className='space-y-4'>
                                <li className='flex items-center text-xl'><MdOutlineAssignmentTurnedIn className='text-blue-600' />Shows total likes, comments, views, and ratings</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Earn badges like “New Chef,” “Rising Star,” “Top Contributor”</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Rank users based on activity, ratings, or engagement</li>
                            </ul>
                        </div>
                        <div className='border-1 border-green-400 p-4 space-y-4 rounded-2xl flex-1'>
                            <h1 className='text-4xl text-center'> Rewards & <br /> Incentives</h1>
                            <ul className='space-y-4'>
                                <li className='flex items-center text-xl'><MdOutlineAssignmentTurnedIn className='text-blue-600' />Win rewards like kitchen gadgets, gift cards, or discount coupons</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Earn points for each recipe submission, comment, or rating</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Redeem points for rewards, site perks, or exclusive content</li>
                            </ul>
                        </div>
                        <div className='border-1 border-green-400 p-4 space-y-4 rounded-2xl flex-1'>
                            <h1 className='text-4xl text-center'>Community & Influence</h1>
                            <ul className='space-y-4'>
                                <li className='flex items-center text-xl'><MdOutlineAssignmentTurnedIn className='text-blue-600' />Trusted users can become recipe moderators or review</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Test and give feedback on beta tools and updates</li>
                                <li className='flex items-center text-xl'> <MdOutlineAssignmentTurnedIn className='text-blue-600' />Private group for recipe creators to share tips and collaborate</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default MenberSection;