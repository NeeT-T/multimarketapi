interface IPage {
    size: Number;
    direction: "ASC" | "DESC";
    page: Number;
    orderby: String;
}