import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../stores/context';
import { GalleryTile } from './components/GalleryTile';
import { SelectedPhoto } from './components/SelectedPhoto';
import './index.scss';

export const Gallery = observer(() => {
	const {
		photosStore: { photos, findAll },
	} = useStores();

	useEffect(() => {
		findAll();
	}, []);

	const [selectedImage, setSelectedImage] = useState(null);

	const handleOpenImage = (image) => {
		setSelectedImage(image);
	};

	const handleCloseImage = () => {
		setSelectedImage(null);
	};

	return (
		<div className="gallery">
			<div className="gallery__list">
				{photos.map((photo) => (
					<div className="gallery__item" key={photo.id}>
						<GalleryTile photo={photo} handleOpenImage={handleOpenImage} />
					</div>
				))}
			</div>
			{selectedImage && (
				<SelectedPhoto
					selectedImage={selectedImage}
					handleCloseImage={handleCloseImage}
				/>
			)}
		</div>
	);
});
