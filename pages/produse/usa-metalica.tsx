import React from "react";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import CallToAction from "@/components/sections/globals/call-to-action";
import metalicDoors from "@/data/products/metalic-doors";
import Models from "@/components/sections/products/models";

const benefits = [
	"Toc din profil de aluminiu cu rupere termică, ranforsat cu lemn",
	"Izolație",
	"Tăblie din oțel",
	"Prag termic din aluminiu",
	"Geam cvadruplu stratificat cu protecție termică (opțional sticlă de siguranță laminată)",
];

function UsaMetalica() {
	return (
		<Layout
			title="Ușă Metalică"
			description="Ușile noastre metalice sunt concepute pentru a oferi o protecție maximă împotriva intruziunilor și a condițiilor meteorologice dure. Fie că sunteți în căutarea unor uși pentru exterior sau pentru interior, vă punem la dispoziție produse care combină rezistența și durabilitatea metalului cu designul elegant și funcționalitatea. "
			canonical="/produse/usa-metalica"
			pageID="product"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Ușă Metalică</h1>
				<LineSeparator />
			</div>

			<div className="container section-spacing">
				<section className="grid grid-cols-1 lg:grid-cols-10 gap-10 section-spacing">
					<div className="col-span-1 lg:col-span-3 my-auto space-y-5">
						{benefits.map((e, i) => (
							<div className="flex items-center space-x-2" key={i}>
								<div className="bg-charcoal text-khaki rounded-full p-2">
									<AiOutlineCheck />
								</div>

								<p>{e}</p>
							</div>
						))}
					</div>

					<div className="col-span-1 lg:col-span-4 max-lg:order-first">
						<Image
							src="/images/products/usa-metalica/profile.webp"
							alt="Profil Usa Metalica"
							height={496}
							width={496}
							className="max-h-96 w-full object-contain"
							unoptimized
						/>
					</div>

					<div className="col-span-1 lg:col-span-3 max-lg:flex max-lg:flex-col max-lg:items-center space-y-10 my-auto">
						<div className="font-cinzel">
							<p className="text-2xl mb-5">Culori disponibile</p>
							<div className="flex items-center max-lg:justify-center gap-8">
								<div>
									<div className="card bg-white h-10 w-10 mx-auto mb-4" />
									<p className="uppercase text-lg text-center">Alb</p>
								</div>

								<div>
									<div className="card bg-gray-800 h-10 w-10 mx-auto mb-4" />
									<p className="uppercase text-lg text-center">Gri Antracit</p>
								</div>
							</div>
						</div>

						<div>
							<p className="font-cinzel text-2xl mb-5">Coeficient de Transfer Termic</p>
							<div className="flex items-center max-lg:justify-center gap-8">
								<div className="text-center">
									<p className="text-lg font-display">0,68 W/㎡K</p>
									<p>fără sticlă</p>
								</div>

								<div className="text-center">
									<p className="text-lg font-display">0,78 W/㎡K</p>
									<p>cu sticlă</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-spacing">
					<h2 className="text-center">Modele Ușă Metalică</h2>
					<LineSeparator />

					<Models data={metalicDoors} product_name="Ușă Metalică" />
				</section>

				<CallToAction addSpacing />
			</div>
		</Layout>
	);
}

export default UsaMetalica;
