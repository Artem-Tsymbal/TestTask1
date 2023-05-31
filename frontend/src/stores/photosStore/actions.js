import { flow, getEnv } from 'mobx-state-tree';

const PhotosStoreActions = (self) => ({
	findAll: flow(function* getWishlist() {
		const { api } = getEnv(self);

		try {
			const { data } = yield api.photos.findAll();
			self.photos = data;
		} catch (e) {
			console.error(e);
		}
	}),
});

export default PhotosStoreActions;
