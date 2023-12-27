import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import services from "@/data/services";
import CallToAction from "@/components/sections/globals/call-to-action";
import routes from "@/data/routes";

function ServicesPage() {
	const route: Route | undefined = routes.find((route) => route.label === "Produse");

	if (!route || !route.dropdown) {
		return null;
	}

	return (
		<Layout
			title="Servicii"
			description="Fiecare proiect este unic, iar noi oferim soluții personalizate pentru a satisface nevoile specifice ale clienților noștri. Vă punem la dispoziție o echipă de specialiști gata să vă ghideze pe calea celor mai bune alegeri."
			canonical="https://premiumhomegarden.ro/servicii"
			pageID="services"
		>
			<div className="container page-navbar-offset">
				<h1 className="page-title">Servicii</h1>
				<LineSeparator />

				{services.map(({ Icon, image, title, long_description }, index) => (
					<div className="grid grid-cols-1 lg:grid-cols-2 section-spacing gap-5 lg:gap-10" key={title}>
						<div className="max-lg:order-last space-y-5 my-auto">
							<div className="flex items-center gap-2">
								<Icon className="h-10 w-10 bg-gunmetal text-white rounded-md p-2.5" />
								<h2>{title}</h2>
							</div>
							<p>{long_description}</p>
						</div>

						<div className={`relative h-80 w-full ${index % 2 === 0 && "lg:order-first"}`}>
							<Image src={image} alt={title} className="rounded-md object-cover" fill unoptimized />
						</div>
					</div>
				))}

				<section className="section-spacing">
					<h2 className="text-center">Produsele noastre</h2>
					<LineSeparator />
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
						{Object.values(route.dropdown).map((link) => {
							return link.links.map(({ icon, label, path }) => (
								<Link
									href={path}
									className="hover:bg-black/10 rounded-md space-y-4 transition p-2.5"
									key={label}
								>
									<Image
										src={icon}
										alt={label}
										height={36}
										width={36}
										className="mx-auto object-contain"
									/>
									<p className="font-cinzel text-center xl:text-lg">{label}</p>
								</Link>
							));
						})}
					</div>
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default ServicesPage;
