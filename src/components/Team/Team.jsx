import "./Team.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Teachers from "../Teachers/Teachers";
import Graduates from "../Graduates/Graduates";

const Team = () => {
  return (
    <section id="team" name="team" className="team">
      <div className="teachers">
        <Teachers />
      </div>
      <div className="graduates">
        <Graduates />
      </div>
    </section>
  );
};

export default Team;
