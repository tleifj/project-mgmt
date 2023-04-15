// This is the endpoint for creating a new task

// This is needed to interact with database via Prisma
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //   if (method === "POST") {
  const { body } = req;
  console.log(body);
  const { result } = await prisma.task.create({
    data: {
      name: body.name,
      description: body.description,
      project: body.project,
      // users: {
      //   set: [{ id: parseInt(body.users) }],
      // },
    },
    //   include: { users: true },
  });
  res.status(200).json(result);
}
// }
