import { Link, useNavigate } from 'react-router-dom';

const CrewmateCard = ({name, speed, color, id}) => {
  
  const navigate = useNavigate();
  const editItem = () => {
    navigate(`/edit/${id}`, {replace: true});
  }

  return (
    <div className="crewmate-card" id={color}>
      <Link to={`../${id}`} relative="path"><img src="src\assets\crewmate.png" alt="crewmate" /></Link>
      <p>Name of Crewmate: <span>{name}</span></p>
      <p>Speed of Crewmate: <span>{speed} mph</span></p>
      <p>Color of Crewmate: <span>{color}</span></p>
      <button type="button" onClick={editItem}>Edit Crewmate</button>
    </div>
  );
};

export default CrewmateCard;
