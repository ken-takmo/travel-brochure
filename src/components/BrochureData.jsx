import { useNavigate } from "react-router-dom";
import { Image } from "./Image";

export const BrochureData = (props) => {
  const navigate = useNavigate();
  return (
    <div className="trip-datas">
      {props.data.map((data) => {
        return (
          <div
            className="trip-data"
            key={data.tripId}
            onClick={() => navigate(`/detail/${data.tripId}`)}
          >
            <Image url={data.image} />
            <div className="trip-data-main">
              <div className="trip-theme">
                <p>{data.theme}</p>
              </div>
              <div className="trip-data-sub">
                <div className="trip-destination">
                  <p>{data.destination}</p>
                </div>
                <small>{data.evaluation} いいね！</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
