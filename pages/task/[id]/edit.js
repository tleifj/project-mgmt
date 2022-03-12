import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../../components/NewTaskForm'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditTask = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(id ? `/api/task/${id}` : null, fetcher)
// const data = fetch(`/api/task/${id}`)
// .then((res) => res.json())
// .then((json) => json.data);
console.log(data);
  if (!data) return <p>Loading...</p>

  const taskForm = {
    name: data.name,
    founder_name: data.description,
  }

  return <Form formId="edit-task-form" taskForm={taskForm} forNewtask={false} />
}

export default EditTask
