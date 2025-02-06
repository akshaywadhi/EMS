import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function Email() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axiosInstance.get("/user/getEmails");
        console.log("Fetched Emails:", response.data); // ✅ Debugging
        setEmails(response.data);
      } catch (error) {
        console.error("Error fetching emails:", error.response?.data || error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEmails();
  }, []);
  

  return (
    <div className="container">
      <h2>Your Emails</h2>
      {loading ? (
        <p>Loading emails...</p>
      ) : emails.length > 0 ? (
        <ul className="list-group">
          {emails.map((email) => (
            <li key={email._id} className="list-group-item mb-4">
              <strong>Subject:</strong> {email.subject} <br />
              <strong>Message:</strong> {email.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No emails found.</p>
      )}
    </div>
  );
}
