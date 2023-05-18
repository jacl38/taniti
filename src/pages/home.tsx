import { Helmet } from "react-helmet";

export default function Home() {

	const aboutLinks: { title: string, route: string }[] = [
		{ title: "Getting Here", route: "getting-here" },
		{ title: "Transportation", route: "transportation" },
		{ title: "Lodging", route: "lodging" },
		{ title: "Food", route: "food" },
		{ title: "Entertainment", route: "entertainment" },
		{ title: "Sightseeing", route: "sightseeing" },
	];

	return (<>
	<Helmet>
		<title>Taniti Travel &mdash; About</title>
	</Helmet>
	<div className="bg-hero bg-fixed w-full h-full">
		<div className="w-full backdrop-brightness-75">
			<div className="flex flex-col lg:flex-row items-center max-lg:justify-center flex-wrap py-32 lg:pl-32">
				<h1 className="text-6xl text-white italic font-black font-serif font-shadow animate-fadeIn">
					Join us in<br />Taniti!
				</h1>
			</div>
	
			<section className="p-6 bg-white border-y-16 border-cyan-700 border-double flex justify-center mb-48 pb-12">
				<div className="w-3/4 max-md:w-2/3 animate-fadeIn">
					<p className="text-xl">
						Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most of the Tanitian economy was dominated by fishing or agriculture.
					</p>

					<h2 className="text-3xl text-center font-serif mt-12">Learn more</h2>

					<hr className="h-0.5 bg-zinc-300 mb-4" />

					<div className="flex flex-wrap justify-center">
						{aboutLinks.map(item =>
							<a title={item.title} href={`/about#${item.route}`} className="group">
								<div className="border-2 border-black border-opacity-20 rounded-full mx-4 lg:mx-16 mt-8 h-48 w-48 overflow-hidden">
									<div className="p-6 w-full h-full group-hover:scale-110 transition-all">
										<img src={`/media/icons/${item.route}.svg`} className="opacity-40" />
									</div>
								</div>
								<h3 className="text-center text-2xl">{item.title}</h3>
							</a>
						)}
					</div>
				</div>
			</section>
		</div>
	</div>
	</>);
}