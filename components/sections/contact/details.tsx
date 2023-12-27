import React from "react";
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";
import socials from "@/data/socials";

function Details() {
	return (
		<React.Fragment>
			<div className="space-y-5 mt-5">
				<a
					href="tel:+40767858360"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="phone number"
					className="flex items-center group w-fit gap-5"
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
					className="flex items-center group w-fit gap-5"
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

			<div>
				<h2 className="text-2xl">Urmărește-ne</h2>
				<div className="flex items-center gap-5 mt-5">
					{socials.slice(2, 5).map(({ href, Icon }) => (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gunmetal text-white hover:bg-charcoal hover:text-khaki transition rounded p-2"
							key={href}
						>
							<Icon className="h-6 w-6" />
						</a>
					))}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Details;
