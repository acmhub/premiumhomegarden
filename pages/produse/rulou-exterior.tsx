import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import Customisation from "@/components/sections/products/customisation";
import CallToAction from "@/components/sections/globals/call-to-action";
import { rollerTypes, customisationData } from "@/data/products/exterior-roller";

function RulouExterior() {
	return (
		<Layout
			title="Rulou Exterior Aluminiu"
			description="Ruloul este o soluție eficientă și durabilă pentru orice tip de locuință. Un design excepțional și o gamă largă de opțiuni fac aceste obloane perfecte atât pentru protecție, cât și pentru intimitate."
			canonical="/produse/rulou-exterior"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Rulou Exterior Aluminiu</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={rollerTypes} />
				<Customisation data={customisationData} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default RulouExterior;
