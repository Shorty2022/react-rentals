import { SessionUser } from "../types";
import ApiService from "./ApiService";

export default class StarredService {
  public static post(input: SessionUser) {
    return ApiService.post("/api/rooms/starred", input);
  }
}
