import { toast } from 'react-toastify';
import image from '../../assets/images/reciep.jpg'


const Recipe = () => {
    const handleMore = () => {
    toast.info('You have to visit Available Page')
}

    return (
		<div className="my-14 lg:p-14 relative mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
			<div className=" w-11/12 lg:w-6/12 p-4 lg:p-6 space-y-3">
				<h3 className="text-3xl font-semibold">
					Dublin Coddle – Irish Sausage, Bacon..
				</h3>
				<p>
					Peel the potatoes. Cut large ones into three or four pieces:
					leave smaller ones whole. Finely chop the parsley. Boil the
					water ..
				</p>
				<button onClick={handleMore} className="btn text-gray-800 bg-[#94c341] ">
					Read More
				</button>
			</div>
            <div className='p-6'>
				<img className='rounded-2xl' src={image} alt="recipes" />
			</div>
		</div>
	);
};

export default Recipe;