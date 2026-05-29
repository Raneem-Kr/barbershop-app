import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm("Termin wirklich löschen?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);

      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-4">Name</th>
                <th className="p-4">Telefon</th>
                <th className="p-4">Service</th>
                <th className="p-4">Datum</th>
                <th className="p-4">Uhrzeit</th>
                <th className="p-4">Aktionen</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{booking.name}</td>

                  <td className="p-4">{booking.phone}</td>

                  <td className="p-4">{booking.service}</td>

                  <td className="p-4">{booking.date}</td>

                  <td className="p-4">{booking.time}</td>

                  <td className="p-4">
                    <button
                      onClick={() => deleteBooking(booking._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
