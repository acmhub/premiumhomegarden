import React from "react";
import Image from "next/image";
import LineSeparator from "@/components/decorative/line-separator";

function Glass() {
	return (
		<section className="section-spacing">
			<h2 className="text-center">Sticlă</h2>
			<LineSeparator />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
				<div className="relative h-96 rounded overflow-hidden">
					<Image
						src="/images/products/sticla/highlight.webp"
						alt="Sticla Termoizolanta Termopan Tripan"
						className="object-cover"
						fill
						unoptimized
					/>
				</div>

				<div className="my-auto space-y-5">
					<p className="font-cinzel text-2xl max-w-lg">
						Performanța sticlei termoizolante la cea mai bună calitate
					</p>

					<p>
						Sticla de înaltă performanță este o componentă cheie a furnizării unui mediu construit
						confortabil și eficient din punct de vedere energetic. Pentru a realiza acest lucru, este
						necesară o legătură durabilă, optimizată termic pentru pachet de sticla termoizolantă.
					</p>

					<p>
						Distanțierele de margine calde (warm-edge/thermix) funcționează prin separarea panourilor de
						sticlă în geam dublu sau triplu și sunt fabricate din materiale cu conductivitate scăzută.
						Cavitatea creată de distanțier reduce transferul de căldură prin centrul sticlei, iar utilizarea
						unui distanțier de margine cald reduce conducția termică în zona opaca de la marginea sticlei.
						Prin reducerea transferului de căldură la îmbinarea marginii, utilizarea distanțierului de
						margine cald se traduce în economii de energie pentru clădiri, indiferent de sezon.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Glass;
