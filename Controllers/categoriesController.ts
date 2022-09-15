import { Request, Response } from "express"

const getCategories = (req: Request, res: Response) => {
    return res.status(200).send("Categorie");
}

export {
    getCategories,
}