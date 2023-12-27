import React from "react";
import Image from "next/image";

interface Props {
	data: {
		source: string;
		name: string;
	}[];
	product_name: string;
	grid?: string;
}

function Models({ data, product_name, grid }: Props) {
	return (
		<div
			className={`grid gap-5 gap-y-10 ${
				grid ? grid : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
			}`}
		>
			{data.map(({ source, name }) => (
				<div className="relative overflow-hidden flex flex-col justify-end space-y-2.5 px-5" key={name}>
					<Image
						src={source}
						alt={product_name + " " + name}
						height={496}
						width={496}
						className="max-h-80 w-full object-contain"
						unoptimized
					/>
					<p className="font-cinzel text-lg text-white text-center pb-5">{name}</p>
					<div className="absolute bottom-0 left-0 h-[33%] w-full bg-khaki rounded pointer-events-none z-[-1]" />
				</div>
			))}
		</div>
	);
}

export default Models;
