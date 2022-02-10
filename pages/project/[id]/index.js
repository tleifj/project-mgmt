import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default function SingleProject({ project }) {
    return (
        <h1>{project.name}</h1>
    )
}

export async function getServerSideProps(params) {
    // const project = await prisma.project.findUnique({
    //     where: {
    //       id: 1,
    //     },
    //   });
    console.log(params.query.id);
      const project = await prisma.project.findUnique({
        where: {
          id: parseInt(params.query.id),
        },
      });
    project.createdAt = project.createdAt.toString();
    project.updatedAt = project.updatedAt.toString(); 
      
    return { props: { project } }
}