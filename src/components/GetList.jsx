import { useNavigate } from "react-router-dom";
import { Image } from "./Image";

export const GetList = (props) => {
  const navigate = useNavigate();
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
              <div className="trip-theme">
                <p>{deta.theme}</p>
              </div>
              <div className="trip-destination">
                <p>{deta.destination}</p>
              </div>
              <small>{deta.evaluation} いいね！</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};
