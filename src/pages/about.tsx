import { ReactNode } from "react";
import { Helmet } from "react-helmet";

export default function About() {
	const content: { heading: string, id: string, paragraphs: string[], innerContent?: ReactNode }[] = [
		{
			heading: "Getting Here", id: "getting-here",
			paragraphs: ["Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week, Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years."],
			innerContent: <>
				<button className="block mb-6 py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">Search for available airline tickets</button>
				<button className="block py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">Find cruises to Taniti</button>
			</>
		},
		{
			heading: "Transportation", id: "transportation",
			paragraphs: ["Public buses serve Taniti City and run from 5 A.M. to 11 P.M. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot."],
			innerContent: 
				<button className="py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">Check the bus schedule</button>
		},
		{
			heading: "Lodging", id: "lodging",
			paragraphs: ["Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government."],
			innerContent: <>
				<h3 className="text-lg ml-4 mb-2">Suggested Items</h3>

				<div className="w-full h-48 bg-gray-50 overflow-x-scroll p-3 rounded-lg border-2 flex shadow-inner snap-x">
					{[...Array(10)].map(i => Math.ceil(Math.random() * 5)).sort().reverse().map((stars, index) => {
						return <div className="max-md:snap-center group w-72 h-full bg-white mr-4 last-of-type:mr-0 p-4 border-2 rounded-md flex-none hover:brightness-95 cursor-pointer transition-all duration-200 ease-out">
						<h3 className="text-2xl group-hover:ml-2 transition-all duration-150 ease-out">Hotel {index + 1}</h3>
						<hr />
						<p>{"★".repeat(stars).padEnd(5, "☆")}</p>
						<p>
							Starting at
							${Math.floor(Math.random() * 120 + 220)}<span className="text-sm text-gray-500">/night</span>
						</p>
					</div>
					})}
				</div>
			</>
		},
		{
			heading: "Food", id: "food",
			paragraphs: [
				"Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.",
				"Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day."
			],
			innerContent: <>
				<h3 className="text-lg ml-4 mb-2">Suggested Items</h3>
				
				<div className="w-full h-48 bg-gray-50 overflow-x-scroll p-3 rounded-lg border-2 flex shadow-inner snap-x">

					{[...Array(10)].map(i => Math.ceil(Math.random() * 5)).sort().reverse().map((stars, index) => {
						return (
						<div className="max-md:snap-center group w-72 h-full bg-white mr-4 last-of-type:mr-0 p-4 border-2 rounded-md flex-none hover:brightness-95 cursor-pointer transition-all duration-200 ease-out">
							<h3 className="text-2xl group-hover:ml-2 transition-all duration-150 ease-out">Restaurant {index + 1}</h3>

							<hr />

							<p>{"★".repeat(stars).padEnd(5, "☆")}</p>
							<span className="font-bold">{"$".repeat(Math.ceil(Math.random() * 5))}</span>
						</div>
					)})}
					
				</div>
			</>
		},
		{
			heading: "Entertainment", id: "entertainment",
			paragraphs: ["Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano. However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay."],
			innerContent:
				<button className="py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">View suggested activities</button>
		},
		{
			heading: "Sightseeing", id: "sightseeing",
			paragraphs: ["Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano."],
			innerContent:
				<button className="py-3 px-7 brightness-100 hover:brightness-125 hover:drop-shadow-xl transition-all duration-75 font-medium text-center text-white rounded-full bg-cyan-700">Top 10 sightseeing tours</button>
		}
	];

	return ( <>
		<Helmet>
			<title>Taniti Travel &mdash; About</title>
		</Helmet>
		<div className="flex justify-center">
			<div className="w-3/4 max-md:w-2/3 py-12">
				<h1 className="text-3xl font-serif max-md:text-center">All About Taniti</h1>
			</div>
		</div>

		<div>

			{content.map(item => <>
				
				<section id={item.id + "-"} className="py-6 bg-white border-y-8 border-cyan-700 flex justify-center">
					<div className="w-3/4 max-md:w-2/3 animate-fadeIn">
						<img src={`/media/icons/${item.id}.svg`} className="absolute h-28 w-auto opacity-10" />
						<h2 className="text-3xl font-serif">{item.heading}</h2>
						{item.paragraphs.map(p =>
							<p>{p}</p>
						)}
						<hr className="my-4" />
						{item.innerContent}
					</div>
				</section>
				<div className={`bg-fixed divider-${item.id} h-64`}></div>
			</> )}
		</div>

	
	</> );
}