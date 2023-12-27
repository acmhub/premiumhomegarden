import React from "react";
import Layout from "@/components/app";
import LineSeparator from "@/components/decorative/line-separator";
import { privacyPolicy } from "@/data/policies";

interface PolicyProps {
	title: string;
	paragraphs: string[];
}

function PrivacyPolicy() {
	const renderParagraphs = (paragraphs: PolicyProps[]) => {
		return paragraphs.map((paragraph, index) => {
			if (Array.isArray(paragraph)) {
				return (
					<ul className="border-l-2 border-theme3 pl-5" key={index}>
						{renderParagraphs(paragraph)}
					</ul>
				);
			} else {
				return (
					<li className="list-none" key={index}>
						{paragraph as any}
					</li>
				);
			}
		});
	};

	return (
		<Layout
			title="Politica de Confidențialitate"
			canonical="https://premiumhomegarden.ro/politica-confidentialitate"
			pageID="privacy-policy"
		>
			<div className="container page-navbar-offset section-spacing">
				<h1 className="page-title">Politica de Confidențialitate</h1>
				<LineSeparator />

				<div className="divide-y">
					{privacyPolicy.map((section, index) => (
						<div className="py-8" key={index}>
							<h2 className="text-2xl font-display mb-4">
								{index + 1}. {section.title}
							</h2>
							<div className="space-y-2">{renderParagraphs(section.paragraphs as any)}</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default PrivacyPolicy;
