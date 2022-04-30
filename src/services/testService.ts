import { Test } from ".prisma/client";
import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

export type CreateTestData = Omit<Test, "id">;

async function insert(createTestData: CreateTestData) {
  await testRepository.insert(createTestData);
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

export default {
  find,
  insert,
};
