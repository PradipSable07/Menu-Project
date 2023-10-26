import React from "react";

const Categories = ({ categories, filterItems }) => {
	return (
		<div className='btn-container mt-8 mb-16 flex justify-center flex-wrap gap-4 '>
			{categories.map((category) => {
				return (
					<button
						type='button'
						className=' items-price bg-yellow-400 text-black traking-wide rounded px-2 py-1'
						key={category}
						onClick={() => filterItems(category)}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
