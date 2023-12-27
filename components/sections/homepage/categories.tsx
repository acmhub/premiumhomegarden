import React from "react";
import Link from "next/link";
import Image from "next/image";

function Categories() {
	return (
		<section className="container text-white grid lg:grid-cols-2 gap-2.5 section-spacing">
			<Link href="/ferestre-si-usi" className="relative block card h-80 lg:h-[31rem] overflow-hidden group p-0">
				<Image
					src="/images/fillers/windowsdoors.webp"
					alt="Ferestre și Uși"
					className="h-full w-full object-cover group-hover:scale-105 ease-in-out transition-all duration-300"
					fill
					unoptimized
				/>
				<p className="absolute bottom-4 left-4 text-2xl font-cinzel drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,1)] z-10">
					Ferestre și Uși
				</p>
			</Link>

			<div className="text-white space-y-2.5">
				<Link
					href="/compartimentari"
					className="relative block card h-80 lg:h-[15.175rem] overflow-hidden group p-0"
				>
					<Image
						src="/images/fillers/partitions.webp"
						alt="Compartimentări Sticlă"
						className="h-full w-full object-cover group-hover:scale-105 ease-in-out transition-all duration-300"
						fill
						unoptimized
					/>
					<p className="absolute bottom-4 left-4 text-2xl font-cinzel drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,1)] z-10">
						Compartimentări
					</p>
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
					<Link
						href="/sisteme-de-umbrire"
						className="relative block card h-80 lg:h-[15.175rem] overflow-hidden group p-0"
					>
						<Image
							src="/images/fillers/shadowing.webp"
							alt="Sisteme de Umbrire"
							className="h-full w-full object-cover group-hover:scale-105 ease-in-out transition-all duration-300"
							fill
							unoptimized
						/>
						<p className="absolute bottom-4 left-4 text-2xl font-cinzel drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,1)] z-10">
							Sisteme de Umbrire
						</p>
					</Link>

					<Link
						href="/exterior"
						className="relative block card h-80 lg:h-[15.175rem] overflow-hidden group p-0"
					>
						<Image
							src="/images/fillers/exterior.webp"
							alt="Exterior"
							className="h-full w-full object-cover group-hover:scale-105 ease-in-out transition-all duration-300"
							fill
							unoptimized
						/>
						<p className="absolute bottom-4 left-4 text-2xl font-cinzel drop-shadow-[0_0.2rem_0.2rem_rgba(0,0,0,1)] z-10">
							Exterior
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Categories;
