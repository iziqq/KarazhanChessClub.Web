import UserDto from './user/UserDto';
export default class messageDto {
    id: number;
    subject: string | null;
    sender: UserDto;
    sendDate: Date;
    text: string;
    parentId: number;
  }
  