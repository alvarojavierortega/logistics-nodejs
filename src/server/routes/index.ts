import { Router } from "express";
import { PackagesController, CarriersController, ClientsController } from "../../controllers";

const router = Router();
router.get("/package/:id/status/:status", PackagesController.update);
router.get("/package/", PackagesController.list);
router.get("/carrier/", CarriersController.list);
router.get("/client/", ClientsController.list);  

export {router};