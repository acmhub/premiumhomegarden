import React from "react";
import Layout from "@/components/app";
import { Details, FAQ } from "@/components/sections/contact";
import ContactForm from "@/components/form/contact-form";
import LineSeparator from "@/components/decorative/line-separator";

function ContactPage() {
	return (
		<Layout
			title="Contact"
			description="Solicită o ofertă de preț, gratuit! Trimiteți-ne un mesaj folosind formularul nostru și vom reveni cu un răspuns în cel mai scurt timp posibil."
			canonical="https://premiumhomegarden.ro/contact"
			pageID="contact"
		>
			<div className="container page-navbar-offset section-spacing">
				<h1 className="page-title">Contactează-ne</h1>
				<LineSeparator />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
					<div className="space-y-20">
						<Details />
						<FAQ />
					</div>
					<div className="my-auto">
						<ContactForm />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ContactPage;
