import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ModalCard from './ModalCard';

const MyRecipeCard = ({ recipe, recipeData, setRecipeData }) => {
    const[food,setFood] = useState(recipe)
    const { image, title, cuisine, categories, ingredients, instructions, time, like, _id, email } = food




    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://recipe-book-server-indol.vercel.app/recipes/${email}/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // remove recipe from the state-------------------------

                            const remainingRecipe = recipeData.filter(recip => recip._id !== _id)
                            setRecipeData(remainingRecipe)

                        }
                    })

            }
        });
    }

    const handleUpdate = (id) => {
        document.getElementById(`my_modal_${id}`).showModal()
    }

    return (
        <div className='md:mb-10 mb-6'>
            <div className="card md:flex md:flex-row-reverse bg-base-100 shadow-sm ">
                <img className='md:w-4/9 md:p-12'
                    src={image}
                    alt="Album" />
                <div className="card-body space-y-2  md:p-12">
                    <h2 className="md:text-4xl text-2xl font-bold">{title}</h2>
                    <p className='md:text-2xl text-xl'>Cuisine : {cuisine}</p>
                    <p>
                        <span className='md:text-2xl text-xl'>Categories</span> :
                        {
                            categories.map((cat, i) => <li key={i} className='text-xl'>{cat}</li>)
                        }
                    </p>
                    <p><span className='md:text-2xl text-xl'>Ingredients</span> : <br /><span className='text-xl'>{ingredients}</span></p>
                    <p className='md:text-2xl text-xl'>Instrucion : <br /><span className='text-xl'>{instructions}</span></p>
                    <p className='md:text-2xl text-xl'>Preparation Time: {time}</p>
                    <p className='md:text-2xl text-xl'>Liked by {like} people</p>
                    <div className="card-actions ">
                        <button onClick={() => handleUpdate(_id)}>update</button>
                        {/* modal for recipe update */}


                        <div>
                            <ModalCard id={_id}
                             food={food}
                             setFood={setFood}></ModalCard>
                        </div>


                        




                        {/* <button className=" md:text-2xl text-xl"><Modal recipe={recipe}></Modal></button> */}
                        <button onClick={handleDelete} className="btn btn-primary md:text-2xl text-xl">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecipeCard;