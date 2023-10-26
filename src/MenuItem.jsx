import React, { useState } from "react";

const MenuItem = ({ img, title, price, desc }) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<article className=' max-w-[25rem] bg-white drop-shadow-md hover:drop-shadow-xl hover:rounded-md  rounded '>
			<img
				className=' h-60 w-full rounded-tr rounded-tl object-cover object-center'
				src={img}
				alt={title}
			/>
			<div className=' p-6'>
				<header className='flex flex-wrap gap-4 mb-5 justify-between items-center'>
					<h5 className='font-bold uppercase'>{title}</h5>
					<span className='items-price bg-yellow-400 text-black traking-wide rounded px-2 py-1'>
						{price}
					</span>
				</header>
				<p className=''>
					{readMore ? desc : `${desc.substring(0, 100)}`}
					{desc.length > 115 && (
						<button
							className='text-yellow-500'
							onClick={() => setReadMore(!readMore)}>
							{readMore ? " Show less" : " Read more"}
						</button>
					)}
				</p>
			</div>
		</article>
	);
};

export default MenuItem;
