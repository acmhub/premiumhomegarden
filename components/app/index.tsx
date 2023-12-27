import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GoogleAnalytics } from "nextjs-google-analytics";
import useIsCookieConsentGiven from "../../hooks/useIsCookieConsentGiven";
import Topbar from "./navigation/topbar";
import Navigation from "./navigation";
import Footer from "./footer";
const BackTotop = dynamic(() => import("./backtotop"));
const CTAButton = dynamic(() => import("./cta-button"));
const CookiesBanner = dynamic(() => import("./cookies-banner"));

interface Props {
	title?: string;
	description?: string;
	pageID: string;
	canonical: string;
	children: React.ReactNode;
}

function Layout({ pageID, title, description, canonical, children }: Props) {
	const [cookieConsent] = useIsCookieConsentGiven();

	useEffect(() => {
		let wrapper = document.getElementById("__next");

		if (wrapper) {
			wrapper.removeAttribute("class");
			pageID && wrapper.classList.add(`page-${pageID}`);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>
					{title ? title + " | Premium Home & Garden Solutions" : "Premium Home & Garden Solutions"}
				</title>
				<meta
					name="description"
					content={
						description ||
						"La Premium Home & Garden Solutions, ne mândrim cu produsele noastre, serviciile superioare pentru clienți și cu atenția la detalii. Oferim produse de înaltă calitate care fac ca îngrijirea casei tale să fie rapidă, ușoară și convenabilă!"
					}
				/>

				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={"https://premiumhomegarden.ro" + canonical} />

				<meta
					property="og:title"
					content={title ? title + " | Premium Home & Garden Solutions" : "Premium Home & Garden Solutions"}
				/>
				<meta
					name="og:description"
					content={
						description
							? description
							: "La Premium Home & Garden Solutions, ne mândrim cu produsele noastre, serviciile superioare pentru clienți și cu atenția la detalii. Oferim produse de înaltă calitate care fac ca îngrijirea casei tale să fie rapidă, ușoară și convenabilă!"
					}
				/>
				<meta property="og:url" content={"https://premiumhomegarden.ro" + canonical} />
			</Head>

			<header>
				<Topbar />
				<Navigation />
			</header>

			<main className="font-maven">{children}</main>

			<Footer />

			<BackTotop />
			<CTAButton />

			{!cookieConsent && <CookiesBanner />}
			<GoogleAnalytics defaultConsent="granted" strategy="lazyOnload" trackPageViews />
		</React.Fragment>
	);
}

export default Layout;
