import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import StatusTag from "../components/StatusTag";

const Dashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    city: "",
    keyword: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const filteredParams = Object.fromEntries(
        Object.entries(filters).filter(([_, v]) => v !== "")
      );

      const query = new URLSearchParams(filteredParams).toString();
      const res = await API.get(`/events?${query}`);
      setEvents(res.data);
    } catch {
      alert("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleImport = async (id) => {
    try {
      await API.patch(`/admin/import/${id}`, {});
      fetchEvents();
    } catch {
      alert("Import failed");
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const stats = {
    total: events.length,
    new: events.filter((e) => e.status === "new").length,
    updated: events.filter((e) => e.status === "updated").length,
    imported: events.filter((e) => e.status === "imported").length,
  };

  return (
    <div className="dashboard-wrapper">
      <div className="stats-row">
        <div className="stat-card">
          <h4>Total Events</h4>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card green">
          <h4>New</h4>
          <p>{stats.new}</p>
        </div>
        <div className="stat-card orange">
          <h4>Updated</h4>
          <p>{stats.updated}</p>
        </div>
        <div className="stat-card blue">
          <h4>Imported</h4>
          <p>{stats.imported}</p>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Event Management</h2>

        <div className="filter-row">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={filters.city}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="keyword"
            placeholder="Keyword"
            value={filters.keyword}
            onChange={handleFilterChange}
          />
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
          />
          <button className="button" onClick={fetchEvents}>
            Apply
          </button>
        </div>

        {loading ? (
          <p>Loading events...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td
                    className="clickable"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {event.title}
                  </td>
                  <td>
                    {new Date(event.dateTime).toLocaleDateString()}
                  </td>
                  <td>
                    <StatusTag status={event.status} />
                  </td>
                  <td>
                    {event.status !== "imported" && (
                      <button
                        className="button small"
                        onClick={() => handleImport(event.id)}
                      >
                        Import
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedEvent && (
        <div className="preview-card">
          <h3>{selectedEvent.title}</h3>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(selectedEvent.dateTime).toLocaleString()}
          </p>
          <p>
            <strong>Venue:</strong> {selectedEvent.venueName}
          </p>
          <p>{selectedEvent.description}</p>
          <p>
            <strong>Status:</strong>{" "}
            <StatusTag status={selectedEvent.status} />
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;