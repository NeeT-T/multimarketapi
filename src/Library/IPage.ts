interface IPage {
    size: number;
    direction: "ASC" | "DESC";
    page: number;
    orderby: string;
}