import { db } from "../database/db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../database/db";

export const useBrochure = (id) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const getImage = (url) => {
    getDownloadURL(ref(storage, `image/${url}`))
      .then((res) => {
        setImageUrl(res);
      })
      .catch((error) => {
        console.log(error);
      });
    return <img src={imageUrl} alt="取得画像"></img>;
  };

  const ImageUpload = (fileData) => {
    const file = fileData[0];
    const storageRef = ref(storage, "image/" + file.name);
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
        return;
      },
      () => {
        setLoading(false);
        setIsUploaded(true);
        setTimeout(() => {
          alert("投稿されました");
          navigate("/getbrochures");
        }, 1000);
      }
    );
  };
  const postBrochure = async (
    destination,
    theme,
    content,
    companion,
    region,
    fileData
  ) => {
    if (
      !destination ||
      !theme ||
      !content ||
      !companion ||
      !region ||
      !fileData
    ) {
      alert("全ての項目を入力してください");
      return;
    }
    try {
      await db.collection("trips").add({
        destination: destination,
        theme: theme,
        content: content,
        companion: companion,
        region: region,
        evaluation: 0,
        image: fileData[0].name,
      });
      console.log(fileData[0].name);
      ImageUpload(fileData);
    } catch (error) {
      alert(error);
    }
  };

  const updateBrochure = async (
    destination,
    theme,
    content,
    companion,
    region
  ) => {
    try {
      await db.collection("trips").doc(id).update({
        destination: destination,
        theme: theme,
        content: content,
        companion: companion,
        region: region,
      });
      console.log("update");
      alert("更新されました");
      navigate(`/detail/${id}`);
    } catch (error) {
      alert(error);
    }
  };

  return {
    // trips,
    // detail,
    isUploaded,
    loading,
    // deleteBrochure,
    postBrochure,
    updateBrochure,
    getImage,
  };
};
