import { db } from "../database/db";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBrochure = (id) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [trips, setTrips] = useState();
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

  const postBrochure = async (
    destination,
    theme,
    content,
    companion,
    region
  ) => {
    if (!destination || !theme || !content || !companion || !region) {
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
      console.log("post");
      alert("投稿されました");
      navigate("/getbrochures");
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

  return { trips, detail, deleteBrochure, postBrochure, updateBrochure };
};
