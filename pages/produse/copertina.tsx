import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import CallToAction from "@/components/sections/globals/call-to-action";
import copertinaModels from "@/data/products/copertina-models";

function Copertina() {
	return (
		<Layout
			title="Copertină"
			description="Copertina este concepută să fie folosite pe tot parcursul anului. Astfel, nu mai depinzi de anotimpuri sau de condițiile meteo atunci când vrei să te relaxezi."
			canonical="/produse/copertina"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Copertină</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={copertinaModels} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default Copertina;
