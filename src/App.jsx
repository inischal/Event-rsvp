import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: 1,
    dietary: "",
    bringingGuests: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Event RSVP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Number of Attendees: <br />
            <input
              type="number"
              name="attendees"
              min="1"
              required
              value={formData.attendees}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Dietary Preferences: <br />
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Bringing Additional Guests?{" "}
            <input
              type="checkbox"
              name="bringingGuests"
              checked={formData.bringingGuests}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "1rem" }}>
          <h2>RSVP Submitted!!</h2>
          <p>Name:{submittedData.name}</p>
          <p>Email:{submittedData.email}</p>
          <p>Number of attendees:{submittedData.attendees}</p>
          <p>Dietary Preferences:{submittedData.dietary || "None"}</p>
          <p>
            Bringing additional guests:{" "}
            {submittedData.bringingGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
