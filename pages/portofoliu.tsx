import React from "react";
import Image from "next/image";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import portfolio from "@/data/portfolio";

function PortfolioPage() {
	return (
		<Layout
			title="Portofoliu"
			description="Fiecare proiect este unic, iar noi oferim soluții personalizate pentru a satisface nevoile specifice ale clienților noștri. Produsele noastre reflectă standarde înalte de calitate și durabilitate, garantând satisfacția clienților."
			canonical="https://premiumhomegarden.ro/portofoliu"
			pageID="portfolio"
		>
			<div className="page-navbar-offset section-spacing">
				<h1 className="page-title">Portofoliu</h1>
				<LineSeparator />

				<div className="columns-2 md:columns-3 lg:columns-5 xl:col-span-6 gap-2 space-y-2 px-5">
					{portfolio.map(({ source, alt }, i) => (
						<Image
							src={source}
							alt={alt}
							className="rounded-md object-cover"
							width={512}
							height={512}
							key={i}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default PortfolioPage;
