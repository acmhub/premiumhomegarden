import Image from "next/image";
import React from "react";

interface Props {
	data: {
		source: string;
		title: string;
		descriptions?: string[];
		profile?: string;
	}[];
}

function Variants({ data }: Props) {
	return data.map(({ source, profile, title, descriptions }, index) => (
		<div className="grid grid-cols-1 lg:grid-cols-2 section-spacing gap-5 lg:gap-10" key={title}>
			<div className="max-lg:order-last space-y-5 my-auto">
				<div className="flex items-center gap-2">
					<h2>{title}</h2>
				</div>

				{descriptions?.map((e, i) => (
					<p key={i}>{e}</p>
				))}
			</div>

			<div
				className={`relative h-80 my-auto w-full rounded-md overflow-hidden ${
					index % 2 === 0 && "lg:order-first"
				}`}
			>
				<Image src={source} alt={title} className=" object-cover" fill unoptimized />
				{profile && (
					<div
						className={`absolute bottom-0 right-0 card bg-white h-40 w-40 object-contain rounded-none max-lg:rounded-tl-md p-4 z-10
								${index % 2 !== 0 ? "lg:right-full lg:left-0 lg:rounded-tr-md" : "lg:rounded-tl-md"}`}
					>
						<Image
							src={profile}
							alt={title}
							className="absolute bottom-0 left-0 object-cover p-4"
							fill
							unoptimized
						/>
					</div>
				)}
			</div>
		</div>
	));
}

export default Variants;
