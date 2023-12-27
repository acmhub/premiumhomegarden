import React from "react";
import Link from "next/link";
import Image from "next/image";
import LineSeparator from "@/components/decorative/line-separator";
import routes from "@/data/routes";

function Products() {
	const route: Route | undefined = routes.find((route) => route.label === "Produse");

	if (!route || !route.dropdown) {
		return null;
	}

	return (
		<section className="bg-gunmetal text-white section-spacing py-16">
			<h2 className="text-center">Produsele noastre</h2>
			<LineSeparator />

			<div className="container grid grid-cols-2 lg:grid-cols-4 gap-2">
				{Object.values(route.dropdown).map((link) => {
					return link.links.map(({ icon, label, path }) => (
						<Link
							href={path}
							className="hover:bg-white/10 rounded-md space-y-4 transition p-2.5"
							key={label}
						>
							<Image
								src={icon}
								alt={label}
								height={36}
								width={36}
								className="invert mx-auto object-contain"
							/>
							<p className="font-cinzel text-center xl:text-lg">{label}</p>
						</Link>
					));
				})}
			</div>
		</section>
	);
}

export default Products;
