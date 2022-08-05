import { db } from "../database/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  return { detail, deleteBrochure };
};
