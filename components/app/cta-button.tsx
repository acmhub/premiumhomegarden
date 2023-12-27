import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { useClickAway } from "@/hooks/useClickAway";
import socials from "@/data/socials";

function CTAButton() {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isToggled, setIsToggled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 750) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
				setIsToggled(false);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isVisible]);

	useClickAway(containerRef, () => setIsToggled(false));

	return (
		<div className="fixed bottom-5 left-5 z-40" ref={containerRef}>
			<AiOutlinePlus
				className={`relative text-white rounded-full h-9 w-9 transition-all duration-500 cursor-pointer z-20 p-1.5
					${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"}
					${isToggled ? "bg-charcoal rotate-[270deg]" : "bg-khaki"}
				`}
				onClick={() => setIsToggled((toggled) => !toggled)}
			/>

			<div className="absolute left-0 bottom-full flex flex-col space-y-2.5 mb-2.5">
				<AnimatePresence mode="sync">
					{isVisible &&
						isToggled &&
						socials.map(({ href, Icon }, i) => (
							<motion.a
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								transition={{
									duration: 0.05,
									delay: i * 0.02,
									type: "spring",
									stiffness: 100,
									bounce: 10,
									damping: 15,
								}}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className={`bg-khaki text-white rounded-full z-10 p-2 ${
									!isVisible && "pointer-events-none"
								}`}
								key={href}
							>
								<Icon className="h-5 w-5" />
							</motion.a>
						))}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default CTAButton;
