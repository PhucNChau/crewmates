import { useState } from "react";
import { Link } from "react-router-dom";

const GalleryPage = () => {

  const [crewmates, setCrewmates] = useState([]);

  return (
    <div className="gallery-page">
      <h1>Your Crewmate Gallery!</h1>
      {crewmates && crewmates.length > 0 ?
        <div></div> :
        <div>
          <h3>You haven't made  a crewmate yet!</h3>
          <Link to="/create">Create one here!</Link>
        </div>
      }
    </div>
  );
};

export default GalleryPage;