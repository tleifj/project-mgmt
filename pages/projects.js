import { PrismaClient } from '@prisma/client'
import Link from 'next/link'


const prisma = new PrismaClient();

export default function projectsPage({ projects}) {
    return (
        <div>
            <h1>Projects Page</h1>
            <p>This is the projects page</p>
            {projects.map(project =>  (
                    <Link key={project.id} href="/project/[id]" as={`/project/${project.id}`}>
                        <a>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </a>
                    </Link>
                )
            )}
        </div>
    )
}

export async function getServerSideProps() {
    const results = await prisma.project.findMany({});
    const projects = results.map((project) => {
        project.createdAt = project.createdAt.toString();
        project.updatedAt = project.updatedAt.toString();
        return project
      })
    return { props: { projects: projects } }
}