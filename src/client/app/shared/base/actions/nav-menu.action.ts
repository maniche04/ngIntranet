import { Action } from '@ngrx/store';
import { type } from '../../core/utils/type';
import { CATEGORY } from '../common/category.common';

export interface INavMenuActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
}

export const ActionTypes: INavMenuActions = {
    INIT:           type(`${CATEGORY} Init`),
    INITIALIZED:    type(`${CATEGORY} Initialized`),
    INIT_FAILED:    type(`${CATEGORY} Init Failed`)
};

export class InitAction implements Action {
    type = ActionTypes.INIT;
    payload: Object = null;
}

export class InitializedAction implements Action {
    type = ActionTypes.INITIALIZED;
    constructor(public payload: Object) {}
}

export class InitFailedAction implements Action {
    type = ActionTypes.INIT_FAILED;
    payload: Object = null;
}

export type Actions
= InitAction
| InitializedAction
| InitFailedAction;
