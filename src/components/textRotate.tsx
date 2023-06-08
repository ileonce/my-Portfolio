import React, { useState, useEffect } from 'react';

const texts = [
	{
		paragraphy: `Debugging is like being the detective in a crime movie where you're
		also the murderer.  "-- Filipe Fortes"`,
	},
	{
		paragraphy: `The best error message is the one that never shows up.
		"-- Thomas Fuchs"`,
	},
	{
		paragraphy: `"Why do programmers prefer dark mode? Because the light attracts bugs."`,
	},
	{
		paragraphy: `"Why do programmers prefer coffee? Because it helps them Java!"`,
	},
];

const TextRotator = () => {
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTextIndex((textIndex + 1) % texts.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [textIndex, texts.length]);

	return <div>{texts[textIndex].paragraphy}</div>;
};

export default TextRotator;
