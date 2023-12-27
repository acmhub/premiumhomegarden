import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useClickAway } from "@/hooks/useClickAway";
import Portal from "../app/portal";

interface Props {
	title?: string;
	children: React.ReactNode;
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	onClose?: () => void;
}

function Modal({ title, children, isVisible, setIsVisible, onClose }: Props) {
	const modalRef = useRef(null);

	const handleClose = () => {
		setIsVisible(false);
		if (onClose) onClose();
	};

	useEffect(() => {
		const handleEscKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") handleClose();
		};

		isVisible ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
		isVisible && document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	}, [isVisible, onClose, setIsVisible]);

	useClickAway(modalRef, () => setIsVisible(false));

	return (
		isVisible && (
			<Portal>
				<div className="fixed top-0 left-0 h-screen w-screen bg-black/20 pointer-events-none z-[60]" />

				<div
					className="fixed top-1/2 left-1/2 h-fit w-max -translate-y-1/2 -translate-x-1/2 card divide-y p-0 z-[61]"
					ref={modalRef}
				>
					<div className="flex items-center justify-between p-2.5">
						{title && <p className="font-cinzel text-lg">{title}</p>}
						<button className="block w-fit ml-auto" type="button" onClick={() => handleClose()}>
							<AiOutlineClose className="h-6 w-6" />
						</button>
					</div>

					<div className="max-h-[80vh] w-max max-w-[90vw] lg:max-w-5xl overflow-y-auto">{children}</div>
				</div>
			</Portal>
		)
	);
}

export default Modal;
