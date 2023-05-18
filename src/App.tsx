import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Foot from "./footer";
import { useEffect } from "react";

export default function App() {
	useEffect(() => {
		const hash = document.location.hash.substring(1);
		const anchor = document.getElementById(hash + "-");
		anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
	});
	return ( <>
			<div className="w-full flex flex-col justify-between h-full items-stretch">
				<Nav />
				<div className="flex-auto bg-stone-100">
					<Outlet />
				</div>
				<Foot />
			</div>
	</>	);
}