import request from "../utils/request";
import Resource from "./resource";

class Certificate extends Resource {
    constructor() {
        super("certificates");
    }
}

export { Certificate as default };