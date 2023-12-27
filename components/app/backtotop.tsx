import React, { useRef, useState, useEffect } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";

function BackToTop() {
	let lastScrollTop = useRef(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 1000) {
				setIsVisible(false);
			} else if (scrollY + window.innerHeight >= document.body.scrollHeight - 500) {
				setIsVisible(true);
			} else if (window.scrollY > lastScrollTop.current) {
				setIsVisible(false);
			} else if (window.scrollY < lastScrollTop.current) {
				setIsVisible(true);
			}

			lastScrollTop.current = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<HiOutlineChevronUp
			className={`fixed bottom-5 right-5 bg-gunmetal text-white h-9 w-9 rounded-full transition-all duration-200 ease-in-out cursor-pointer p-1 z-40 ${
				isVisible
					? "opacity-100 translate-x-0 pointer-events-auto"
					: "opacity-0 translate-x-5 pointer-events-none"
			}`}
			onClick={scrollToTop}
		/>
	);
}

export default React.memo(BackToTop);
