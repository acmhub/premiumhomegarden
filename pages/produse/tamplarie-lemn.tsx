import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import { Hardware, Glass } from "@/components/sections/products/tamplarie";
import Models from "@/components/sections/products/models";
import CallToAction from "@/components/sections/globals/call-to-action";
import { woodJoineryColors } from "@/data/products/colors";
import Image from "next/image";

function TamplarieLemn() {
	return (
		<Layout
			title="Tâmplărie Lemn Stratificat"
			description="Ferestrele din lemn stratificat prezintă o eleganţă deosebită, eficienţă termică remarcabilă, şi rezistenţă la agresiunea mediului exterior, nefiind vulnerabile la razele ultraviolete şi ploaie."
			canonical="/produse/tamplarie-lemn"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Tâmplărie Lemn Stratificat</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 section-spacing">
					<div>
						<Image
							src="/images/products/tamplarie-lemn/wood-plating.webp"
							alt="Tâmplărie Lemn Stratificat Placare Aluminiu"
							width={412}
							height={412}
							className="mx-auto object-contain"
						/>
					</div>

					<div className="space-y-8 my-auto">
						<h2>Tâmplărie din Lemn Stratificat Placată cu Aluminiu</h2>
						<p>
							Tâmplăria din lemn stratificat cu placare aluminiu reprezintă o soluție perfectă pentru cei
							care doresc să combine frumusețea și căldura lemnului cu rezistența și durabilitatea
							aluminiului. Această tâmplărie inovatoare îmbină cele mai bune caracteristici ale ambelor
							materiale, oferind un aspect estetic deosebit și proprietăți excelente de izolare termică și
							fonică.
						</p>
						<p>
							Această combinație perfectă între lemnul stratificat și aluminiu aduce multiple beneficii.
							Pe lângă aspectul estetic elegant și cald oferit de lemn, tâmplăria cu placare aluminiu
							asigură o izolare termică și fonică excelentă, contribuind la reducerea pierderilor de
							căldură și la creșterea confortului în interiorul locuinței. De asemenea, această tâmplărie
							este ușor de întreținut și rezistentă în timp, ceea ce o face o investiție durabilă și
							rentabilă pe termen lung.
						</p>
					</div>
				</section>

				<Hardware />
				<Glass />

				<section className="section-spacing">
					<h2 className="text-center">Culori disponibile</h2>
					<LineSeparator />

					<Models
						data={woodJoineryColors}
						product_name="Tâmplărie Lemn"
						grid="grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
					/>
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default TamplarieLemn;
