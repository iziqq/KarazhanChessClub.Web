import messageDto from './messageDto';
import UserDto from './user/UserDto';
export default class statusDto {
    id: number;
    title: string;
    subtitle: string | null;
    text: string;
    sender: UserDto;
    sendDate: Date;
    likes:number | 0;
    replies: messageDto[] | null;
  }
  