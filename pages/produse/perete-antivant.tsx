import React from "react";
import Layout from "@/components/app";
import Variants from "@/components/sections/products/variants";
import LineSeparator from "@/components/decorative/line-separator";
import CallToAction from "@/components/sections/globals/call-to-action";
import windwallTypes from "@/data/products/wind-wall";

function PereteAntivant() {
	return (
		<Layout
			title="Perete Antivânt"
			description="Peretele de folie antivant pentru închideri terasă - soluția inteligentă pentru optimizarea spațiului exterior! Indiferent de vreme, acest perete de folie antivant vă permite să vă extindeți sezonul de utilizare a terasei și să vă protejați de factorii externi. Realizat din materiale durabile și rezistente, acest perete de folie antivant oferă o barieră eficientă împotriva vântului și intemperiilor, asigurându-vă un mediu confortabil și protejat."
			canonical="/produse/perete-antivant"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Perete Antivânt</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={windwallTypes} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default PereteAntivant;
