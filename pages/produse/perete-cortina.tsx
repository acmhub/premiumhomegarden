import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Variants from "@/components/sections/products/variants";
import CallToAction from "@/components/sections/globals/call-to-action";
import curtainWallTypes from "@/data/products/curtain-wall";

function PereteCortina() {
	return (
		<Layout
			title="Perete Cortină"
			description="Pereții cortină structurali sunt realizați cu un sistem special din aluminiu ce oferă, la exterior, aspectul de sticlă continuă."
			canonical="/produse/perete-cortina"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Perete Cortină</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Variants data={curtainWallTypes} />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default PereteCortina;
