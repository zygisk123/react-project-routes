import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditEvent = () => {
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (<EventForm event={data.event}/>)
}

export default EditEvent;