import React from "react";
import Image from "next/image";
import Link from "next/link";
import LineSeparator from "@/components/decorative/line-separator";
import { HiArrowLongRight } from "react-icons/hi2";

function Portfolio() {
	return (
		<section className="relative container section-spacing">
			<h2 className="text-center">Proiecte realizate</h2>
			<LineSeparator />

			<div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-10 gap-2">
				<Image
					src="/images/portfolio/11.webp"
					alt=""
					width={500}
					height={500}
					className="col-span-1 md:col-span-6 xl:col-span-5 card h-80 md:h-96 w-full rounded object-cover p-0"
				/>
				<Image
					src="/images/portfolio/17.webp"
					alt=""
					width={500}
					height={500}
					className="col-span-1 md:col-span-6 xl:col-span-5 card h-80 md:h-96 w-full rounded object-cover p-0"
				/>
				<Image
					src="/images/portfolio/23.webp"
					alt=""
					width={500}
					height={500}
					className="col-span-1 md:col-span-4 xl:col-span-3 card h-80 md:h-60 w-full rounded object-cover p-0"
				/>
				<Image
					src="/images/portfolio/51.webp"
					alt=""
					width={500}
					height={500}
					className="col-span-1 md:col-span-4 xl:col-span-3 card h-80 md:h-60 w-full rounded object-cover p-0"
				/>
				<Image
					src="/images/portfolio/55.webp"
					alt=""
					width={500}
					height={500}
					className="col-span-1 md:col-span-4 xl:col-span-3 card h-80 md:h-60 w-full rounded object-cover p-0"
				/>

				<Link
					href="/portofoliu"
					className="col-span-1 md:col-span-12 xl:col-span-1 button flex items-center justify-center bg-khaki text-white text-center rounded p-2"
				>
					<HiArrowLongRight size={32} />
				</Link>
			</div>
		</section>
	);
}

export default Portfolio;
