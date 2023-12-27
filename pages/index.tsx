import Layout from "@/components/app";
import {
	Landing,
	Services,
	Products,
	About,
	Categories,
	Portfolio,
	Reviews,
	HowTo,
	Contact,
} from "@/components/sections/homepage";

export default function Home() {
	return (
		<Layout
			description="La Premium Home & Garden Solutions, ne mândrim cu produsele noastre, serviciile superioare pentru clienți și cu atenția la detalii. Oferim produse de înaltă calitate care fac ca îngrijirea casei tale să fie rapidă, ușoară și convenabilă!"
			canonical="https://premiumhomegarden.ro/"
			pageID="home"
		>
			<Landing />
			<Services />
			<Products />
			<About />
			{/* <Categories /> */}
			<Reviews />
			<Portfolio />
			<HowTo />
			<Contact />
		</Layout>
	);
}
