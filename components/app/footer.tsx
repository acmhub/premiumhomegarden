import React from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/data/routes";
import socials from "@/data/socials";

function Footer() {
	const route = routes.find((route) => route.label === "Produse");

	if (!route || !route.dropdown) {
		return null;
	}

	return (
		<footer className="bg-gradient-to-b from-gunmetal to-charcoal to-60% text-white pt-16 pb-20 lg:pb-8">
			<div className="container">
				<Link href="/" className="block w-fit mx-auto">
					<Image src="/images/logo.svg" alt="" height={128} width={128} />
				</Link>

				<div className="flex max-lg:flex-col gap-10 my-10">
					<div className="grow">
						<h3 className="text-lg border-[3px] border-khaki border-y-transparent border-r-transparent mb-5 pl-2.5">
							Navigație
						</h3>

						<ul className="space-y-2.5">
							<Link className="footer-link" href="/">
								Acasă
							</Link>
							<Link className="footer-link" href="/despre-noi">
								Despre noi
							</Link>
							<Link className="footer-link" href="/servicii">
								Servicii
							</Link>
							<Link className="footer-link" href="/produse">
								Produse
							</Link>
							<Link className="footer-link" href="/portofoliu">
								Portofoliu
							</Link>
							<Link className="footer-link" href="/contact">
								Contact
							</Link>
						</ul>
					</div>

					<div className="grow">
						<h3 className="text-lg border-[3px] border-khaki border-y-transparent border-r-transparent mb-5 pl-2.5">
							Produse
						</h3>

						<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5">
							{Object.values(route.dropdown).map((link) => {
								return link.links.map(({ path, label }, index) => (
									<Link href={path} className="footer-link" key={index}>
										{label}
									</Link>
								));
							})}
						</div>
					</div>

					<div className="grow">
						<h3 className="text-lg border-[3px] border-khaki border-y-transparent border-r-transparent mb-5 pl-2.5">
							Contact
						</h3>

						<ul className="space-y-2.5">
							{socials.map(({ href, Icon, label }) => (
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="footer-link gap-2.5"
									key={label}
								>
									<Icon className="h-4 w-4" />
									<p className="text-base">{label}</p>
								</a>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-wrap items-end justify-between gap-10">
					<div className="flex max-sm:flex-col flex-wrap gap-2.5">
						<Link
							className="text-xs text-neutral-400 hover:text-white hover:underline"
							href="/politica-confidentialitate"
						>
							Politica de Confidențialitate
						</Link>
						<Link
							className="text-xs text-neutral-400 hover:text-white hover:underline"
							href="/politica-cookies"
						>
							Politica de Cookies
						</Link>
					</div>

					<p className="font-cinzel text-xs text-neutral-400 text-center lg:text-right">
						&copy; Premium Home & Garden Solutions {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
