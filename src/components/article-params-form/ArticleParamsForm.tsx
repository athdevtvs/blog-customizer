import { useState } from 'react';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { ArrowButton } from '../arrow-button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import {
	FormTitles,
	fontFamilyOptions,
	defaultArticleState,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);

	return (
		<>
			<ArrowButton
				isMenuOpen={isMenuOpen}
				onClick={() => setIsMenuOpen((prev) => !prev)}
			/>
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title={FormTitles.fontFamily}
						placeholder={FormTitles.fontFamily}
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						name=''
						title={FormTitles.fontSize}
					/>
					<Select
						title={FormTitles.fontColor}
						placeholder={FormTitles.fontColor}
						options={fontColors}
						selected={formState.fontColor}
					/>
					<Separator />
					<Select
						title={FormTitles.backgroundColor}
						placeholder={FormTitles.backgroundColor}
						options={backgroundColors}
						selected={formState.backgroundColor}
					/>
					<Select
						title={FormTitles.contentWidth}
						placeholder={FormTitles.contentWidth}
						options={contentWidthArr}
						selected={formState.contentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
