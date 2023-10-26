import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
	return (
		<div className=' w-[90vw] mx-auto my-0 max-w-[1120px] grid gap-8 justify-center sm:grid-cols-2 sm:items-start md:grid-cols-3 md:w-[95vw]'>
			{items.map((item) => {
				return <MenuItem {...item} key={item.id} />;
			})}
		</div>
	);
};

export default Menu;
