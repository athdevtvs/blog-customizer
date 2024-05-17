import { FormEvent, useState } from 'react';
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
	ArticleStateType,
	OptionType,
} from 'src/constants/articleProps';

interface IArticleParamsFormProps {
	setAppState: (value: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ setAppState }: IArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);

	function handleChange(type: keyof ArticleStateType) {
		return (value: OptionType) => {
			setFormState((prev) => ({
				...prev,
				[type]: value,
			}));
		};
	}

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setAppState(formState);
	};

	const handleReset = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

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
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title={FormTitles.fontFamily}
						placeholder={FormTitles.fontFamily}
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={handleChange('fontFamilyOption')}
					/>
					<RadioGroup
						title={FormTitles.fontSize}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						name=''
						onChange={handleChange('fontSizeOption')}
					/>
					<Select
						title={FormTitles.fontColor}
						placeholder={FormTitles.fontColor}
						options={fontColors}
						selected={formState.fontColor}
						onChange={handleChange('fontColor')}
					/>
					<Separator />
					<Select
						title={FormTitles.backgroundColor}
						placeholder={FormTitles.backgroundColor}
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={handleChange('backgroundColor')}
					/>
					<Select
						title={FormTitles.contentWidth}
						placeholder={FormTitles.contentWidth}
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={handleChange('contentWidth')}
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
