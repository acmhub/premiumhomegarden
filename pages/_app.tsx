import "@/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Cinzel, Maven_Pro } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const cinzel = Cinzel({
	weight: "500",
	subsets: ["latin"],
	variable: "--font-cinzel",
});

const maven = Maven_Pro({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-maven",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<style jsx global>
				{`
					:root {
						--font-cinzel: ${cinzel.style.fontFamily};
						--font-maven: ${maven.style.fontFamily};
					}
				`}
			</style>
			<Component {...pageProps} />
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				newestOnTop={true}
				rtl={false}
				theme="light"
				toastClassName="text-sm"
				limit={5}
				hideProgressBar
				pauseOnFocusLoss
				closeOnClick
				draggable
				pauseOnHover
			/>
		</React.Fragment>
	);
}
