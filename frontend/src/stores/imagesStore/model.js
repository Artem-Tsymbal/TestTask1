import { types } from 'mobx-state-tree';

const Image = types.model('Image', {
	id: types.maybeNull(types.identifierNumber),
	albumId: types.maybeNull(types.number),
	title: types.optional(types.string, ''),
	path: types.optional(types.string, ''),
});

export { Image };
