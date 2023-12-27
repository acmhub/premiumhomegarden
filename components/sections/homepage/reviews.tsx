import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reviews from "@/data/reviews";
import stats from "@/data/stats";

function Reviews() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="bg-gradient-to-br from-gunmetal to-charcoal text-white mb-12 py-10">
			<div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-10">
				<div className="col-span-1 md:col-span-3 lg:col-span-4">
					<div className="h-24 flex items-center">
						<div className="relative">
							<AnimatePresence mode="wait">
								{reviews[index] && (
									<motion.div
										key={reviews[index].review}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.5 }}
										className="h-fit w-full space-y-2.5"
									>
										<p className="tracking-wide italic">"{reviews[index].review}"</p>
										<p className="font-cinzel text-lg">- {reviews[index].author}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className="max-lg:hidden lg:col-span-1" />

				{stats.map(({ value, label }) => (
					<div
						className="col-span-1 lg:col-span-2 border-khaki border-[3px] border-y-transparent border-r-transparent space-y-2 py-1 my-auto pl-2.5"
						key={label}
					>
						<p className="font-cinzel text-3xl text-khaki">{value}</p>
						<p className="text-xs font-sans text-neutral-400 uppercase tracking-widest whitespace-nowrap">
							{label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Reviews;
