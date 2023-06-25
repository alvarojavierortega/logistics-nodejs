import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getClientList } from "../../services";


export const list = async (req:Request, res:Response ) =>  {
  const clients = await getClientList();
  return res.status( StatusCodes.ACCEPTED).json(clients);
   
};