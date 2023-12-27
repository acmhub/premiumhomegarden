import React from "react";
import Link from "next/link";

function Landing() {
	return (
		<section className="relative min-h-[700px] md:min-h-[750px] xl:min-h-[800px] flex flex-col pt-32 lg:pt-44 text-white mb-20">
			<div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-gunmetal from-5% via-khaki to-body z-[-1]" />

			<div className="relative container max-w-4xl my-auto xl:mt-auto">
				<div className="flex flex-col items-center justify-center text-center space-y-8">
					<h1 className="font-display">
						Cele mai bune soluții pentru <br />
						casa și grădina ta
					</h1>

					<p>
						La Premium Home & Garden Solutions, ne mândrim cu produsele noastre, serviciile superioare
						pentru clienți și cu atenția la detalii. Oferim produse de înaltă calitate care fac ca
						îngrijirea casei tale să fie rapidă, ușoară și convenabilă!
					</p>

					<div className="flex flex-wrap justify-center items-center gap-2.5">
						<Link href="/produse" className="font-cinzel button button-khaki">
							Produse
						</Link>
						<Link href="/servicii" className="font-cinzel button button-khaki-outlined">
							Servicii
						</Link>
					</div>
				</div>
			</div>

			<img
				src="/images/fillers/landing-beta.png"
				alt=" "
				className="max-md:h-32 max-md:-mt-0 -mt-20 w-full object-cover"
			/>
		</section>
	);
}

export default Landing;
