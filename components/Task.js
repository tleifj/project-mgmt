import styled from "styled-components";
import Link from "next/link";
const StyledTask = styled.div`
    padding: 10px;
    border: 1px solid gray;
    display: flex;
    width: 100%;
    justify-content: flex-start;
`;
export default function Task({ task }) {
    console.log(task);
    return (
        <>
            <StyledTask key={task.id}>
                <div className="table-cell">{task.name}</div>
                <div className="table-cell"> {task.users.map((user) => user.firstName + ' ' + user.lastName)}</div>
                <div className="table-cell">Status</div>
                <Link href="/task/[id]/edit" as={`/task/${task.id}/edit`}><button>Edit</button></Link>
           </StyledTask>
        </>
    )
}