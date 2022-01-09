import altDto from "./altDto";
import { StatusEnum } from "@enums/status.ts";
import messageDto from './messageDto';

export default class guildAppDto {
  id:number;
  name:string;
  nickname: string;
  race:number;
  class:number;
  spec:number;
  alts:altDto[];
  aboutMe: string;
  status: StatusEnum;
  messages: messageDto[];
}
