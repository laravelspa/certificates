import request from "../utils/request";
import Resource from "./resource";

class Portfolio extends Resource {
    constructor() {
        super("portfolios");
    }
}

export { Portfolio as default };