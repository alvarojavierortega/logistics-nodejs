import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getPackageList } from "../../services";


export const list = async (req:Request, res:Response ) =>  {
  const packages = await getPackageList();
  return res.status( StatusCodes.ACCEPTED).json(packages);
   
};