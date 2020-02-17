export enum PlayerActions {
  SHOW_PLAYER,
  HIDE_PLAYER,
}

export interface IPlayerAction {
  type: PlayerActions;
}
