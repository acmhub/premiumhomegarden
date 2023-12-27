import React from "react";
import LineSeparator from "@/components/decorative/line-separator";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const benefits = [
	"Mâner Secustik",
	"Piesă contra acționării greșite",
	"Batare pe Orizontală",
	"Balamale Antiflambaj",
	"Balamale 3D IQ+ (160kg)",
	"Confort termic și izolare eficientă",
	"Microventilație",
];

function Hardware() {
	return (
		<section className="section-spacing">
			<h2 className="text-center">Feronerie</h2>
			<LineSeparator />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 max-lg:mb-10 -mt-20">
				<div className="space-y-4 my-auto">
					<p>
						Descoperă o gamă variată de sisteme de feronerie și deschideri de calitate superioară, concepute
						pentru a-ți îmbunătăți experiența în spațiul tău. Oferind soluții inovatoare pentru uși,
						ferestre și mobilier, sistemele noastre sunt perfect adaptate nevoilor tale.
					</p>
					<p>
						Alege fiabilitatea, securitatea și eleganța pe care le oferă feroneria noastră și transformă-ți
						locuința într-un mediu funcțional și estetic plăcut.
					</p>
				</div>

				<div className="relative h-[500px] max-lg:order-first">
					<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-full flex flex-col items-center justify-center z-10">
						<p className="bg-gunmetal text-white rounded-full mr-[10%] px-2 mb-8 py-1">
							Deschidere Batantă
						</p>
						<p className="bg-gunmetal text-white rounded-full ml-[33%] px-2 mb-12 py-1">
							Deschidere Basculantă
						</p>
						<p className="bg-gunmetal text-white rounded-full mr-[25%] px-2 mb-8 py-1">
							Deschidere Oscilo-basculantă
						</p>
						<p className="bg-gunmetal text-white rounded-full ml-[45%] px-2 py-1">Deschidere Glisantă</p>
					</div>

					<Image
						src="/images/fillers/animated-window.gif"
						alt="Deschidere Fereastra"
						className="object-contain"
						fill
						unoptimized
					/>
				</div>
			</div>

			<div className="flex max-sm:flex-col max-sm:items-start max-sm:justify-start items-center justify-center flex-wrap gap-x-8 gap-y-4">
				{benefits.map((e) => (
					<div className="flex items-center gap-2" key={e}>
						<AiOutlineCheck className="bg-khaki shrink-0 text-white h-5 w-5 rounded-full p-1" />
						<p className="font-cinzel text-lg">{e}</p>
					</div>
				))}

				<div className="flex items-center gap-2">
					<AiOutlinePlus className="bg-gunmetal shrink-0 text-white h-5 w-5 rounded-full p-1" />
					<p className="font-cinzel text-lg">Multe altele</p>
				</div>
			</div>
		</section>
	);
}

export default Hardware;
