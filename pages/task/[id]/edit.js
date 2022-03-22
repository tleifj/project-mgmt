import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../../components/TaskForm'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditTask = ({users}) => {
  console.log(users);
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(id ? `/api/task/${id}` : null, fetcher);
  console.log(data);

  if (!data) return <p>Loading...</p>

  const taskForm = {
    name: data.name,
    founder_name: data.description,
    users: data.users
  }

  return <Form formId="edit-task-form" taskForm={taskForm} users={users} forNewtask={false} />
}

export default EditTask


export async function getServerSideProps(params) {
  const results = await prisma.user.findMany({});
    const users = results.map((user) => {
        user.createdAt = user.createdAt.toString();
        user.updatedAt = user.updatedAt.toString();
        return user
      })
    return { props: { users } }
}