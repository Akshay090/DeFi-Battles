import EthLogo from '../eth-logo.png';
import './index.css';
interface Props {}

const AnimBackground = (props: Props) => {
	return (
		<div className="animated">
			<div className="wrapper">
				<img
					src={EthLogo}
					alt="eth-logo"
					style={{
						width: '250px',
						position: 'absolute',
						top: '20%',
						left: '17%',
						zIndex: 4,
					}}
				/>
				<div className="one elem"></div>
				<div className="two elem"></div>
				<div className="three elem"></div>
			</div>
		</div>
	);
};

export default AnimBackground;
