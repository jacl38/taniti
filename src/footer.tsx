import { useState } from "react";

export default function Foot() {
	const links: {title: string, route: string}[] = [
		{ title: "Sitemap", route: "sitemap" },
		{ title: "FAQs", route: "faq" },
	];

	const footerLinks = links.map((l, i) => 
		<span>
			<a title={l.title} href={`/${l.route}/`}>{l.title}</a>
			{i < links.length - 1 ? " | " : ""}
		</span>
	);

	const [modalVisible, setModalVisible] = useState(false);
	const openModal = () => {
		setSent(false);
		setModalVisible(true);
		setTimeout(fakeSend, Math.random() * 500 + 750);
	}
	const [isSent, setSent] = useState(false);
	const fakeSend = () => {
		setSent(true);
		setTimeout(() => setModalVisible(false), 1500);
	}

	const contactSentModal = (
		<div className={`${modalVisible ? "" : "hidden"} fixed w-64 h-56 bg-gray-50 border-2 left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 border-gray-400 rounded-3xl shadow-xl`}>
			<h1 className="absolute w-full text-center mt-4 font-semibold">{isSent ? "Sent!" : "Sending..."}</h1>
			{isSent
			? <div className="relative w-24 h-12 left-1/2 top-1/2 -ml-10 -mt-8 -rotate-45 border-b-16 border-l-16 border-green-600"></div>
			: <div className="relative w-32 h-32 left-1/2 top-1/2 -ml-16 -mt-12 border-8 border-b-transparent border-cyan-700 animate-spinny border-l-transparent rounded-full"></div>
			}
		</div>
	);

	return ( <>
		{modalVisible && contactSentModal}

		<footer className="flex-initial self-auto bg-amber-500 border-double border-t-cyan-700 border-t-16 p-6 z-40">
			<div className="flex flex-col items-center justify-center flex-wrap">

				<div className="max-w-7xl md:w-96 my-16">
					<p className="text-xl text-center">Have a question?</p>
					<h4 className="text-4xl text-center">Contact Us</h4>

					<label className="p-2">Email Address</label>
					<input className="shadow-sm bg-gray-50 border-2 border-gray-400 text-gray-900 rounded-3xl block w-full px-5 py-2.5 mb-8"></input>

					<label className="p-2">Inquiry</label>
					<textarea className="shadow-sm bg-gray-50 border-2 border-gray-400 text-gray-900 rounded-3xl block w-full px-5 py-2.5 mb-8"></textarea>

					<button onClick={openModal} className="py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">Send</button>
				</div>

				<p className="text-center">&copy;2023 Taniti Travel Administration</p>
				<div>
					{footerLinks}
				</div>
			</div>
		</footer>

	</>);
}