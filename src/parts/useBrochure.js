import { db } from "../database/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../database/db";

export const useBrochure = (id) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [trips, setTrips] = useState();
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const result = [];
  const _trips = [];

  useEffect(() => {
    const getDetail = async () => {
      try {
        const doc = await db.collection("trips").doc(id).get();
        result.push({ ...doc.data() });
        setDetail(result);
        console.log("getdetail");
      } catch (error) {
        alert(error);
      }
    };
    getDetail();
  }, [id]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const docs = await db.collection("trips").get();
        docs.forEach((doc) => {
          _trips.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        setTrips(_trips);
        console.log("getAll");
      } catch (error) {
        alert(error);
      }
    };
    getAll();
  }, []);

  const deleteBrochure = async () => {
    try {
      await db.collection("trips").doc(id).delete();
      console.log("delete");
      alert("削除されました");
      navigate("/getbrochures");
    } catch (error) {
      alert(error);
    }
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
      });
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
    trips,
    detail,
    isUploaded,
    loading,
    deleteBrochure,
    postBrochure,
    updateBrochure,
  };
};
