import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../database/db";

export const Image = (props) => {
  const url = props.url;
  const [brochureImage, setBrochureImage] = useState();

  useEffect(() => {
    getDownloadURL(ref(storage, `image/${url}`))
      .then((res) => {
        setBrochureImage(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return <img className="list-image" src={brochureImage} alt="" />;
};
