import {IPlayerAction, PlayerActions} from '../types/actions';

export interface IPlayerReducer {
  isVisible: boolean;
}

const initialState: IPlayerReducer = {
  isVisible: false,
};

const countReducer = (state = initialState, action: IPlayerAction) => {
  switch (action.type) {
    case PlayerActions.SHOW_PLAYER:
      return {
        ...state,
        isVisible: true,
      };
    case PlayerActions.HIDE_PLAYER:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};
export default countReducer;
