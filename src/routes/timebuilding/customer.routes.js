import Router from "express-promise-router"
import {
  findOneCustomer,
  findAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../../controllers/timebuilding/customer.controller.js";

const router = Router()

//Rutas de clientes
router.get("/customer", findAllCustomers);

router.get("/customer/:id", findOneCustomer);

router.post("/customer", createCustomer);

router.put("/customer/:id", updateCustomer);

router.delete("/customer/:id", deleteCustomer);


export default router