export default class UserDto {
  name: string;
  email: string;
  token: string | null;
  roles: string[];
  id: number;
}
