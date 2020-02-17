import {IPlayerAction, PlayerActions} from '../types/actions';

const showPlayer = (): IPlayerAction => ({
  type: PlayerActions.SHOW_PLAYER,
});
