import { db } from "../database/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../database/db";
export const useGetDetail = (id) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    destination: "",
    theme: "",
    content: "",
    image: "",
    companion: 0,
    region: 0,
  });
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
    const res = window.confirm(
      "削除されると元には戻せませんがよろしいですか。"
    );
    if (res == true) {
      try {
        await db.collection("trips").doc(id).delete();
        deleteImage(fileData);
        console.log("delete");
        navigate("/list");
      } catch (error) {
        alert(error);
      }
    } else {
      return;
    }
  };

  return { detail, deleteBrochure };
};
