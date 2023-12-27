import Link from "next/link";

function Topbar() {
	return (
		<div className="relative bg-gunmetal border-b border-zinc-600 font-cinzel text-white flex items-center justify-center text-center px-5 py-2.5 z-50">
			<Link href="/contact" className="hover:underline underline-offset-2">
				Solicită o ofertă de preț. Gratuit!
			</Link>
		</div>
	);
}

export default Topbar;
