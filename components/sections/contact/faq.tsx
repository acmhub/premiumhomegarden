import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import faqs from "@/data/faqs";

function FAQ() {
	const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
	const handleExpand = (i: number) => (i === expandedFAQ ? setExpandedFAQ(null) : setExpandedFAQ(i));

	return (
		<div>
			<h2 className="text-2xl mb-5">Întrebări Frecvente</h2>

			<div className="divide-y divide-khaki">
				{faqs.map(({ question, answer }, i) => (
					<div className="overflow-hidden mb-4" key={i}>
						<div
							className="flex items-center justify-between cursor-pointer pb-2 pt-6 gap-5"
							onClick={() => handleExpand(i)}
						>
							<p className="font-cinzel text-base">{question}</p>
							<HiChevronDown
								size={20}
								className="shrink-0 transition-all"
								style={{
									transform: expandedFAQ === i ? "scaleY(-1)" : "",
								}}
							/>
						</div>
						<AnimatePresence mode="wait">
							{expandedFAQ === i && (
								<motion.p
									initial="collapsed"
									animate="open"
									exit="collapsed"
									variants={{
										open: { height: "auto" },
										collapsed: { height: 0 },
									}}
									transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
									key={i}
								>
									{answer}
								</motion.p>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQ;
