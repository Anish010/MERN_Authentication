import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import "./PrivateScreen.css";
import { SERVER_URL } from "../../config/config";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const {data} = await axios.get(`${SERVER_URL}/private/`, config);
        console.log(data);
        setPrivateData(data.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Unauthorized, clear authToken and redirect to login
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          // Handle other errors
          setError("An error occurred while fetching private data.");
        }
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or component
  }

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div>{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateScreen;
