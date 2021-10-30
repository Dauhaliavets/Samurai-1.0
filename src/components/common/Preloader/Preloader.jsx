import React from 'react';
import preloader from '../../../assets/image/preloader.svg';

const Preloader = (props) => {
	return (
		<div style={{ width: 200, height: 200 }}>
			<img src={preloader} alt='preloader' />
		</div>
	);
};

export default Preloader;
