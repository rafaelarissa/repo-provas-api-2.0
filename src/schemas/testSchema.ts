import Joi from "joi";
import { CreateTestData } from "../services/testService.js";

export const testSchema = Joi.object<CreateTestData>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().required(),
  categoryId: Joi.number().required(),
  teacherDisciplineId: Joi.number().required(),
});
