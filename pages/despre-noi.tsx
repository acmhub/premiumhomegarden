import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import { Landing, Traits, Suppliers } from "@/components/sections/about";
import { Services } from "@/components/sections/homepage";
import CallToAction from "@/components/sections/globals/call-to-action";

function AboutPage() {
	return (
		<Layout
			title="Despre noi"
			description="Echipa noastră oferă în prezent o gamă completă de ferestre, uși și accesorii aferente. Datorită produselor premium pe care le utilizăm echipă noastră asigură parteneriate de lungă durată adaptandu-se ultimelor tendințe și investind în dezvoltarea serviciilor noastre."
			canonical="https://premiumhomegarden.ro/despre-noi"
			pageID="about"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Despre noi</h1>
				<LineSeparator />

				<Landing />
				<Traits />
				<Suppliers />
				<Services />
				<div className="container">
					<CallToAction />
				</div>
			</div>
		</Layout>
	);
}

export default AboutPage;
