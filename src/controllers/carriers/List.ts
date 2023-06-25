import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getCarrierList } from "../../services";



export const list = async (req:Request, res:Response ) =>  {  
  const carriers = await getCarrierList();
  return res.status( StatusCodes.ACCEPTED).json(carriers);
   
};