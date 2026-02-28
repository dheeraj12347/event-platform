import { useState } from "react";
import EmailModal from "./EmailModal";
import StatusTag from "./StatusTag";

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      {/* Event Image */}
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="event-image"
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{event.title}</h3>
        <StatusTag status={event.status} variant="card" />
      </div>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(event.dateTime).toLocaleString()}
      </p>

      <p>
        <strong>Venue:</strong> {event.venueName}
      </p>

      <p>{event.description}</p>

      <p>
        <strong>Source:</strong> {event.sourceWebsite}
      </p>

      <button
        className="button"
        onClick={() => setShowModal(true)}
      >
        GET TICKETS
      </button>

      {showModal && (
        <EmailModal
          event={event}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default EventCard;