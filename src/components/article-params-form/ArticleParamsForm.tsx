import { ReactNode } from 'react';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

interface IArticleParamsFormProps {
	isMenuOpen: boolean;
	arrowButton: ReactNode;
}

export const ArticleParamsForm = ({
	isMenuOpen,
	arrowButton,
}: IArticleParamsFormProps) => {
	return (
		<>
			{arrowButton}
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
