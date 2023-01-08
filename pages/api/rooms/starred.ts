import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../db";
import { SessionUser } from "../../../types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await db.read();

    const user: SessionUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        portraitUrl: req.body.portraitUrl,
        starredRooms: req.body.starredRooms
    };

    data.sessionUser = user;
    await db.write();

    res.status(StatusCodes.ACCEPTED);
    res.json(user);

}