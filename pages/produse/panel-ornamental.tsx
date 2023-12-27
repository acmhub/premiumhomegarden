import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Models from "@/components/sections/products/models";
import CallToAction from "@/components/sections/globals/call-to-action";
import { panelModels, stainedModels, glassModels } from "@/data/products/ornamental-panel";

function PanelOrnamental() {
	return (
		<Layout
			title="Panel Ornamental Aluminiu"
			description="Ușa de la intrare determină semnificativ impresia generală a unei case și dezvăluie multe despre gustul personal. Vă oferim o gamă largă de sisteme de uși frontale în culori și modele diferite. Lasă-te surprins de numeroasele posibilități."
			canonical="/produse/panel-ornamental"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Panel Ornamental Aluminiu</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<section className="section-spacing">
					<h2 className="text-center">Modele Panel Ornamental</h2>
					<LineSeparator />

					<div className="max-h-96 overflow-y-auto">
						<Models data={panelModels} product_name="Panel Ornamental Aluminiu" />
					</div>
				</section>

				<section className="section-spacing">
					<h2 className="text-center">
						Modele Panel Ornamental
						<br />
						<span className="text-base">cu Sticlă Sablată</span>
					</h2>
					<LineSeparator />

					<div className="max-h-96 overflow-y-auto">
						<Models data={stainedModels} product_name="Panel Ornamental Aluminiu" />
					</div>
				</section>

				<section className="section-spacing">
					<h2 className="text-center">Configurații Sticlă</h2>
					<LineSeparator />

					<Models
						data={glassModels}
						product_name="Panel Ornamental Aluminiu"
						grid="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
					/>
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default PanelOrnamental;
