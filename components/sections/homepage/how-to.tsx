import React from "react";
import Image from "next/image";

const data = [
	{
		image: "/images/fillers/howto/step1.webp",
		text: "Solicită o ofertă de preț personalizată",
	},
	{
		image: "/images/fillers/howto/step2.webp",
		text: "Analizează oferta de preț împreuna cu echipa noastră",
	},
	{
		image: "/images/fillers/services/measurement.webp",
		text: "Venim pentru măsurători și oferta finală",
	},
	{
		image: "/images/fillers/services/collaboration.webp",
		text: "Stabilim împreună data și ora pentru montaj",
	},
];

function HowTo() {
	return (
		<section className="relative container section-spacing">
			<h2 className="font-cinzel text-center mb-10">Cum comand?</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{data.map(({ image, text }) => (
					<div className="max-w-xs mx-auto space-y-2.5" key={text}>
						<div className="relative h-28 w-28 mx-auto rounded-full overflow-hidden border-4 border-khaki">
							<Image src={image} alt={text} className="object-cover" fill unoptimized />
						</div>
						<p className="font-cinzel text-center text-lg">{text}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default HowTo;
