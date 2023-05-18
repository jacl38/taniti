import { Helmet } from "react-helmet";

export default function Sitemap() {

	const map: { title: string, mainLink: string, links: { title: string, route: string }[] }[] = [
		{ title: "About the island", mainLink: "/about", links: [
			{ title: "Getting Here", route: "/about#getting-here" },
			{ title: "Transportation", route: "/about#transportation" },
			{ title: "Lodging", route: "/about#lodging" },
			{ title: "Food", route: "/about#food" },
			{ title: "Entertainment", route: "/about#entertainment" },
			{ title: "Sightseeing", route: "/about#sightseeing" },
		] },
		{ title: "FAQs", mainLink: "/faq", links: [] }
	];

	return ( <>
	<Helmet>
		<title>Taniti Travel &mdash; About</title>
	</Helmet>
	<div className="flex justify-center">
		<div className="w-96 max-md:w-2/3 py-12">
			<h1 className="text-3xl">Sitemap</h1>
			<hr className="h-0.5 bg-zinc-300 -mt-1 mb-4" />
	
			<h2 className="text-3xl my-4">
				<a href="/">Home</a>
			</h2>

			{map.map(heading => <>
				<dt className="text-2xl"><a href={heading.mainLink}>{heading.title}</a></dt>
				{heading.links.map(link => <>
					<dd className="text-xl my-2"><a href={link.route}>{link.title}</a></dd>
				</> )}
			</> )}
		</div>
	</div>
	</> );
}