import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import db from "../../../db";
import { RentableRoom } from "../../../types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  function validation(url: string) {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
    return regex.test(url);
  }
 
  
  if (req.method !== "POST") {
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
    res.json({ error: ReasonPhrases.METHOD_NOT_ALLOWED });
    return;
  }

  const urlBoolean = validation(req.body.heroUrl);

  if(typeof req.body.title !== "string" || req.body.title.length === 0 ||
      typeof req.body.description !== "string" || req.body.description.length === 0 ||
      typeof req.body.heroUrl !== "string" || req.body.heroUrl === 0 || urlBoolean === false || typeof req.body.featured !== "boolean"){

        res.status(StatusCodes.BAD_REQUEST);
        res.json({ error: ReasonPhrases.BAD_REQUEST });
        return;
  }

  const data = await db.read();
  
  const room: RentableRoom = {
    "id": data.rooms.length,
    "featured": req.body.featured,
    "owner": req.body.owner,
    "type": req.body.type,
    "title": req.body.title,
    "description": req.body.description,
    "heroUrl": req.body.heroUrl
  }
  data.rooms.unshift(room);

  await db.write();


  res.status(StatusCodes.CREATED);
  res.json(room);

}