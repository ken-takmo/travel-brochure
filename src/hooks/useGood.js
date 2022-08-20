import { db } from "../database/db";
import { useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export const useGood = (id) => {
  const [goodUsers, setGoodUSers] = useState([]);
  const goodCollectionRef = collection(db, "trips", id, "goodUsers");

  useEffect(() => {
    const getGoodUser = async () => {
      let users = [];
      const snapShots = await getDocs(collection(db, "trips", id, "goodUsers"));
      if (snapShots) {
        snapShots.forEach((s) => {
          users.push({ goodUserId: s.id, user: s.data().user });
        });
        setGoodUSers(users);
      } else {
        console.log("no");
      }
    };
    getGoodUser();
  }, []);
  const addGoodUser = async (userId) => {
    try {
      await setDoc(doc(goodCollectionRef), {
        user: userId,
      });
    } catch (err) {
      alert(err);
    }
  };
  const addEvaluation = async (evaluation, userId) => {
    try {
      await db
        .collection("trips")
        .doc(id)
        .update({
          evaluation: evaluation + 1,
        });
      addGoodUser(userId);
    } catch (error) {
      alert(error);
    }
  };

  const deleteGoodUser = async (docId) => {
    try {
      await db
        .collection("trips")
        .doc(id)
        .collection("goodUsers")
        .doc(docId)
        .delete();
    } catch (err) {
      console.log(err);
    }
  };
  const reduceEvaluation = async (evaluation, docId) => {
    if (evaluation == 0) {
      return;
    }
    try {
      await db
        .collection("trips")
        .doc(id)
        .update({
          evaluation: evaluation - 1,
        });
      deleteGoodUser(docId);
      console.log("delete");
    } catch (error) {
      alert(error);
    }
  };
  return {
    addEvaluation,
    reduceEvaluation,
    goodUsers,
  };
};
