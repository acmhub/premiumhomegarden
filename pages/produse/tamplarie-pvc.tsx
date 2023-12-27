import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Constructive from "@/components/sections/products/constructive";
import { Profiles, Hardware, Glass, Colors } from "@/components/sections/products/tamplarie";
import { pvcsystems } from "@/data/products/profiles";
import CallToAction from "@/components/sections/globals/call-to-action";
import { pvcVariants } from "@/data/products/joinery-variants";

import "swiper/css";
import "swiper/css/navigation";

function TamplariePVC() {
	return (
		<Layout
			title="Tâmplărie PVC"
			description="Ferestrele noastre din PVC oferă calitate și confort în același timp. Rezistența acestui material, combinată cu izolația noastră termică de înaltă performanță, creează un mediu de viață confortabil. Alege profilele PVC oferite de noi și fereastra ta își va păstra aceeași calitate ca în prima zi, an de an."
			canonical="/produse/tamplarie-pvc"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Tâmplărie PVC</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Constructive data={pvcVariants} />

				<section className="section-spacing">
					<h2 className="text-center">
						<span className="text-base">Sistemele noastre pentru</span>
						<br />
						Ferestre și Uși
					</h2>
					<LineSeparator />
					<Profiles data={pvcsystems} start="bluEvolution 73" />
				</section>

				<Hardware />
				<Glass />
				<Colors />

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default TamplariePVC;
