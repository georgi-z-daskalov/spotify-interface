export interface IBaseComponent {
  componentId: string;
}

export interface IAuthState {
  email: string;
  password: string;
  errorMessage?: string;
}
