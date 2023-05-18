import { Helmet } from "react-helmet";

export default function FAQ() {

	const faqs: { heading: string, items: string[] }[] = [
		{ heading: "Power", items: [
			"Power outlets are 120 volts—the same as in the United States."	]},
		{ heading: "Alcohol",items: [
			"Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 A.M.",
			"The drinking age on Taniti is 18 and is not strictly enforced." ]},
		{ heading: "Language", items: [
			"Many younger Tanitians speak fluent English.",
			"Very little English is spoken in rural areas, especially by the older residents." ]},
		{ heading: "Hospitals", items: [
			"There is one hospital and several clinics. The hospital has multilingual employees." ]},
		{ heading: "Crime", items: [
			"Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes." ]},
		{ heading: "Holidays", items: [
			"Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly." ]},
		{ heading: "Currency", items: [
			"Taniti uses the U.S. dollar as its currency, but many businesses will also accept Euros and Yen.",
			"Several banks facilitate currency exchange, and many businesses accept major credit cards." ]},
	];

	return ( <>
		<Helmet>
			<title>Taniti Travel &mdash; FAQs</title>
		</Helmet>
		<div className="flex justify-center">
			<div className="w-3/4 max-md:w-2/3 py-12">
				<h1 className="text-3xl">FAQs</h1>
				<hr className="h-0.5 bg-zinc-300 -mt-1 mb-4"></hr>

				<dl className="list-disc">
					{faqs.map((faq, i) => <>
						<blockquote className="my-4 p-2 bg-slate-400 bg-opacity-5 border-l-8 border-amber-500">
							<dt className="animate-fadeIn" style={{ "--fade-delay": `${i*100}ms`, animationFillMode: "backwards" } as React.CSSProperties}>{faq.heading}</dt>
							{faq.items.map(item =>
								<li className="animate-fadeIn" style={{ "--fade-delay": `${i*100 + 100}ms`, animationFillMode: "backwards" } as React.CSSProperties}>{item}</li>)}
						</blockquote>
					</>)}
				</dl>
			</div>
		</div>	
	</> );
}