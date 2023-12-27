import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";

const traits = [
	{
		Icon: TbTargetArrow,
		title: "Misiunea noastră",
		paragraph:
			"este aceea de a oferi servicii de încredere prin ofertare corectă, calitate pentru lucrariile efectuate, promptitudine în abordarea fiecărei solicitări, utilizând materiale conforme cu cele mai înalte standarde.",
	},
	{
		Icon: FaRegEye,
		title: "Viziunea noastră",
		paragraph:
			"este aceea de a se diferentia de multitudinea de societati concurente, oferind calitate si respectând cerințele clienților noștri!",
	},
	{
		Icon: IoDiamondSharp,
		title: "Valorile",
		paragraph:
			"cu care dorim să vă câștigăm încrederea sunt orientarea către client, oferirea de sfaturi și soluții tehnice și fidelizarea clienților existenți.",
	},
];

function Traits() {
	return (
		<section className="container grid grid-cols-1 xl:grid-cols-3 max-xl:divide-y xl:divide-x divide-khaki section-spacing">
			{traits.map(({ Icon, title, paragraph }) => (
				<div className="text-center space-y-2.5 max-xl:py-10 py-5 xl:px-10" key={title}>
					<Icon className="h-8 w-8 bg- text-khaki mx-auto rounded-full" />
					<p className="font-cinzel text-2xl">{title}</p>
					<p>{paragraph}</p>
				</div>
			))}
		</section>
	);
}

export default Traits;
