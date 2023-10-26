import React from "react";

const Title = ({ text }) => {
	return (
		<div className='text-center'>
			<h2 className=' text-4xl '>{text || "Default Title"}</h2>
			<div className='h-1 w-28 mx-auto mt-2 bg-yellow-400 rounded-md'></div>
		</div>
	);
};

export default Title;
