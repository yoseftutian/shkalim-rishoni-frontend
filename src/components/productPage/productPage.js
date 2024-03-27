import { Button, CircularProgress } from "@mui/material";
import Navbar from "../navbar/navbar";
import "./productPage.css";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../../contexts/loadingContext";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [netef, setNetef] = useState(null);
  const { loading, setLoading } = useLoadingContext();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3001/products/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0",
            },
          }
        );
        setNetef(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);
  return (
    <div className="column">
      <Navbar />
      {loading ? (
        <CircularProgress />
      ) : (
        netef && (
          <div className="product-page">
            <div className="row top-section">
              <div className="image-container">
                <img src={netef.img} />
              </div>
              <div className="column details">
                <h1>{netef.title}</h1>
                <Button variant="contained">{netef.price}</Button>
              </div>
            </div>
            <div className="description">
              <p>{netef.desc}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
