import React from "react";
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";
import socials from "@/data/socials";
import LineSeparator from "@/components/decorative/line-separator";
import ContactForm from "@/components/form/contact-form";

function Contact() {
	return (
		<section className="relative pb-20">
			<h2 className="text-center">Contactează-ne</h2>
			<LineSeparator />

			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
				<div className="col-span-1 my-auto">
					<div>
						<h2 className="font-cinzel mb-4">Trimite-ne un mesaj</h2>
						<p className="lg:max-w-lg">
							Trimiteți-ne un mesaj folosind formularul nostru și vom reveni cu un răspuns în cel mai
							scurt timp posibil.
						</p>
					</div>

					<div className="my-20 space-y-8">
						<a
							href="tel:+40767858360"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="phone number"
							className="flex items-center w-fit space-x-4 group"
						>
							<div className="bg-gunmetal text-white group-hover:bg-charcoal group-hover:text-khaki transition rounded p-2">
								<HiOutlinePhoneArrowDownLeft className="h-6 w-6" />
							</div>

							<div className="font-cinzel">
								<p>Număr de telefon</p>
								<p className="text-lg">+40 767 858 360</p>
							</div>
						</a>
						<a
							href="mailto:solution.phg@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="email"
							className="flex items-center w-fit space-x-4 group"
						>
							<div className="bg-gunmetal text-white group-hover:bg-charcoal group-hover:text-khaki transition rounded p-2">
								<HiOutlineMailOpen className="h-6 w-6" />
							</div>

							<div className="font-cinzel">
								<p>Adresă de mail</p>
								<p className="text-lg">solution.phg@gmail.com</p>
							</div>
						</a>
					</div>

					<div className="flex items-center space-x-4">
						{socials.slice(2, 5).map(({ href, Icon }) => (
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="facebook"
								className="relative group text-khaki hover:text-white duration-150 p-2"
								key={href}
							>
								<Icon className="relative h-5 w-5 z-10" />
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 group-hover:h-full group-hover:w-full bg-khaki rounded-full transition-all pointer-events-none z-0" />
							</a>
						))}
					</div>
				</div>

				<div className="col-span-1">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default Contact;
