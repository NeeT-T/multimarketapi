import { Request, Response } from "express";

export default (req:Request, res: Response): Response => {
    return res.status(404).send("NO FOUND");
}