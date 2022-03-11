import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = () => {
    const router = useRouter();
    // function to handle editing an existing task (PUT)
    // We pass form because this holds the info for the task
    const putData = async (form) => {
        // We get the id of the task we are currently editing for updating DB
        const {id} = router.query;

        // Let's try to hit the API to update the task
        try {
            const res = await fetch(`/api/task/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            // If somethign goes wrong with the response from the API, throw an error
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }

            // Otherwise, we will get the data from the API response
            const { data } = await res.json();
            mutate(`/api/organizations/${id}`, data, false);
            router.push('/')
        } catch (error) {
            
        }

    }

    return <p>EDIT FORM TEST</p>
}

export default Form;