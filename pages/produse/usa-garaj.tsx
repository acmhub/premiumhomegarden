import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import Customisation from "@/components/sections/products/customisation";
import CallToAction from "@/components/sections/globals/call-to-action";
import { garageDoors, customisationData } from "@/data/products/garage-door";

function UsaGaraj() {
	return (
		<Layout
			title="Ușă Garaj"
			description="Comoditatea și siguranța în utilizare, eleganța designului, incorporarea celor mai noi tehnologii îconformitate cu normele europene referitoare la siguranță în exploatare precum și disponibilitatea unei game de echipări opționale fac ca ușile noastre de garaj să fie soluția ideală pentru dumneavoastră."
			canonical="/produse/usa-garaj"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Ușă de Garaj</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={garageDoors} />
				<Customisation data={customisationData} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default UsaGaraj;
