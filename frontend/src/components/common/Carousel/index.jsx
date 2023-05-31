import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../stores/context';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useSwipeable } from 'react-swipeable';
import './index.scss';

export const Carousel = observer(() => {
	const {
		imagesStore: { images, findAll },
	} = useStores();

	useEffect(() => {
		findAll();
	}, []);

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextSlide = () => {
		const newIndex = (currentImageIndex + 1) % images.length;
		setCurrentImageIndex(newIndex);
	};

	const prevSlide = () => {
		const newIndex = (currentImageIndex - 1 + images.length) % images.length;
		setCurrentImageIndex(newIndex);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(timer);
	}, [currentImageIndex]);

	const renderIndicators = () => {
		return (
			<>
				<div
					className={`carousel__indicator ${
						currentImageIndex % 3 === 0 ? 'active' : ''
					}`}
					onClick={() =>
						setCurrentImageIndex(currentImageIndex % images.length)
					}
				></div>
				<div
					className={`carousel__indicator ${
						currentImageIndex % 3 === 1 ? 'active' : ''
					}`}
					onClick={() =>
						setCurrentImageIndex((currentImageIndex % images.length) + 1)
					}
				></div>
				<div
					className={`carousel__indicator ${
						currentImageIndex % 3 === 2 ? 'active' : ''
					}`}
					onClick={() =>
						setCurrentImageIndex((currentImageIndex % images.length) + 2)
					}
				></div>
			</>
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="carousel" {...handlers}>
			<div className="carousel__wrapper">
				{images.length > 1 && (
					<button
						className="carousel__button carousel__arrow carousel__arrow--left"
						onClick={prevSlide}
					>
						<LeftOutlined />
					</button>
				)}
				<div className="carousel__image">
					{images.map((image, index) => (
						<img
							key={image.id}
							className={`${index === currentImageIndex ? 'active' : ''}`}
							src={image.path}
							alt={`Carousel ${image.id}`}
							style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
						/>
					))}
				</div>
				{images.length > 1 && (
					<button
						className="carousel__button carousel__arrow carousel__arrow--right"
						onClick={nextSlide}
					>
						<RightOutlined />
					</button>
				)}
			</div>
			{images.length > 1 && (
				<div className="carousel__indicators">{renderIndicators()}</div>
			)}
		</div>
	);
});
