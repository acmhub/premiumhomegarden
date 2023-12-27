import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import CallToAction from "@/components/sections/globals/call-to-action";
import { railingTypes, railingModels } from "@/data/products/railing";
import Models from "@/components/sections/products/models";

function Balustrada() {
	return (
		<Layout
			title="Balustradă"
			description="Nu există nici o îndoială că o balustradă oferă eleganță oricărei locuințe sau proprietăți comerciale. Oferim diferite forme de balustrade și accesorii."
			canonical="/produse/balustrada"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Balustradă</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={railingTypes} />

				<section className="section-spacing">
					<h2 className="text-center">Tipuri de Prindere</h2>
					<LineSeparator />

					<Models
						data={railingModels}
						product_name="Balustrada"
						grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
					/>
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default Balustrada;
