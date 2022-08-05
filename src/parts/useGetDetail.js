import { db } from "../database/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../database/db";
export const useGetDetail = (id) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const result = [];

  useEffect(() => {
    const getDetail = async () => {
      try {
        const doc = await db.collection("trips").doc(id).get();
        result.push({ ...doc.data() });
        setDetail(result[0]);
        console.log("getdetail");
      } catch (error) {
        alert(error);
      }
    };
    getDetail();
  }, [id]);

  const deleteImage = (fileData) => {
    const storageRef = ref(storage, "image/" + fileData);
    deleteObject(storageRef)
      .then(() => alert("削除されました"))
      .catch((error) => console.log(error));
  };

  const deleteBrochure = async (fileData) => {
    try {
      await db.collection("trips").doc(id).delete();
      deleteImage(fileData);
      console.log("delete");
      navigate("/getbrochures");
    } catch (error) {
      alert(error);
    }
  };

  return { detail, deleteBrochure };
};
