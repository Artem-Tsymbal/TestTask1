import { flow, getEnv } from 'mobx-state-tree';

const ImagesStoreActions = (self) => ({
	findAll: flow(function* getWishlist() {
		const { api } = getEnv(self);

		try {
			const { data } = yield api.images.findAll();
			self.images = data;
		} catch (e) {
			console.error(e);
		}
	}),
});

export default ImagesStoreActions;
