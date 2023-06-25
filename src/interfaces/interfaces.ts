import { EnumDeliveryStatus } from "../enums/enums";

interface IUpdatePackageInfo {
  delivery_status: EnumDeliveryStatus
}

interface IUpdatePackage {
  id: number;
  status: EnumDeliveryStatus
}

interface IShortDescription {
  id:number;
  name: string;
}

interface IPackage {
  id?: number;
  weight: number;
  size: string;
  origin_address: string;
  destination_address: string;
  delivery_status: EnumDeliveryStatus;
  owner?: number|IShortDescription;
  carrier?: number|IShortDescription;
}


interface ICarrier {
  id: number;
  pacakages: IPackage[];
  name: string;
  vehicle_type: string;
  phone_number: string;
}



interface IClient {
  id: number;
  packages: IPackage[];
  name: string;
  address: string;
  phone_number: string;
}



export { IUpdatePackage, IUpdatePackageInfo, ICarrier, IClient, IPackage };