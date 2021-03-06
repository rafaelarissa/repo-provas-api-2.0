import { prisma } from "../database.js";
import { CreateTestData } from "../services/testService";

async function getTestsByDiscipline() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers() {
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function insert(createTestData: CreateTestData) {
  return prisma.test.create({
    data: createTestData,
  });
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  insert,
};
