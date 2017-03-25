import { IBaseState, initialState} from '../states/index';
import * as actions from '../actions/nav-menu.action';

export function reducer(
    state: IBaseState = initialState,
    action: actions.Actions
): IBaseState {
    switch(action.type) {
        case actions.ActionTypes.INITIALIZED:
            return (<any>Object).assign({},state,{
                menu: action.payload
            });
        
        default:
            return state;
    }
}