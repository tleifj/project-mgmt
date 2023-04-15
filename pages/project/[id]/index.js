import { PrismaClient } from "@prisma/client";
import Task from "../../../components/Task";
import Link from "next/link";

const prisma = new PrismaClient();

export default function SingleProject({ project, tasks }) {
  return (
    <>
      <h1>{project.name}</h1>
      <h2>Tasks</h2>
      <div>
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Assigned</div>
          <div className="table-cell">Status</div>
        </div>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
      <Link href="/task/create" as={`/task/create`}>
        <button>Add Task</button>
      </Link>
    </>
  );
}

export async function getServerSideProps(params) {
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
    include: { users: true },
  });

  const tasks = tasksResults.map((task) => {
    // console.log(task.users);
    task.createdAt = task.createdAt.toString();
    task.updatedAt = task.updatedAt.toString();
    if (task.users.length > 0) {
      const users = task.users.map((user) => {
        // user.createdAt = user.createdAt.toString();
        user.createdAt = user.createdAt.toString();
        user.updatedAt = user.updatedAt.toString();
        // console.log(user);
        // user.assignedAt = user.assignedAt.toString();
        return user;
      });
    }
    return task;
  });

  return { props: { project, tasks } };
}
