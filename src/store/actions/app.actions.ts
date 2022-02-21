import { createAction } from '@reduxjs/toolkit';

export const loadedAppAction = createAction<boolean>('LOADED_FIRST_PAGE');
export const loadedAppActionTest = createAction('LOADED_SECOND_PAGE');
