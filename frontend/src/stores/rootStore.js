import { types } from 'mobx-state-tree';
import { configure } from 'mobx';
import ImagesStore from './imagesStore/store';
import PhotosStore from './photosStore/store';
import api from '../api';

configure({});

const RootStore = types.model('RootStore', {
	imagesStore: types.optional(ImagesStore, () => ImagesStore.create({})),
	photosStore: types.optional(PhotosStore, () => PhotosStore.create({})),
});

const RootStoreInstance = RootStore.create({}, { api });

export default RootStoreInstance;
