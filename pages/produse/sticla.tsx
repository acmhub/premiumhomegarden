import React from "react";
import Layout from "@/components/app";
import Variants from "@/components/sections/products/variants";
import LineSeparator from "@/components/decorative/line-separator";
import CallToAction from "@/components/sections/globals/call-to-action";
import glass from "@/data/products/glass";

function Sticla() {
	return (
		<Layout
			title="Sticlă"
			description="Descoperiți plăcerea de a vă decora casa cu sticlă decorativă unică, care adaugă un strop de originalitate și farmec în fiecare colț. Protejați-vă și asigurați-vă pacea cu sticlă securizată de înaltă performanță. Îmbinați funcționalitatea cu estetica și creați un mediu distinctiv și personalizat cu lucrările noastre variate din sticlă."
			canonical="/produse/sticla"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Sticlă</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={glass} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default Sticla;
