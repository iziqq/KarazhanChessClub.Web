import Result from "@models/Result";

export default class DataResult<T> extends Result {
  data: T | null;
}
