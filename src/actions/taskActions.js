import types from './types';

export const archiveTask = id => ({type: types.ARCHIVE_TASK, id});
export const unArchiveTask = id => ({type: types.UNARCHIVE_TASK, id});
export const pinTask = id => ({type: types.PIN_TASK, id});
