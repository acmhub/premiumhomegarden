import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
	link: Route;
	isDropdownToggled: boolean;
};

function DropdownLinks({ link, isDropdownToggled }: Props) {
	return (
		<AnimatePresence mode="wait">
			{isDropdownToggled && (
				<motion.div
					className={`
                            lg:fixed lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:card p-0 lg:p-0 lg:rounded-t-none
                            bg-white text-black lg:border lg:border-zinc-300
                            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 max-w-max w-full overflow-hidden
                        `}
					initial={{ height: 0, opacity: 0 }}
					animate={{
						height: "auto",
						opacity: 1,
					}}
					transition={{ duration: 0.2, staggerChildren: 0.5 }}
					exit={{ height: 0, opacity: 0 }}
					id="dropdown-menu"
				>
					{Object.keys(link.dropdown ?? {}).map((key) => (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="p-5 lg:px-8"
							key={key}
						>
							<p className="text-lg border-[3px] border-khaki border-y-transparent border-r-transparent mb-5 pl-2.5">
								{link.dropdown?.[key].label}
							</p>

							<motion.ul
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="space-y-1"
							>
								{link.dropdown?.[key].links.map((item, index) => (
									<motion.li
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{
											duration: 0.4,
											delay: index * 0.25,
											type: "spring",
											restSpeed: 0.5,
										}}
										key={index}
									>
										<Link href={item.path} className="dropdown-link">
											<div className="relative shrink-0 h-6 w-6">
												<Image
													src={item.icon}
													alt={item.label}
													className="object-contain"
													priority
													fill
													unoptimized
												/>
											</div>

											<p className="text-sm">{item.label}</p>
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default DropdownLinks;
