import { Fade } from "react-awesome-reveal";

const RightSide = ({ recipes, liked }) => {


    const { image, title, cuisine, categories, ingredients, instructions, time, _id, email, photoUrl } = recipes

    return (
        <div>
            <Fade direction="right" delay={300} triggerOnce='true'>
                <div className='space-y-4 md:px-6'>
                    <h1 className='md:text-6xl text-4xl font-medium '>{title}</h1>

                    <p className='md:text-4xl text-2xl '>{liked} people interested in this recipe</p>
                    <p className='md:text-3xl text-2xl'>Cuisine</p>
                    <p className='bg-blue-400 md:text-3xl text-2xl py-4  rounded-2xl text-white text-center'>{cuisine}</p>
                    <div className='pb-8 border-b-1 border-gray-400'>
                        <p className='md:text-3xl  text-2xl'>
                            <span className=' '>Categories</span>
                            {
                                categories.map(cat => <li className='border-1 border-amber-400  mb-4 mt-4 text-center py-4 rounded-2xl '>{cat}</li>)
                            }
                        </p>
                    </div>
                    <p className='md:text-3xl text-2xl font-medium bg-amber-300  text-center mb-4 mt-4  py-4  rounded-2xl '> <span className=''>Preparation time:</span> {time}</p>
                    <p className='md:text-3xl text-2xl'>Ingredients</p>
                    <p className=' md:text-3xl text-xl  py-4 px-4 text-center text-white rounded-2xl border-1 bg-blue-400  '>{ingredients}</p>
                    <p className='md:text-3xl text-2xl'>Instructions </p>
                    <p className='md:text-3xl text-xl py-4 px-4 text-center text-white rounded-2xl border-1 bg-blue-400   '>{instructions}</p>
                </div>
            </Fade>
        </div>
    );
};

export default RightSide;