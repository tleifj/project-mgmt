import useSWR from "swr";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const WorkspaceList = () => {
  // Get the current task data
  const { data, error } = useSWR(`/api/workspace/all`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((workspace) => (
        <h2 key={workspace.id}>{workspace.name}</h2>
      ))}
    </div>
  );
};

export default WorkspaceList;
