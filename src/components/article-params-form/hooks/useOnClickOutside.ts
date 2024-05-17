import { useEffect } from 'react';

type UseOnClickOutside = {
	rootRef: React.RefObject<HTMLElement>;
	arrowButtonRef: React.RefObject<HTMLElement>;
	isMenuOpen: boolean;
	setIsMenuOpen: (state: boolean) => void;
};

export const useOnClickOutside = ({
	rootRef,
	arrowButtonRef,
	isMenuOpen,
	setIsMenuOpen,
}: UseOnClickOutside) => {
	useEffect(() => {
		const handleClick = (evt: MouseEvent) => {
			const { target } = evt;
			if (
				target instanceof Node &&
				!rootRef.current?.contains(target) &&
				!arrowButtonRef.current?.contains(target)
			) {
				isMenuOpen && setIsMenuOpen(false);
			}
		};

		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isMenuOpen]);
};
