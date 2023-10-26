import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);
	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(menu);
			return;
		}
		const newItem = menu.filter((item) => item.category === category);
		setMenuItems(newItem);
	};
	return (
		<main className='w-screen h-screen  '>
			<section className=' py-20 px-0'>
				<Title text={"Our Menu"} />
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
