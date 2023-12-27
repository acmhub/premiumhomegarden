import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import LineSeparator from "@/components/decorative/line-separator";
import { woodImitation, RALColors } from "@/data/products/colors";
const Modal = dynamic(() => import("@/components/utils/modal"));

const highlights = [
	{
		name: "Anthrazitgrau 55",
		label: "Gri Antracit",
	},
	{
		name: "Golden Oak 51",
		label: "Stejar Auriu",
	},
	{
		name: "Nussbaum 21",
		label: "Nuc",
	},
	{
		name: "Mahagoni 26",
		label: "Mahon",
	},
	{
		name: "Mooreiche 25",
		label: "Mooreiche / Wenge",
	},
];

function Colors() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeColor, setActiveColor] = useState<string | null>(null);

	return (
		<section className="section-spacing">
			<h2 className="text-center">Culori disponibile</h2>
			<LineSeparator />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
				<div className="space-y-8 my-auto">
					<p className="font-cinzel text-2xl">Alege culorile și finisajele potrivite pentru tâmplăria ta</p>
					<p>
						Poți alege dintre alb și imitații de lemn, precum gri antracit, nuc, stejar auriu si multe
						altele, sau poți alege orice nuanță RAL pentru a obține culoarea potrivită pentru tâmplăria ta.
						Cu o gamă atât de largă de opțiuni, poți crea un aspect personalizat pentru casa ta.
					</p>

					<div className="flex items-center justify-center flex-wrap gap-5">
						<button
							className="relative button button-khaki text-center text-xs font-cinzel whitespace-nowrap flex-1"
							onClick={() => {
								setIsVisible(true);
								setActiveColor("wood");
							}}
						>
							Paletar Imitație Lemn
						</button>
						<button
							className="relative button button-khaki text-center text-xs font-cinzel whitespace-nowrap flex-1"
							onClick={() => {
								setIsVisible(true);
								setActiveColor("ral");
							}}
						>
							Paletar RAL
						</button>
					</div>
				</div>

				<div className="relative h-60 w-full max-lg:order-first">
					<Image
						src="/images/colors/colors-profile.png"
						alt="Paletar Tamplarie Imitatie Lemn sau RAL"
						className="object-contain"
						fill
						unoptimized
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mx-auto gap-5">
				{highlights.map((highlight, index) => (
					<div key={index}>
						{woodImitation
							.filter((obj) => obj.name === highlight.name)
							.map((matchingObject, innerIndex) => (
								<div key={innerIndex}>
									<Image
										src={matchingObject.source}
										alt={highlight.name}
										height={216}
										width={216}
										className="h-20 w-20 rounded-full mx-auto mb-2.5 object-cover"
										unoptimized
									/>
									<p className="font-cinzel text-center text-lg xs:text-xl">{highlight.label}</p>
								</div>
							))}
					</div>
				))}
				<div>
					<div className="h-20 w-20 bg-khaki text-white mx-auto grid place-content-center rounded-full mb-2.5">
						<AiOutlinePlus className="h-8 w-8" />
					</div>
					<p className="font-cinzel text-center text-lg xs:text-xl">Multe altele</p>
				</div>
			</div>

			<Modal
				title={activeColor === "wood" ? "Paletar Imitație Lemn" : "Paletar RAL"}
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				onClose={() => setActiveColor(null)}
			>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-neutral-100 p-2">
					{activeColor === "wood"
						? woodImitation.map(({ source, name }) => (
								<div key={name}>
									<div className="relative h-40 w-full">
										<Image
											src={source}
											alt={name}
											width={256}
											height={256}
											className="h-full w-full"
											unoptimized
										/>
									</div>
									<p className="bg-white text-sm max-sm:w-full max-sm:text-center px-2 py-1">
										{name}
									</p>
								</div>
						  ))
						: RALColors.map(({ HEX, English }) => (
								<div key={HEX}>
									<div className="relative h-40 w-full" style={{ backgroundColor: HEX }} />
									<p className="bg-white text-sm max-sm:w-full max-sm:text-center px-2 py-1">
										{English}
									</p>
								</div>
						  ))}
				</div>
			</Modal>
		</section>
	);
}

export default Colors;
