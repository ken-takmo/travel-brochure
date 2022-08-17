import { useNavigate } from "react-router-dom";
import { companions, regions } from "./utils";
import background from "../img/map.jpg";
import { useBrochure } from "../hooks/useBrochure";
import { Image } from "../components/Image";

export const Getlist = (props) => {
  const navigate = useNavigate();
  const { getImage } = useBrochure();
  return (
    <div className="trip-datas">
      {props.deta.map((deta) => {
        return (
          <div
            className="trip-data"
            key={deta.tripId}
            onClick={() => navigate(`/detail/${deta.tripId}`)}
          >
            <Image url={deta.image} />
            <div className="trip-data-main">
              <div
                className="trip-theme"
                // style={{ backgroundImage: `url(${background})` }}
              >
                <p>{deta.theme}</p>
              </div>
              <div className="trip-destination">
                <p>{deta.destination}</p>
              </div>
            </div>
            {/* <div className="trip-details">
              <small>いいね！</small>
              <p className="detail">{deta.evaluation}</p>
              <small>誰と</small>
              <p className="detail">{companions[deta.companion]}</p>
              <small>地域</small>
              <p className="detail">{regions[deta.region]}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
