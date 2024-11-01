import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import CrewmateCard from "../components/CrewmateCard";

const GalleryPage = () => {

  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates().catch(console.error);
  }, []);

  const fetchCrewmates = async () => {
    const {data} = await supabase
      .from('crewmates')
      .select()
      .order('created_at', { ascending: true });

    setCrewmates(data);
  };

  return (
    <div className="gallery-page">
      <h1>Your Crewmate Gallery!</h1>
      <div>
        {crewmates && crewmates.length > 0 ?
          <div className="crewmates-container">
            {crewmates.map((item) => (
              <CrewmateCard 
                key={item.id}
                name={item.name}
                speed={item.speed}
                color={item.color}
                id={item.id}
              />
            ))}
          </div> :
          <div className="empty-container">
            <h3>You haven't made  a crewmate yet!</h3>
            <Link to="/create">Create one here!</Link>
          </div>
        }
      </div>
    </div>
  );
};

export default GalleryPage;