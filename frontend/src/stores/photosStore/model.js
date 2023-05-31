import { types } from 'mobx-state-tree';

const Photo = types.model('Photo', {
	id: types.maybeNull(types.identifierNumber),
	albumId: types.maybeNull(types.number),
	title: types.optional(types.string, ''),
	url: types.optional(types.string, ''),
	thumbnailUrl: types.optional(types.string, ''),
});

export { Photo };
