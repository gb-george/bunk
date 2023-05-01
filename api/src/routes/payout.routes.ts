import { Request, Response, Router } from "express";
import { calculatePayouts } from "../services";
import { ExpenseReport } from "../interfaces";

const router: Router = Router();

router.post("/", (req: Request, res: Response) => {
  const result: ExpenseReport = calculatePayouts(req.body);
  res.json(result);
});

export const PayoutsRouter: Router = router;
