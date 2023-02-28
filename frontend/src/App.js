// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: 
    children: [
      {index: true, element: <Home/>},
      {path: 'events', element: <EventsRootLayout/>, children: [
        {index: true, element: <Events/>},
        {path: ':eventID', element: <EventDetail/>}, // : shows interactive links part
        {path: 'new', element: <NewEvent/>},
        {path: ':eventID/edit', element: <EditEvent/>},
      ]},

    ]
  }
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
