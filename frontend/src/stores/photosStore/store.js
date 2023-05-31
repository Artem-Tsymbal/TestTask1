import { types } from 'mobx-state-tree';
import { Photo } from './model';
import PhotosStoreActions from './actions';

const PhotosStore = types
	.model('PhotosStore', {
		photos: types.optional(types.array(Photo), []),
	})
	.actions(PhotosStoreActions);

export default PhotosStore;
