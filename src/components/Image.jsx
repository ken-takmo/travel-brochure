import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../database/db";

export const Image = (props) => {
  const url = props.url;
  const [brochureImage, setBrochureImage] = useState();
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    getDownloadURL(ref(storage, `image/${url}`))
      .then((res) => {
        setLoading(true);
        setBrochureImage(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  if (loading === null) {
    return (
      <div class="image-loading">
        <p>Loading...</p>
      </div>
    );
  } else {
    return <img src={brochureImage} alt="" />;
  }
};
