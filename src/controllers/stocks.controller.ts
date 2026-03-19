import BaseController from "./base.controller";

import { Stock } from "../models";

class StocksController extends BaseController {
  constructor() {
    super(Stock);
  }
}

const stocksController = new StocksController();

export default stocksController;
