import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEvent = () => {
    return <EventForm />
}

export default NewEvent;

export async function action({request, params}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    const response = await fetch('http//localhost8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData),
    })

    if (!response.ok) {
        throw json({message: 'Could not save event'}, {status: 500});
    }

    return redirect('/events');
}