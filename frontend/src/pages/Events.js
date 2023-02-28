import EventsList from '../components/EventsList';

const DUMMY_EVENTS =[
    {
      id: 'e1',
      title: 'event1',
      image: 'img',
      date: '2022-01-01',
      description: 'This is first event'
    },
    {
      id: 'e2',
      title: 'event2',
      image: 'img',
      date: '2023-02-01',
      description: 'This is second event'
    },
    {
      id: 'e3',
      title: 'event3',
      image: 'img',
      date: '2023-11-01',
      description: 'This is third event'
    },
];
const Events = () => {
    return <EventsList events={DUMMY_EVENTS}/>
}

export default Events;