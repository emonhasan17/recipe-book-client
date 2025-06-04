
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ModalCard = ({ id,food,setFood }) => {

  // const { image, title, cuisine, categories, ingredients, instructions, time, like, _id, email } = user
  // console.log(cuisine)
  const handleRecipeUpdate = e => {
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

    const recipeData = {
      title,
      image,
      ingredients,
      instructions,
      cuisine,
      time,
      categories,
      like,
    }

    fetch(`https://recipe-book-server-indol.vercel.app/recipes/id/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    })
      .then(res => res.json())
      .then(data => {
        
        if (data.modifiedCount) {
          fetch(`https://recipe-book-server-indol.vercel.app/recipes/id/${id}`)
          .then(res=>res.json())
          .then(data => setFood(data))
          toast.success('Recipe updated successfully!')
        }
      })

      document.getElementById(`my_modal_${id}`).close()

  }


  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">

          {/* form for update data */}

          <form onSubmit={handleRecipeUpdate}>
            <div className='md:w-8/12 mx-auto'>
              <fieldset className="fieldset  rounded-box p-4">
                <label className="label">Title</label>
                <input type="text" name='title' defaultValue={food?.title} className="input w-full h-[6vh]" placeholder="Title" />
              </fieldset>


              <fieldset className="fieldset   rounded-box   p-4">
                <label className="label">Image</label>
                <input type="text" name='image' defaultValue={food?.image} className="input w-full h-[6vh]" placeholder="Photo URL" />
              </fieldset>


              <fieldset className="fieldset   rounded-box   p-4">
                <label className="label">Ingredients</label>
                <input type="text" name='ingredients' defaultValue={food?.ingredients} className="input w-full h-[6vh]" placeholder="Ingredients" />
              </fieldset>


              <fieldset className="fieldset   rounded-box   p-4">
                <label className="label">Instructions</label>
                <input type="text" name='instructions' defaultValue={food?.instructions} className="input w-full h-[6vh]" placeholder="Instructions" />
              </fieldset>


              <fieldset className="fieldset   rounded-box   p-4">
                <label className="label">Cuisine Type</label>
                <select type="text" name='cuisine' value={food?.cuisine} onChange={e => setFood({ ...food, cuisine: e.target.value })} className="select select-neutral w-full h-[6vh]">
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
                <input type="text" name='time' defaultValue={food?.time} className="input w-full h-[6vh]" placeholder="Preparation Time" />
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
                <input type="text" name='like' value={food?.like} className="input w-full h-[6vh]" placeholder="Like count" />
              </fieldset>


            </div>


            <div className='w-8/12 mx-auto modal-action'>
              <input method="dialog" className='btn w-full' type="submit" value='Update Recipe' />
            </div>

          </form>



          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalCard;