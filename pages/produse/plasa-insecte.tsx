import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import CallToAction from "@/components/sections/globals/call-to-action";
import insectsNet from "@/data/products/insects-net";

function PlasaInsecte() {
	return (
		<Layout
			title="Plase contra Insectelor"
			description="Plasele tip Plisse sunt cele mai elegante și fac parte din gama de produse Premium. Folosim un sistem inovator pe piața din România."
			canonical="/produse/plasa-insecte"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Plase contra Insectelor</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={insectsNet} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default PlasaInsecte;
