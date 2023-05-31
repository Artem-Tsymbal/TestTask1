import { PropTypes } from 'prop-types';
import './index.scss';

export const GalleryTile = ({ photo, handleOpenImage }) => (
	<div className="gallery-tile__wrapper">
		<div className="gallery-tile__thumbnail">
			<img
				key={photo.id}
				src={photo.thumbnailUrl}
				alt={`Thumbnail ${photo.id}`}
				onClick={() => handleOpenImage(photo.url)}
				style={{ cursor: 'pointer' }}
			/>
		</div>
		<p className="gallery-tile__title">{photo.title}</p>
	</div>
);

GalleryTile.propTypes = {
	photo: PropTypes.instanceOf(Object).isRequired,
	handleOpenImage: PropTypes.func.isRequired,
};
