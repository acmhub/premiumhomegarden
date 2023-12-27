import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import routes from "@/data/routes";
import Link from "next/link";
import Image from "next/image";

function ProductsPage() {
	const route = routes.find((route) => route.label === "Produse");

	if (!route || !route.dropdown) {
		return null;
	}

	return (
		<Layout
			title="Produse"
			description="Echipa noastră oferă în prezent o gamă completă de ferestre, uși și accesorii aferente. Datorită produselor premium pe care le utilizăm asigurăm parteneriate de lungă durată adaptându-ne ultimelor tendințe și investind în dezvoltarea serviciilor noastre."
			canonical="/produse"
			pageID="products"
		>
			<div className="container page-navbar-offset section-spacing">
				<h1 className="page-title">Produse</h1>
				<LineSeparator />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					{Object.values(route.dropdown).map((link) => {
						return link.links.map(({ path, label, highlight }, index) => (
							<Link
								href={path}
								className="relative h-96 w-full rounded-md overflow-hidden lg:hover:scale-110 lg:hover:z-10 transition-all"
								key={index}
							>
								<Image src={highlight} alt={label} className="object-cover" fill unoptimized />
								<p className="absolute bottom-0 left-0 bg-khaki text-white text-lg font-cinzel w-full p-2">
									{label}
								</p>
							</Link>
						));
					})}
				</div>
			</div>
		</Layout>
	);
}

export default ProductsPage;
