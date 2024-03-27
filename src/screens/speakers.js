import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import ProductsGrid from "../components/productsGrid/productsGrid";
import { useLoadingContext } from "../contexts/loadingContext";
import { getAllSpeakers } from "../utils/apiCalls";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  const { setLoading } = useLoadingContext();
  useEffect(() => {
    const getSpeakers = async () => {
      try {
        setLoading(true);
        const data = await getAllSpeakers();
        setSpeakers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getSpeakers();
  }, []);

  return (
    <div>
      <Navbar />
      <ProductsGrid products={speakers} />
    </div>
  );
}
