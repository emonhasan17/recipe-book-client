import React, { use } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import Swal from 'sweetalert2';

const AddRecipes = () => {

    const { user } = use(AuthContext)

    const handleAddRecipe = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const title = formData.get('title')
        const image = formData.get('image')
        const ingredients = formData.get('ingredients')
        const instructions = formData.get('instructions')
        const cuisine = formData.get('cuisine')
        const time = formData.get('time')
        const categories = formData.getAll('categories')
        const like = formData.get('like')

        // user info-----------------
        const userName = user.displayName
        const email = user.email
        const photoUrl = user.photoURL 

        const recipeData = {
            title,
            image,
            ingredients,
            instructions,
            cuisine,
            time,
            categories,
            like,
            userName,
            email,
            photoUrl
        }

        // send recipe data in db
        fetch('https://recipe-book-server-indol.vercel.app/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: "Recipe Added Successfully!",
                        icon: "success",
                        draggable: true
                    });

                    // reset form after submit
                    form.reset()


                }
            })

    }


    return (
        <div>
            <div className='text-center mt-10 space-y-4'>
                <h1 className='md:text-6xl text-4xl font-medium'><span className='text-green-500'>Share</span> Your Recipe with the <span className='text-blue-500'>World</span></h1>
                <p className='text-xl text-gray-500 font-light'>Fill in the details below to add your unique creation to the community</p>
            </div>

            <form onSubmit={handleAddRecipe}>
                <div className='md:w-8/12 mx-auto'>
                    <fieldset className="fieldset  rounded-box p-4">
                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full h-[6vh]" placeholder="Title" />
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Image</label>
                        <input type="text" name='image' className="input w-full h-[6vh]" placeholder="Photo URL" />
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Ingredients</label>
                        <input type="text" name='ingredients' className="input w-full h-[6vh]" placeholder="Ingredients" />
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Instructions</label>
                        <input type="text" name='instructions' className="input w-full h-[6vh]" placeholder="Instructions" />
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Cuisine Type</label>
                        <select type="text" name='cuisine' defaultValue="Cuisine Type" className="select select-neutral w-full h-[6vh]">
                            <option disabled={true}>Cuisine Type</option>
                            <option>Italian</option>
                            <option> Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Preparation Time</label>
                        <input type="text" name='time' className="input w-full h-[6vh]" placeholder="Preparation Time" />
                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <legend className="label">Categories</legend>


                        <label className="label">
                            <input type="checkbox" name='categories' value='Breakfast' className="checkbox" />
                            Breakfast
                        </label>

                        <label className="label">
                            <input type="checkbox" name='categories' value='Launch' className="checkbox" />
                            Lunch
                        </label>

                        <label className="label">
                            <input type="checkbox" name='categories' value='Dinner' className="checkbox" />
                            Dinner
                        </label>
                        <label className="label">
                            <input type="checkbox" name='categories' value='Dessert' className="checkbox" />
                            Dessert
                        </label>

                        <label className="label">
                            <input type="checkbox" name='categories' value='Vegan' className="checkbox" />
                            Vegan
                        </label>

                    </fieldset>


                    <fieldset className="fieldset   rounded-box   p-4">
                        <label className="label">Like count</label>
                        <input type="text" name='like' value='0' className="input w-full h-[6vh]" placeholder="Like count" />
                    </fieldset>


                </div>


                <div className='w-8/12 mx-auto'>
                    <input className='btn w-full' type="submit" value='Add Recipe' />
                </div>

            </form>
        </div>
    );
};

export default AddRecipes;