import React, { useState } from "react";

export default function Nav() {
	const [menuHidden, setHidden] = useState(true);
	const toggleMenu = () => { setHidden(!menuHidden); }

	const menuButton = <div className="space-y-2 m-4">{[...Array(3)].map(_ => <div className="w-10 h-1 bg-white rounded-full"></div>)}</div>;

	const links: { title: string, route: string }[] = [
		{ title: "About the island", route: "about" },
		{ title: "FAQs", route: "faq" },
	];

	return ( <>
		<header className="flex flex-none items-center relative px-8 py-6 bg-white justify-center md:justify-between md:border-b-16 border-double border-b-cyan-700 z-50 overflow-hidden">
			<span className="stripes -z-50 lg:left-7"></span>
			<a title="Home" href="/" className="flex text-gray-800 text-3xl font-serif font-medium tracking-tighter">
				<span className="first-letter:text-blue-900 first-letter:text-6xl text-5xl no-underline px-8">Taniti travel</span>
			</a>

			<div className="max-md:hidden">
				{links.map(link =>
					<a title={link.title} href={`/${link.route}`} className="uppercase bg-cyan-700 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 text-white pb-2 pt-3 px-6 mx-2 first-of-type:ml-0 last-of-type:mr-0 rounded-full">
						<span className="font-thin text-2xl">{link.title[0]}</span>{link.title.slice(1)}
					</a>
				)}
			</div>
		</header>

		<nav onClick={toggleMenu} className="md:hidden flex-none z-10">
			<div className="flex justify-center items-center w-full bg-cyan-700 hover:cursor-pointer">
				{menuButton}
			</div>
			<div className={`${menuHidden ? "-translate-y-full" : ""} transition-all ease-out duration-300 -z-10 block w-full absolute`}>
				{links.map(link =>
					<a href={`/${link.route}`}>
						<div className="block w-full text-center py-4 text-xl text-white bg-cyan-800 hover:brightness-125">{link.title}</div>
					</a>
				)}
			</div>
		</nav>
	</>	);
}