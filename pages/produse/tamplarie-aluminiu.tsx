import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import Constructive from "@/components/sections/products/constructive";
import { Profiles, Hardware, Glass, Colors } from "@/components/sections/products/tamplarie";
import { alusystems } from "@/data/products/profiles";
import CallToAction from "@/components/sections/globals/call-to-action";
import { aluminiumVariants } from "@/data/products/joinery-variants";

import "swiper/css";
import "swiper/css/navigation";

function TamplarieAluminiu() {
	return (
		<Layout
			title="Tâmplărie Aluminiu"
			description="Ferestrele noastre din aluminiu oferă calitate și confort în același timp. Alegerea usilor pentru locuinta noastra reprezinta o decizie importanta, care repercuteaza atat asupra aspectului final al locuintei cat si asupra confortului termic."
			canonical="/produse/tamplarie-aluminiu"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Tâmplărie Aluminiu</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<Constructive data={aluminiumVariants} />
				<section className="section-spacing">
					<h2 className="text-center">
						<span className="text-base">Sistemele noastre pentru</span>
						<br />
						Ferestre și Uși
					</h2>
					<LineSeparator />
					<Profiles data={alusystems} start="COR 60" />
				</section>
				<Hardware />
				<Glass />
				<Colors />
				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default TamplarieAluminiu;
