import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import routes from "@/data/routes";
import DropdownLinks from "./dropdown-links";
import { useClickAway } from "@/hooks/useClickAway";

function NavLinks({ colorCondition }: { colorCondition: string }) {
	const pathname = usePathname();
	const linkRef = useRef<Array<HTMLDivElement | null>>([]);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const tabUnderlineRef = useRef<HTMLSpanElement>(null);

	const [tabUnderline, setTabUnderline] = useState({ width: 0, left: 0 });
	const [isDropdownToggled, setIsDropdownToggled] = useState(false);

	const updateTabUnderline = useCallback(() => {
		let activeRouteIndex;
		if (pathname.startsWith("/produse")) {
			activeRouteIndex = routes.findIndex((route) => route.label === "Produse");
		} else {
			activeRouteIndex = routes.findIndex((route) => route.path === pathname);
		}

		if (isDropdownToggled) {
			activeRouteIndex = routes.findIndex((route) => route.label === "Produse");
		}

		const currentTab = linkRef.current[activeRouteIndex];
		if (currentTab && linkRef.current[0]) {
			const { left, width } = currentTab.getBoundingClientRect();
			const offsetLeft = left - linkRef.current[0].getBoundingClientRect().left;
			setTabUnderline({ left: offsetLeft, width });
		}
	}, [pathname, isDropdownToggled]);

	const handleHover = useCallback(
		(index: number) => {
			if (!isDropdownToggled) {
				const currentTab = linkRef.current[index];
				if (currentTab && linkRef.current[0]) {
					const { left, width } = currentTab.getBoundingClientRect();
					const offsetLeft = left - linkRef.current[0].getBoundingClientRect().left;
					setTabUnderline({ left: offsetLeft, width });
				}
			}
		},
		[isDropdownToggled]
	);

	const handleMouseLeave = useCallback(() => {
		if (!isDropdownToggled) {
			updateTabUnderline();
		}
	}, [isDropdownToggled, updateTabUnderline]);

	const handleScroll = useCallback(() => {
		updateTabUnderline();
	}, [updateTabUnderline]);

	useEffect(() => {
		updateTabUnderline();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll, updateTabUnderline, isDropdownToggled]);

	useClickAway(dropdownRef, () => setIsDropdownToggled(false));

	return (
		<div className="relative flex flex-col lg:flex-row font-cinzel max-lg:gap-5" id="nav-links">
			{routes.map((link, index) => (
				<div key={index} ref={(el) => (linkRef.current[index] = el)}>
					{link.isDropdown ? (
						<div ref={dropdownRef}>
							<button
								className={`relative nav-link ${colorCondition} text-base ${
									pathname === link.path || pathname.includes(link.path) ? "active" : ""
								}`}
								onClick={() => setIsDropdownToggled((prev) => !prev)}
								onMouseOver={() => handleHover(index)}
								onMouseLeave={handleMouseLeave}
							>
								{link.label}
							</button>
							{link.dropdown && <DropdownLinks link={link} isDropdownToggled={isDropdownToggled} />}
						</div>
					) : (
						<Link
							className={`relative nav-link ${colorCondition} ${pathname === link.path ? "active" : ""}`}
							onMouseOver={() => handleHover(index)}
							onMouseLeave={handleMouseLeave}
							href={link.path}
						>
							{link.label}
						</Link>
					)}

					{index === 0 && (
						<motion.span
							ref={tabUnderlineRef}
							className="absolute -bottom-2 block h-px bg-khaki transition-all duration-300"
							animate={{
								left: tabUnderline.left,
								width: tabUnderline.width,
							}}
							transition={{
								ease: "easeInOut",
							}}
							id="navlinks-underline"
						/>
					)}
				</div>
			))}
		</div>
	);
}

export default NavLinks;
