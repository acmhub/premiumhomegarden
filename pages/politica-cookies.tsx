import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import useIsCookieConsentGiven from "@/hooks/useIsCookieConsentGiven";
import { cookiePolicy } from "@/data/policies";

function CookiePolicy() {
	const [cookieConsent, toggleCookieConsent] = useIsCookieConsentGiven();

	return (
		<Layout
			title="Politica de Cookies"
			canonical="https://premiumhomegarden.ro/politica-cookies"
			pageID="cookie-policy"
		>
			<div className="container page-navbar-offset section-spacing">
				<h1 className="page-title">Politica de Cookies</h1>
				<LineSeparator />

				<div className="divide-y">
					{cookiePolicy.map(({ title, paragraphs }, i) => (
						<div className="py-8" key={i}>
							<h2 className="text-2xl font-display mb-4">
								{i + 1}. {title}
							</h2>

							<div className="space-y-2">
								{paragraphs.map((e, id) => (
									<p key={id}>{e}</p>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="text-center space-y-2.5 mt-20">
					<p>Modificați mai jos utilizarea cookie-urilor</p>
					<label
						htmlFor="toggle-cookies"
						className="flex items-center w-fit mx-auto space-x-4 cursor-pointer"
					>
						<span>Refuzate</span>
						<span className="relative">
							<input
								id="toggle-cookies"
								type="checkbox"
								className="hidden peer"
								defaultChecked={cookieConsent === "granted" ? true : false}
								onChange={() => toggleCookieConsent(cookieConsent === "granted" ? "denied" : "granted")}
							/>
							<div className="w-10 h-6 rounded-full shadow-inner bg-red-800 peer-checked:bg-emerald-700"></div>
							<div className="absolute transition-all inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
						</span>
						<span>Acceptate</span>
					</label>
				</div>
			</div>
		</Layout>
	);
}

const DynamicCookiePolicy = dynamic(() => Promise.resolve(CookiePolicy), { ssr: false });
export default DynamicCookiePolicy;
