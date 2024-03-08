import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Ceremo <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Think of it as a one-stop shop for party planning. On the platform,
          you'll find vendors who rent out everything you need for your
          ceremony, like chairs, tables, decorations, and even catering
          services. You can browse and compare options from different vendors,
          book what you need, and chat with them directly. Vendors, on the other
          hand, can list their available items, set their prices, manage
          bookings, and handle delivery and pickup. This platform streamlines
          the process for both sides, making planning and renting ceremony
          supplies easier and more convenient.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          We at Ceremony Rental Platform value your privacy and strive to
          protect your information. We collect limited data like name, email,
          and usage details to operate our platform, fulfill orders, handle
          inquiries, and send optional marketing communications. We might share
          information with trusted partners to deliver services and empower you
          to access, update, or erase your data. While we implement security
          measures, complete online security is not guaranteed. We may update
          this policy, and the latest version is always available on our
          platform. For further inquiries, contact us at: ceremony@rental.com
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          We at Ceremony Rental Platform are dedicated to serving a diverse
          range of customers, from individual party planners organizing intimate
          gatherings to event professionals coordinating large-scale
          celebrations. Whether you need chairs and tables for a backyard
          barbecue or a full range of decorations and catering services for a
          wedding, our platform connects you with the vendors you need to make
          your event a success.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Consultations, offered by our platform, connect you with expert
          vendors in various fields to provide personalized advice, guidance,
          and recommendations tailored to your specific needs and vision.
          Whether you're planning a wedding, party, or any other event, our
          consultations allow you to discuss your ideas, ask questions, and gain
          valuable insights from seasoned professionals, ensuring a seamless and
          successful experience.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          A ceremony rental platform connects people planning ceremonies (like
          weddings or parties) with vendors who rent out items needed for the
          event. Imagine it like an online marketplace: Party planners: Browse
          and search for items like chairs, tables, decorations, and even
          services like catering. They can compare prices and availability from
          different vendors, book the items they need, and communicate directly
          with the vendors. Rental vendors: List their available items and set
          their own rental prices. They manage their listings, confirm bookings,
          and deliver and pick up the rented items after the ceremony.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 Cremony Rental Platform. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
