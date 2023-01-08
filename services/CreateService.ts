import { RentableRoom } from "../types";
import ApiService from "./ApiService";

export default class CreateService{
    public static post(input: Omit<RentableRoom, "id">) {
        return ApiService.post("/api/rooms/rentable", input);
    }
}