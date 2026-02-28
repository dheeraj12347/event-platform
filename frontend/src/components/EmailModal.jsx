import { useState } from "react";
import API from "../services/api";

const EmailModal = ({ event, onClose }) => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !consent) {
      alert("Please enter email and accept consent");
      return;
    }

    try {
      setLoading(true);

      await API.post("/email", {
        email,
        consent,
        eventId: event.id,
      });

      onClose(); // Close modal before redirect
      window.location.href = event.originalUrl;
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Enter Email</h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={consent}
            onChange={() => setConsent(!consent)}
          />
          <span> I agree to receive updates</span>
        </div>

        <button
          className="button"
          onClick={handleSubmit}
          disabled={loading}
          style={{ marginTop: "10px" }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        <button onClick={onClose} style={{ marginTop: "5px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmailModal;