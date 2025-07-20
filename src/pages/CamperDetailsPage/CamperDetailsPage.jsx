// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  //   const { id } = useParams();
  //   const [camper, setCamper] = useState(null);
  //   useEffect(() => {
  //     const fetchCamper = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  //         );
  //         setCamper(response.data);
  //       } catch (error) {
  //         console.error("Error fetching camper:", error);
  //       }
  //     };
  //     fetchCamper();
  //   }, [id]);
  //   if (!camper) return <p>Loading...</p>;
  //   return (
  //     <div className={styles.container}>
  //       <h2>{camper.name}</h2>
  //       <div className={styles.meta}>
  //         <span>
  //           {camper.rating} ({camper.reviews.length} Reviews)
  //         </span>
  //         <span> {camper.location}</span>
  //       </div>
  //       <p className={styles.price}>€{parseFloat(camper.price).toFixed(2)}</p>
  //       <div className={styles.gallery}>
  //         {camper.gallery.map((img, index) => (
  //           <img
  //             key={index}
  //             src={img.original}
  //             alt={`${camper.name} ${index + 1}`}
  //           />
  //         ))}
  //       </div>
  //       <p className={styles.description}>{camper.description}</p>
  //       <div className={styles.tabs}>
  //         <button className={styles.active}>Features</button>
  //         <button>Reviews</button>
  //       </div>
  //       <div className={styles.featuresGrid}>
  //         <div className={styles.featureChips}>
  //           {camper.features.map((feature) => (
  //             <span key={feature} className={styles.chip}>
  //               {feature}
  //             </span>
  //           ))}
  //         </div>
  //         <div className={styles.detailsBox}>
  //           <h4>Vehicle details</h4>
  //           <ul>
  //             <li>
  //               <strong>Form:</strong> {camper.form}
  //             </li>
  //             <li>
  //               <strong>Length:</strong> {camper.length} m
  //             </li>
  //             <li>
  //               <strong>Width:</strong> {camper.width} m
  //             </li>
  //             <li>
  //               <strong>Height:</strong> {camper.height} m
  //             </li>
  //             <li>
  //               <strong>Tank:</strong> {camper.tank} l
  //             </li>
  //             <li>
  //               <strong>Consumption:</strong> {camper.consumption} l/100km
  //             </li>
  //           </ul>
  //         </div>
  //         <form className={styles.bookingForm}>
  //           <h4>Book your campervan now</h4>
  //           <p>Stay connected! We are always ready to help you.</p>
  //           <input type="text" placeholder="Name*" required />
  //           <input type="email" placeholder="Email*" required />
  //           <input type="date" placeholder="Booking date*" required />
  //           <textarea placeholder="Comment" rows="4" />
  //           <button type="submit">Send</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
}

export default CamperDetailsPage;
