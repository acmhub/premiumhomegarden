import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import CallToAction from "@/components/sections/globals/call-to-action";
import Models from "@/components/sections/products/models";
import fireDoor from "@/data/products/fire-door";

function UsaAntifoc() {
	return (
		<Layout
			title="Ușă Antifoc"
			description="Ușile rezistente la foc sunt foarte importante pentru protecția ta, acestea formează o barieră în calea răspândirii focului și pot salva o mulțime de vieți. Au proprietăți care le fac să se transforme în adevărate bariere în calea focului. "
			canonical="/produse/usa-antifoc"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Ușă Antifoc</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<section className="section-spacing">
					<h2 className="text-center">Modele Ușă Antifoc</h2>
					<LineSeparator />

					<Models data={fireDoor} product_name="Ușă Antifoc" grid="grid-cols-2 md:grid-cols-3" />
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default UsaAntifoc;
