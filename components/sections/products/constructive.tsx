import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

interface Props {
	data: {
		source: string;
		title: string;
		descriptions: string[];
	}[];
}

function Constructive({ data }: Props) {
	return (
		<section className="relative section-spacing">
			<Swiper
				autoplay={{
					delay: 7500,
				}}
				loop={true}
				speed={450}
				slidesPerView={1}
				spaceBetween={10}
				navigation={{
					prevEl: ".constructive-prev",
					nextEl: ".constructive-next",
				}}
				modules={[Autoplay, Navigation]}
				className="p-1"
			>
				{data.map(({ source, title, descriptions }) => (
					<SwiperSlide className="relative" key={title}>
						<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
							<div className="space-y-4 lg:bg-khaki lg:text-white lg:p-10 lg:flex lg:flex-col lg:justify-center">
								<h2>{title}</h2>
								{descriptions.map((description, i) => (
									<p key={i}>{description}</p>
								))}
							</div>

							<div className="relative max-lg:order-first h-96">
								<Image src={source} alt={title} className="object-cover" fill unoptimized />
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex items-center justify-center gap-5 mt-5 z-10">
				<button className="constructive-prev relative group text-khaki hover:text-white duration-150 p-2">
					<IoChevronBackSharp className="relative h-7 w-7 -translate-x-0.5 z-10" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 group-hover:h-full group-hover:w-full bg-khaki rounded-full transition-all pointer-events-none z-0" />
				</button>
				<button className="constructive-next relative group text-khaki hover:text-white duration-150 p-2">
					<IoChevronBackSharp className="relative h-7 w-7 rotate-180 translate-x-0.5 z-10" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 group-hover:h-full group-hover:w-full bg-khaki rounded-full transition-all pointer-events-none z-0" />
				</button>
			</div>
		</section>
	);
}

export default Constructive;
