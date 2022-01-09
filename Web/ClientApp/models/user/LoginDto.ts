export default class LoginDto {
  login: string | null;
  password: string | null;
  rememberMe: boolean = true;
  returnUrl: string | null;
}
