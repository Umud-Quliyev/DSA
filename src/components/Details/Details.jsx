import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="h-[200vh]">
      
    </div>
  );
};

export default Details;
