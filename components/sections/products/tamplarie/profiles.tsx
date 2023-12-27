import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface Props {
	start?: string;
	data: Profiles[] | null;
}

function Profiles({ data, start }: Props) {
	if (!data) return null;
	let startOn = data.find((profile) => profile.model === start);

	return (
		<React.Fragment>
			<Swiper
				initialSlide={startOn?.id || 0}
				loop={true}
				slidesPerView={1}
				spaceBetween={10}
				speed={300}
				navigation={{
					prevEl: ".prev",
					nextEl: ".next",
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
					1360: {
						loop: true,
						slidesPerView: 4,
					},
				}}
				modules={[Navigation]}
			>
				{data.map(({ id, manufacturer, model, manufacturerLogo, profileImage, href, specs }) => (
					<SwiperSlide
						className="relative p-2"
						key={id}
						style={{
							height: "auto",
						}}
					>
						<div className="card h-full space-y-5">
							<img
								src={profileImage}
								alt={manufacturer + " " + model}
								className="h-40 lg:h-60 mx-auto object-contain"
							/>
							<img
								src={manufacturerLogo}
								alt={manufacturer}
								className="h-8 w-16 mx-auto object-contain"
							/>
							<h2 className="text-center text-xl">
								{manufacturer} <br />
								{model}
							</h2>

							<ul className="space-y-2.5">
								{specs.map(({ value, label }, i) => (
									<li key={i}>
										<p className="font-sans uppercase tracking-wider opacity-50 mb-1">{label}</p>
										<p className="bg-khaki text-white w-fit rounded-md font-cinzel text-base px-2 py-1">
											{value}
										</p>
									</li>
								))}
							</ul>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex items-center justify-center gap-5 mt-5">
				<button className="prev relative group text-khaki hover:text-white duration-150 p-2">
					<IoChevronBackSharp className="relative h-7 w-7 -translate-x-0.5 z-10" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 group-hover:h-full group-hover:w-full bg-khaki rounded-full transition-all pointer-events-none z-0" />
				</button>
				<button className="next relative group text-khaki hover:text-white duration-150 p-2">
					<IoChevronBackSharp className="relative h-7 w-7 rotate-180 translate-x-0.5 z-10" />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 group-hover:h-full group-hover:w-full bg-khaki rounded-full transition-all pointer-events-none z-0" />
				</button>
			</div>
		</React.Fragment>
	);
}

export default Profiles;
