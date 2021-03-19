import {Composition} from 'remotion';
import {Token} from './Token';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Token"
				component={Token}
				durationInFrames={5 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
