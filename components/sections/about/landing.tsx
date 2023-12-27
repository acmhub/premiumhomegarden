import React from "react";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";

const traits = [
	{
		Icon: HiLightBulb,
		title: "Soluții personalizate",
		paragraph:
			"Fiecare proiect este unic, iar noi oferim soluții personalizate pentru a satisface nevoile specifice ale clienților noștri.",
	},
	{
		Icon: FaMedal,
		title: "Calitate superioară",
		paragraph:
			"Produsele noastre reflectă standarde înalte de calitate și durabilitate, garantând satisfacția clienților.",
	},
	{
		Icon: GiPriceTag,
		title: "Prețuri competitve",
		paragraph: "Ne străduim să oferim produse de înaltă calitate la prețuri competitive pe piață.",
	},
];

function Landing() {
	return (
		<section className="relative container grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto gap-8 lg:gap-20 section-spacing">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 mx-auto px-2">
					<div className="relative h-60 lg:mb-6">
						<Image
							src="/images/fillers/windowsdoors.webp"
							alt="Ferestre si usi"
							className="object-cover rounded-md"
							fill
							unoptimized
						/>
					</div>
					<div className="relative h-60 max-lg:hidden">
						<Image
							src="/images/fillers/hala2.webp"
							alt="Producator Tamplarie PVC"
							className="object-cover rounded-md"
							fill
							unoptimized
						/>
					</div>
				</div>
				<div className="lg:w-1/2 w-full px-2 mt-10 max-lg:hidden">
					<div className="relative h-60 lg:mb-6">
						<Image
							src="/images/fillers/hala1.webp"
							alt="Producator Tamplarie PVC"
							className="object-cover rounded-md"
							fill
							unoptimized
						/>
					</div>
					<div className="relative h-60">
						<Image
							src="/images/fillers/exterior.webp"
							alt=""
							className="object-cover rounded-md"
							fill
							unoptimized
						/>
					</div>
				</div>
			</div>

			<div className="space-y-4 my-auto">
				<p className="font-cinzel text-2xl">Îți oferim cele mai bune soluții pentru casa ta</p>

				<p>
					Echipa noastră oferă în prezent o gamă completă de ferestre, uși și accesorii aferente. Datorită
					produselor premium pe care le utilizăm echipă noastră asigură parteneriate de lungă durată
					adaptandu-se ultimelor tendințe și investind în dezvoltarea serviciilor noastre.
				</p>

				<ul className="space-y-4 py-5">
					{traits.map(({ Icon, title, paragraph }, i) => (
						<div className="flex gap-4" key={i}>
							<Icon className="bg-khaki text-white h-10 w-10 shrink-0 rounded-md p-2 mt-1" />

							<div>
								<p className="font-cinzel text-lg">{title}</p>
								<p>{paragraph}</p>
							</div>
						</div>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Landing;
