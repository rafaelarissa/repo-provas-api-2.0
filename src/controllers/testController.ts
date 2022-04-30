import { Request, Response } from "express";
import testService, { CreateTestData } from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function insert(req: Request, res: Response) {
  const test: CreateTestData = req.body;

  await testService.insert(test);
}

export default {
  find,
  insert,
};
