import React, { useState, useRef, useEffect, useCallback } from "react";
import LineSeparator from "@/components/decorative/line-separator";
import { motion } from "framer-motion";

interface Props {
	data: {
		label: string;
		items: {
			source: string;
			label: string;
		}[];
	}[];
}

function Customisation({ data }: Props) {
	const tabRef = useRef<Array<HTMLDivElement | null>>([]);
	const tabUnderlineRef = useRef<HTMLSpanElement>(null);

	const [activeTab, setActiveTab] = useState(0);
	const [tabUnderline, setTabUnderline] = useState({ width: 0, left: 0 });

	const updateTabUnderline = useCallback(() => {
		const currentTab = tabRef.current[activeTab];

		if (currentTab && tabRef.current[0]) {
			const { left, width } = currentTab.getBoundingClientRect();
			const offsetLeft = left - tabRef.current[0].getBoundingClientRect().left;
			setTabUnderline({ left: offsetLeft, width });
		}
	}, [activeTab]);

	const handleHover = useCallback((index: number) => {
		const currentTab = tabRef.current[index];
		if (currentTab && tabRef.current[0]) {
			const { left, width } = currentTab.getBoundingClientRect();
			const offsetLeft = left - tabRef.current[0].getBoundingClientRect().left;
			setTabUnderline({ left: offsetLeft, width });
		}
	}, []);

	const handleMouseLeave = useCallback(() => {
		updateTabUnderline();
	}, [updateTabUnderline]);

	useEffect(() => {
		updateTabUnderline();
	}, [updateTabUnderline, activeTab]);

	return (
		<section className="container section-spacing">
			<h2 className="text-center">Personalizare</h2>
			<LineSeparator />

			<div className="relative flex items-center justify-center w-fit mx-auto gap-1 mb-5">
				{data.map((item, index) => (
					<p
						ref={(el) => (tabRef.current[index] = el)}
						className="relative cursor-pointer px-4 py-1.5 z-10"
						onMouseOver={() => handleHover(index)}
						onMouseLeave={handleMouseLeave}
						onClick={() => setActiveTab(index)}
						key={index}
					>
						{item.label}
					</p>
				))}

				<motion.span
					ref={tabUnderlineRef}
					className="absolute bottom-0 block h-px bg-khaki transition-all pointer-events-none rounded duration-300 z-0"
					animate={{
						left: tabUnderline.left,
						width: tabUnderline.width,
					}}
					transition={{
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-lg:grid max-lg:grid-cols-2 lg:flex max-lg:items-center lg:items-start lg:flex-wrap lg:justify-center gap-5">
				{data[activeTab].items.map(({ source, label }) => (
					<div className="block" key={label}>
						<img
							src={source}
							alt={label}
							className="max-h-60 w-fit lg:max-w-xs rounded object-contain mx-auto p-0"
						/>
						<p className="font-display text-center lg:text-xl mt-2.5">{label}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Customisation;
