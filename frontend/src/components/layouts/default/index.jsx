import { useState } from 'react';
import { Carousel } from '../../common/Carousel';
import { Gallery } from '../../common/Gallery';
import './index.scss';

export const DefaultLayout = () => {
	const [view, setView] = useState('carousel');

	const switchView = () => {
		if (view === 'carousel') {
			setView('gallery');
		} else {
			setView('carousel');
		}
	};

	return (
		<div className="wrapper">
			<button className="toggle" onClick={switchView}>
				Change element
			</button>
			<main className="main-side">
				{view === 'carousel' && <Carousel />}
				{view === 'gallery' && <Gallery />}
			</main>
		</div>
	);
};
