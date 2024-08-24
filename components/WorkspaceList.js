import useSWR from "swr";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const WorkspaceList = () => {
  // use useState to create toggles for the workspace project lists

  // Get the current task data
  const { data, error } = useSWR(`/api/workspace/all`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {/* Loop through each workspace and display the title. If the workspace has projects, display the projects underneath the workspace title */}
      {data.map((workspace) => (
        <div key={workspace.id}>
          <h2>{workspace.name}</h2>
          <p>{workspace.description}</p>
          <ul>
            {workspace.projects.map((project) => (
              <li key={project.id}>
                <Link href="/project/[id]" as={`/project/${project.id}`}>
                  <a>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkspaceList;
