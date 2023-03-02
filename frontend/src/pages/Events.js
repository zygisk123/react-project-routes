import { useEffect, useState } from 'react';
import { useLoaderData, json } from 'react-router-dom'; //USELOADERDATA - get access to the closest loader data
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return<p>{data.message}</p>
  }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json(
      {message: 'Could not fetch events.'},
      {status: 500},
    );
  } else {
    return response;
  }
}