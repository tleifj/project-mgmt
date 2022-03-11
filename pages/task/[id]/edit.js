import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../../components/NewTaskForm';
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditTask = () => {
    const router = useRouter()
    const { id } = router.query
    const { data: task, error } = useSWR(id ? `/api/task/${id}` : null, fetcher)
  
    console.log(task);
    // if (error) return <p>Failed to load</p>
    // if (!organization) return <p>Loading...</p>
  
    const taskForm = {
        name: task.name,
       description: task.description
        
      }
  
    return <Form formId="edit-task-form" organizationForm={taskForm} />
}

export default EditTask;