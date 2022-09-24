export default class Page implements IPage {
    size: Number;
    direction: "ASC" | "DESC";
    page: Number;
    orderby: String;

    constructor(size: Number, direction: "ASC" | "DESC", page: Number, orderby: String) {
        this.size = size || 10;
        this.direction = direction || "ASC";
        this.orderby = orderby || "nome";
        this.page = page || 0;
    }

}