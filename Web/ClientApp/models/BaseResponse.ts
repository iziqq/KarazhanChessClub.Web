export default interface BaseResponse {
  success: boolean;
  message: string;
  status: number | null;
  errors: object | null;
  data: any;
}
