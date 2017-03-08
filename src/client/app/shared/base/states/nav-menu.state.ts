import { Observable } from 'rxjs/Observable';

export interface IBaseState {
    menu: Object;
}

export const initialState: IBaseState = {
    menu: {
        type: 'primary',
        items: {
            name: 'home',
            icon: 'home'
        }
    }
}

export function getMenu(state$:
Observable<IBaseState>) {
    return state$.select(state => state.menu);
}