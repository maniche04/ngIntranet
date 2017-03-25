import { Observable } from 'rxjs/Observable';

export interface IBaseState {
  menu: Array<Object>;
}

export const initialState: IBaseState = {
  menu: [{
              name: "home",
              icon: "home"
          }
      ]
};

export function getMenu(state$: Observable<IBaseState>) {
  return state$.select(state => state.menu);
}