import React from "react";
import Link from "next/link";
import LineSeparator from "@/components/decorative/line-separator";
import services from "@/data/services";

function Services() {
	return (
		<section className="relative container section-spacing">
			<h2 className="text-center">Serviciile noastre</h2>
			<LineSeparator />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-16 mb-16">
				{services.map(({ Icon, title, description }) => (
					<div className="relative card border-t border-khaki" key={title}>
						<div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-body rounded-full p-5">
							<Icon className="h-8 w-8 text-khaki" />
						</div>

						<div className="pt-6">
							<h3 className="font-cinzel text-center text-2xl mb-2">{title}</h3>
							<p className="text-center">{description}</p>
						</div>
					</div>
				))}
			</div>

			<Link
				href="/servicii"
				className="button button-khaki-outlined text-black hover:text-white block w-fit mx-auto"
			>
				Vezi mai mult
			</Link>
		</section>
	);
}

export default Services;
