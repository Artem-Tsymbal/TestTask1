import { types } from 'mobx-state-tree';
import ImagesStoreActions from './actions';
import { Image } from './model';

const ImagesStore = types
	.model('ImagesStore', {
		images: types.optional(types.array(Image), []),
	})
	.actions(ImagesStoreActions);

export default ImagesStore;
