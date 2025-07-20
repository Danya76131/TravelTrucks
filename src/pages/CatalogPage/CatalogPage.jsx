import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CatalogPage.module.css";
import { useNavigate } from "react-router-dom";

function CatalogPage() {
  const [campersData, setCampersData] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchCampers = async (reset = false) => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params: {
            location: location || undefined,
            page: reset ? 1 : page,
            limit: 4,
          },
        }
      );

      const data = response.data;

      if (Array.isArray(data.items)) {
        if (reset) {
          setCampersData(data.items);
          setPage(2);
        } else {
          setCampersData((prev) => [...prev, ...data.items]);
          setPage((prev) => prev + 1);
        }

        setHasMore(data.items.length === 4);
      } else {
        setCampersData([]);
        console.error("Unexpected data format from API:", data);
      }
    } catch (error) {
      console.error("Error fetching campers:", error);
      setCampersData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampers(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.searchInput}
        />
        <button
          onClick={() => fetchCampers(true)}
          className={styles.searchButton}
        >
          Search
        </button>
      </div>

      <div className={styles.list}>
        {campersData.map((camper) => (
          <div key={camper.id} className={styles.card}>
            <img
              src={
                camper.gallery?.[0]?.original ||
                "https://via.placeholder.com/300x200"
              }
              alt={camper.name}
              className={styles.image}
            />
            <div className={styles.info}>
              <div className={styles.topRow}>
                <h3>{camper.name}</h3>
                <p className={styles.price}>
                  €{parseFloat(camper.price).toFixed(2)}
                </p>
              </div>

              <div className={styles.meta}>
                <span>
                  {camper.rating} ({camper.reviews.length} Reviews)
                </span>
                <span>{camper.location}</span>
              </div>

              <p className={styles.description}>
                {camper.description.length > 100
                  ? camper.description.slice(0, 100) + "…"
                  : camper.description}
              </p>

              <button
                className={styles.button}
                onClick={() => navigate(`/catalog/${camper.id}`)}
              >
                Show more
              </button>
            </div>
          </div>
        ))}

        {loading && <p className={styles.loader}>Loading...</p>}

        {hasMore && !loading && (
          <button
            onClick={() => fetchCampers(false)}
            className={styles.loadMoreButton}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
