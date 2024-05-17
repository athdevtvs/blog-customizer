import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface IArrowButtonProps {
	isMenuOpen: boolean;
	onClick: OnClick;
	arrowButtonRef?: React.RefObject<HTMLDivElement>;
}

export const ArrowButton = ({
	isMenuOpen,
	onClick,
	arrowButtonRef,
}: IArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			ref={arrowButtonRef}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: isMenuOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: isMenuOpen,
				})}
			/>
		</div>
	);
};
