import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import "./index.css";
import AddEventModal from "./components/AddEventModal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarAPI = calendarRef.current.getApi();
    calendarAPI.addEvent(event);
  };

  console.log("holaa app.js");

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Add Event</button>

      <div style={{ position: "relative", zIndex: "0" }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[daygridPlugin]}
          initialView="dayGridMonth"
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event) => onEventAdded(event)}
      />
    </div>
  );
};
export default App;
