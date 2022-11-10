export default class Page implements IPage {

    size: number;
    direction: "ASC" | "DESC";
    page: number;
    orderby: string;

    constructor(size: number, direction: "ASC" | "DESC", page: number, orderby: string) {
        this.size = size;
        this.direction = direction;
        this.orderby = orderby;
        this.page = page;
    }

}