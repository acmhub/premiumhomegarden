import React from "react";
import Head from "next/head";
import Link from "next/link";
import Topbar from "@/components/app/navigation/topbar";
import Navigation from "@/components/app/navigation";
import Footer from "@/components/app/footer";
import LineSeparator from "@/components/decorative/line-separator";

function PageNotFound() {
	return (
		<React.Fragment>
			<Head>
				<title>Oops | Premium Home & Garden Solutions</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>

			<header>
				<Topbar />
				<Navigation />
			</header>

			<main className="font-maven">
				<div className="container page-navbar-offset section-spacing">
					<h1 className="page-title">
						<span className="text-base">Eroare</span>
						<br />
						<span className="text-8xl">404</span>
					</h1>
					<LineSeparator />

					<p className="max-w-xl mx-auto text-center">
						Ne pare rău, însă pagina pe care ai solicitat-o nu mai există.
					</p>

					<Link href="/" className="button button-khaki font-cinzel w-fit mx-auto mt-10" prefetch={true}>
						Înapoi la prima pagină
					</Link>
				</div>
			</main>

			<Footer />
		</React.Fragment>
	);
}

export default PageNotFound;
