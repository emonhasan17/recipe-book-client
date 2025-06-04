import React, { use } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import { SlLike } from "react-icons/sl";
import { toast } from 'react-toastify';
import { Fade } from "react-awesome-reveal";
const LefrSide = ({ recipes , setLiked,liked}) => {
    const { user } = use(AuthContext)

    const { image, title, cuisine, categories, ingredients, instructions, time,  _id, email, userName, photoUrl } = recipes
    const handleLike = () =>{

        if(user.email === email) return toast.error('you can not like your own recipe')
        
       const  like = ++liked
        const likeData = {
            like
        }


        fetch(`https://recipe-book-server-indol.vercel.app/recipes/id/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success('you liked this recipe')
                setLiked(like)
            }
        })
    }


    return (
        <div className=''>
            <Fade direction='left' delay={300} triggerOnce='true'>
            <div>
                <img className='rounded-2xl md:w-[1050px] md:h-[600px]'  src={image} alt="" />
            </div>
            <div className='flex justify-between items-center mt-6'>
                <div>
                    <h1 className='md:text-5xl text-2xl'>Recipe Added By</h1>
                    <div className='flex md:mt-6 mt-3 gap-3'>
                        <img className=' w-10 rounded-full' src={photoUrl} alt="" />
                        <h1 className='md:text-4xl text-2xl'>{userName}</h1></div>

                </div>
                <div className='pr-2'>
                <button onClick={handleLike}><SlLike md:size={86} size={60} className='hover:text-blue-600 cursor-pointer'/></button>
                </div>
            </div>
            <div>

            </div>
            </Fade>
        </div>
    );
};

export default LefrSide;