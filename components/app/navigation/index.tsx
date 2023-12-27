import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import socials from "@/data/socials";
import NavToggle from "./nav-toggle";
import NavLinks from "./nav-links";

function Navigation() {
	let lastScrollTop = useRef(0);
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isToggled, setIsToggled] = useState<boolean>(false);
	const [colorCondition, setColorCondition] = useState<string>("");

	useEffect(() => {
		let checkIsHomepage = pathname === "/" ? "lg:text-white" : "text-black";
		setIsScrolled(window.scrollY > 1);
		setColorCondition(checkIsHomepage.toString());

		const handleScroll = () => {
			if (window.scrollY > 1) {
				setIsScrolled(true);
				setColorCondition("text-black");
			} else {
				setIsScrolled(false);
				setColorCondition(checkIsHomepage.toString());
			}

			if (window.scrollY <= 1000) {
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
	}, [pathname]);

	useEffect(() => {
		isToggled ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}, [isToggled]);

	const handleToggle = useCallback(() => {
		setIsScrolled(!isToggled ? true : isScrolled && window.scrollY >= 100 ? true : false);
		setIsToggled(!isToggled);
	}, [isToggled]);

	return (
		<div
			className={`
				fixed top-0 left-0 w-full transition-all duration-200 py-2.5 lg:px-4 z-50
				${isToggled ? "bg-transparent shadow-none" : ""}
				${
					isVisible && !isScrolled
						? "translate-y-12"
						: isScrolled && isVisible
						? "bg-white shadow-md translate-y-0"
						: "-translate-y-full opacity-0"
				}
			`}
			id="navigation"
		>
			<nav className="container flex items-center justify-between">
				<Link
					href="/"
					className={`
						relative block h-12 w-12 transition-all lg:mr-2.5
						${isScrolled ? "h-12 w-12" : "lg:h-16 lg:w-16"}
					`}
				>
					<Image src="/images/logo.svg" alt="" height={64} width={64} className="object-contain" />
				</Link>

				<div
					className={`
					${
						isToggled
							? "max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:h-[calc(100vh_-_4.28rem)] max-lg:bg-white max-lg:w-full max-lg:p-8 max-lg:pb-40 overflow-y-auto max-lg:border-t max-lg:border-zinc-300"
							: "max-lg:hidden"
					}
					flex flex-col lg:flex-row grow lg:items-center lg:justify-between lg:p-0 lg:pl-6
				`}
				>
					<NavLinks colorCondition={colorCondition || "black"} />

					<Link
						href="/contact"
						className="block button button-khaki font-cinzel max-lg:w-fit max-lg:mx-auto max-lg:my-12"
					>
						Solicită ofertă
					</Link>

					<div className="lg:hidden flex flex-col justify-center items-center font-cinzel text-khaki">
						{socials.slice(0, 2).map(({ href, Icon, label }) => (
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center justify-center mb-8 gap-2"
								key={label}
							>
								<Icon className="h-6 w-6" />
								<p>{label}</p>
							</a>
						))}

						<div className="flex items-center gap-10">
							{socials.slice(2, 5).map(({ href, Icon }) => (
								<a href={href} target="_blank" rel="noopener noreferrer" key={href}>
									<Icon className="h-6 w-6" />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="cursor-pointer lg:hidden" onClick={handleToggle}>
					<NavToggle isToggled={isToggled} />
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
