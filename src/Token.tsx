import {useCurrentFrame, useVideoConfig} from 'remotion';
import DollarIcon from './Token/Dollar';
import EthLogo from './Token/eth-color-600.png';
import {Text} from './Token/Text';
import {Title} from './Token/Title';

export const Token: React.FC<{}> = ({}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const transitionStart = 25;
	const color1 = '#6E819E';
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: '#0D1138',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					height: `${videoConfig.height * 0.8}px`,
					width: `${videoConfig.width * 0.4}px`,
					padding: '0rem 1rem',
					backgroundImage: 'linear-gradient( #081F3B, #0B223E)',
					borderRadius: '2rem',
					boxShadow:
						'0 2px 1px hsl(0deg 0% 100% / 50%) inset, 0 -2px 1px hsl(250deg 70% 5% / 30%) inset, 0 -2px 6px hsl(0deg 0% 100% / 25%)',
				}}
			>
				<Title titleText={'ETH'} titleColor={color1} />
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<div
						style={{
							backgroundColor: 'blue',
							padding: '2rem',
							borderRadius: '2rem',
						}}
					>
						<img src={EthLogo} alt="eth-logo" width={400} />
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: '2rem',
					}}
				>
					<div style={{display: 'flex', alignItems: 'center'}}>
						<Text value={'555555'} color={color1} size="4rem" />
						<DollarIcon style={{width: '4rem', fill: color1}} />
					</div>
					<div>
						<Text value={'17th, March, 2021'} color={color1} size="3rem" />
					</div>
				</div>
			</div>
		</div>
	);
};
