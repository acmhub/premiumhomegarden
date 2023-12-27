import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Models from "@/components/sections/products/models";
import CallToAction from "@/components/sections/globals/call-to-action";
import { rolete, zebra, jaluzele } from "@/data/products/textile-roller";

function RoleteTextile() {
	return (
		<Layout
			title="Rolete Textile"
			description="Roletele textile adaugă stil și personalitate interiorului clădirilor, reprezentând o soluție simplă și economică pentru decorarea acestuia, în anumite situatii putând înlocui jaluzelele verticale."
			canonical="/produse/rolete-textile"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Rolete Textile</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<section className="section-spacing">
					<h2 className="text-center">Modele Rolete Textile</h2>
					<LineSeparator />

					<div className="max-h-96 overflow-y-auto">
						<Models data={rolete} product_name="Rolete Textile" />
					</div>
				</section>

				<section className="section-spacing">
					<h2 className="text-center">
						Modele Rolete Textile
						<br />
						<span className="text-base">Zebra Day&Night</span>
					</h2>
					<LineSeparator />

					<div className="max-h-96 overflow-y-auto">
						<Models data={zebra} product_name="Rolete Textile Zebra" />
					</div>
				</section>

				<section className="section-spacing">
					<h2 className="text-center">Modele Jaluzele Verticale</h2>
					<LineSeparator />

					<div className="max-h-96 overflow-y-auto">
						<Models data={jaluzele} product_name="Jaluzele Verticale" />
					</div>
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default RoleteTextile;
