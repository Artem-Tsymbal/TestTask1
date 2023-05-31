import { PropTypes } from 'prop-types';
import './index.scss';

export const SelectedPhoto = ({ selectedImage, handleCloseImage }) => {
	return (
		<div className="selected-photo__background" onClick={handleCloseImage}>
			<div
				className="selected-photo"
				onClick={(e) => {
					handleCloseImage();
					e.stopPropagation();
				}}
			>
				<img
					className="selected-photo__img"
					src={selectedImage}
					alt="Selected"
				/>
			</div>
		</div>
	);
};

SelectedPhoto.propTypes = {
	selectedImage: PropTypes.string.isRequired,
	handleCloseImage: PropTypes.func.isRequired,
};
