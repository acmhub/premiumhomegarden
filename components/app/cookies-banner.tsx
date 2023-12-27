import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsCookieConsentGiven from "@/hooks/useIsCookieConsentGiven";
import Link from "next/link";

function CookiesBanner() {
	const [cookieConsent, toggleCookieConsent] = useIsCookieConsentGiven();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const delayBannerAppearance = setTimeout(() => {
			setIsVisible(true);
		}, 1000);

		return () => {
			clearTimeout(delayBannerAppearance);
		};
	}, []);

	const handleConsent = (response: "denied" | "granted") => {
		toggleCookieConsent(response);
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.33,
							type: "spring",
							bounce: 5,
							stiffness: 75,
						},
					}}
					exit={{
						opacity: 0,
						y: 50,
					}}
					className="fixed bottom-4 left-4 bg-gunmetal text-white rounded overflow-hidden shadow-lg max-w-sm w-full shadow-neutral-700 z-40"
				>
					<p className="p-5">
						Acest site utilizează cookie-uri pentru a-ți oferi cea mai bună experiență posibilă. Prin
						continuarea navigării pe site, ești de acord cu utilizarea cookie-urilor conform politicii
						noastre. Pentru mai multe informații despre modul în care folosim cookie-urile și cum le poți
						gestiona, te rugăm să consulți{" "}
						<Link href="/politica-cookies" className="text-khaki underline">
							politica de cookie-uri.
						</Link>
					</p>

					<div className="relative flex flex-wrap border-t border-zinc-600 divide-x divide-zinc-600 rounded-b-md">
						<button
							className="button hover:bg-white/10 flex-1 text-sm text-center py-2"
							onClick={() => handleConsent("denied")}
						>
							Refuz
						</button>
						<button
							className="button bg-teal-500 bg-opacity-20 hover:bg-opacity-50 flex-1 text-sm text-center py-2"
							onClick={() => handleConsent("granted")}
						>
							Accept
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default CookiesBanner;
