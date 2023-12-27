import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CTAProps {
	addSpacing?: boolean;
	image?: string;
}

function CallToAction({ addSpacing, image }: CTAProps) {
	return (
		<section className={`${addSpacing && "section-spacing"}`}>
			<div className="relative card bg-gradient-to-br from-khaki to-charcoal to-90% text-white overflow-hidden p-0">
				<Image
					src={image ? image : "/images/fillers/windowsdoors.webp"}
					alt="Solicita oferta de pret gratuit"
					className="absolute top-0 left-0 h-full w-full object-cover opacity-5 pointer-events-none z-0"
					fill
					unoptimized
				/>
				<div className="relative space-y-10 p-10">
					<h2>
						Proiectul tău,
						<br /> prioritatea noastră.
					</h2>
					<p className="max-w-lg">
						Ai un proiect în minte? Vino cu proiectul casei, afacerii, clădirii tale pentru a discuta în
						detaliu cu specialiștii noștri.
					</p>

					<Link href="/contact" className="button button-gunmetal font-cinzel w-fit">
						Solicită o ofertă
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
