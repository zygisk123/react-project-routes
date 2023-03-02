import { useRouteLoaderData, useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = (event) => {
    const data = useRouteLoaderData('event-detail');
    
    return <div>
        EventDetail
        <EventItem event={data.event}/>
    </div>
}

export default EventDetail;

export async function loader({request, params}) { // loader params are passed by react-router
    const id = params.eventID;
    const response = await fetch('http://localhost:8080/events/' + id);
    
    if(!response.ok){
        throw json(
            {message: 'Could not fetch details for selected event'},
            {status: 500}
        )
    } else {

    }
    return response;
}