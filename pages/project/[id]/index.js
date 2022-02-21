import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default function SingleProject({ project, tasks }) {
    return (
        <>
        <h1>{project.name}</h1>
        <h2>Tasks</h2>
        <ul>
        {tasks.map(task => (
            <li>{task.name}</li>
        )   
        )}
        </ul>
        <button>Add Task</button>
        </>
    )
}

export async function getServerSideProps(params) {
    // const project = await prisma.project.findUnique({
    //     where: {
    //       id: 1,
    //     },
    //   });
      const project = await prisma.project.findUnique({
        where: {
          id: parseInt(params.query.id),
        },
      });
    project.createdAt = project.createdAt.toString();
    project.updatedAt = project.updatedAt.toString(); 

    const tasksResults = await prisma.task.findMany({
        where: {
          projectId: parseInt(params.query.id),
        },
      });

      const tasks = tasksResults.map((task) => {
        task.createdAt = task.createdAt.toString();
        task.updatedAt = task.updatedAt.toString();
        return task
      })
      
    return { props: { project, tasks } }
}