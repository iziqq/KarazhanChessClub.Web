export default class SideAlert {
  text: string;
  timeout: number;
  color: string;

  constructor(text: string, color: string = "primary", timeout: number = 3000) {
    this.text = text;
    this.color = color;
    this.timeout = timeout;
  }
}
