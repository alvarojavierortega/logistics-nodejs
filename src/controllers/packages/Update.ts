import { Request, Response } from "express";
import { EnumDeliveryStatus } from "../../enums/enums";
import { StatusCodes } from "http-status-codes";
import { IUpdatePackage} from "../../interfaces/interfaces";
import { updatePackage } from "../../services";

function isNumber(value?: string | number): boolean {
  return ((value != null) &&
           (value !== "") &&
           !isNaN(Number(value.toString())));
}

export const update = async (req:Request, res:Response ) =>  {
  const id:string = req.params.id;
  const status:string = req.params.status;
  if (!(status in EnumDeliveryStatus) || (!isNumber(id))) {
    const error: { [string:string]: string } = {};
    if (!isNumber(id)) error.id = "must be a number";
    if (!(status in EnumDeliveryStatus)) error.status = `${status} is not a valid input`;
    return res.status(StatusCodes.BAD_REQUEST).json({errors: error});
  }
  const params:IUpdatePackage= {"id" :  parseInt(id), "status" : EnumDeliveryStatus[status as keyof typeof EnumDeliveryStatus]};
  const updatedPackage = await updatePackage(params);
  return res.status( StatusCodes.ACCEPTED).json(updatedPackage);
 
};