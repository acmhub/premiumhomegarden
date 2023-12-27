import React from "react";
import Image from "next/image";
import suppliers from "@/data/suppliers";

function Suppliers() {
	return (
		<section className="bg-gunmetal section-spacing py-8">
			<div className="text-white px-5 lg:px-10">
				<h2 className="text-2xl text-center mb-8">Lucrăm doar cu cei mai buni</h2>

				<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-10 gap-10">
					{suppliers.map(({ image_mono, name }) => (
						<div className="relative block h-8 w-20 m-auto" key={name}>
							<Image src={image_mono} alt={name} title={name} objectFit="contain" fill unoptimized />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Suppliers;
