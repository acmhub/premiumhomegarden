import { useEffect } from "react";

export function useClickAway<T extends HTMLElement>(
	ref: React.RefObject<T>,
	onClickAway: () => void
): React.RefObject<T> {
	const handleClick = (e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			onClickAway();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);

	return ref;
}
