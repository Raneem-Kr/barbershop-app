import { useState } from "react";
import axios from "axios";

export default function Booking() {
  const [bookedTimes, setBookedTimes] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const fetchBookedTimes = async (selectedDate) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/bookings/date/${selectedDate}`,
      );

      setBookedTimes(res.data.map((booking) => booking.time));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date") {
      fetchBookedTimes(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/bookings", formData);

      alert("Termin erfolgreich gebucht!");

      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
      });

      setBookedTimes([]);
    } catch (error) {
      alert(error.response?.data?.message || "Fehler beim Buchen");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Termin buchen</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefonnummer"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        >
          <option value="">Dienstleistung wählen</option>

          <option value="Haarschnitt">Haarschnitt</option>

          <option value="Bartpflege">Bartpflege</option>

          <option value="Haarschnitt + Bart">Haarschnitt + Bart</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
          required
        >
          <option value="">Uhrzeit wählen</option>

          {availableTimes
            .filter((time) => !bookedTimes.includes(time))
            .map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 transition p-3 rounded font-bold"
        >
          Termin bestätigen
        </button>
      </form>
    </div>
  );
}
