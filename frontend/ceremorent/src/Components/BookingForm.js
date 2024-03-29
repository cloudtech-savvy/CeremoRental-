import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/BookingForm.css";
import { ToastContainer, toast } from "react-toastify";

function BookingForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [clientName, setclientName] = useState("");
  const [clientNumber, setclientNumber] = useState("");
  const [clientGender, setclientGender] = useState("default");
  const [BookingTime, setBookingTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!clientName.trim()) {
      errors.clientName = "client name is required";
    } else if (clientName.trim().length < 8) {
      errors.clientName = "client name must be at least 8 characters";
    }

    if (!clientNumber.trim()) {
      errors.clientNumber = "client phone number is required";
    } else if (clientNumber.trim().length !== 10) {
      errors.clientNumber = "client phone number must be of 10 digits";
    }

    if (clientGender === "default") {
      errors.clientGender = "Please select client gender";
    }
    if (!BookingTime) {
      errors.BookingTime = "Booking time is required";
    } else {
      const selectedTime = new Date(BookingTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.BookingTime = "Please select a future Booking time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setclientName("");
    setclientNumber("");
    setclientGender("default");
    setBookingTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Booking Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="Booking-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Ceremo <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book your Items  Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            client Full Name:
            <input
              type="text"
              value={clientName}
              onChange={(e) => setclientName(e.target.value)}
              required
            />
            {formErrors.clientName && <p className="error-message">{formErrors.clientName}</p>}
          </label>

          <br />
          <label>
            client Phone Number:
            <input
              type="text"
              value={clientNumber}
              onChange={(e) => setclientNumber(e.target.value)}
              required
            />
            {formErrors.clientNumber && <p className="error-message">{formErrors.clientNumber}</p>}
          </label>

          <br />
          <label>
            client Gender:
            <select
              value={clientGender}
              onChange={(e) => setclientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">not preffer to say </option>
            </select>
            {formErrors.clientGender && <p className="error-message">{formErrors.clientGender}</p>}
          </label>

          <br />
          <label>
            Preferred Booking  Time:
            <input
              type="datetime-local"
              value={BookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              required
            />
            {formErrors.BookingTime && <p className="error-message">{formErrors.BookingTime}</p>}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <br />
          <button type="submit" className="text-Booking-btn">
            Confirm Booking 
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Booking details has been sent to the clients phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
      <p>© 2024 Cremony Rental Platform. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default BookingForm;
