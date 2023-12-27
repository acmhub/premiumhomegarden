import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import CallToAction from "@/components/sections/globals/call-to-action";
import pergolaModels from "@/data/products/pergola-models";

function Pergola() {
	return (
		<Layout
			title="Pergola"
			description="O completare uimitoare pentru casa sau curtea dumneavoastră, pergola vă va transforma cu siguranță spațiul de locuit în aer liber. "
			canonical="/produse/pergola"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Pergola</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={pergolaModels} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default Pergola;
