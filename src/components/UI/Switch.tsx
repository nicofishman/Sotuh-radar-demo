import React, { FC, useEffect, useState } from 'react';

interface SwitchProps {
	onClick?: () => void;
}

const Switch: FC<SwitchProps> = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<label className="inline-flex relative items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				className="peer sr-only"
				onClick={() => handleClick()}
			/>
			<div className="peer peer-checked:bg-secondary-rose w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
		</label>
	);
};

export default Switch;
