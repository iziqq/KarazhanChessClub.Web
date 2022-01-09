import altDto from "./altDto";
import socialDto from './socialDto';

export default class memberDto {
  id: number;
  nickname: string;
  race:number;
  class:number;
  spec:number;
  alts: altDto[] | null;
  description: string | null;
  socials: socialDto[] | null;
}
