import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = (event) => {
    const params = useParams();
    
    return <div>
        EventDetail
        <EventItem event={event}/>
    </div>
}

export default EventDetail;