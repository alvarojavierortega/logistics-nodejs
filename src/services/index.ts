import { ICarrier, IPackage, IUpdatePackage, IUpdatePackageInfo } from "../interfaces/interfaces";
import { api } from "./Utils";


const port = process.env.DJANGO_PORT || 8000;
const host = process.env.DJANGO_HOST || "localhost";
const base_url = `http://${host}:${port}/api`; 


const getCarrierList = async () => {
  try {
    return await api.get<ICarrier[]>(`${base_url}/carrier/`);
  }
  catch (error) {
    return error;
  }
};


const getClientList = async () => {
  try {
    return await api.get<ICarrier[]>(`${base_url}/client/`);
  }
  catch (error) {
    return error;
  }
};


const getPackageList = async () => {
  try {
    return await api.get<IPackage[]>(`${base_url}/package/`);
  }
  catch (error) {
    return error;
  }
};

const updatePackage = async (params:IUpdatePackage) => {
  const body = {delivery_status:params.status};
  try {
    return await api.patch<IUpdatePackageInfo,IPackage>(`${base_url}/package/${params.id}/`, body);
  }
  catch (error) {
    return error;
  }
};


export {getCarrierList, getClientList, getPackageList, updatePackage};
