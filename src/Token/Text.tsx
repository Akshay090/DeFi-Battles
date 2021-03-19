export const Text: React.FC<{value: string; color: string; size: string}> = ({
	value,
	color,
	size,
}) => {
	return (
		<span
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: size,
				color,
			}}
		>
			{value}
		</span>
	);
};
