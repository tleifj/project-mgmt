import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //   if (method === "GET") {
  //   console.log(req);
  const results = await prisma.workspace.findMany({});
  //   console.log(results);
  const workspaces = results.map((workspace) => {
    workspace.createdAt = workspace.createdAt.toString();
    workspace.updatedAt = workspace.updatedAt.toString();
    return workspace;
  });
  //   console.log(result);
  res.status(200).json(workspaces);
  //   } else {
  //     res.status(405).json({ message: "Method not allowed" });
  //   }
}
