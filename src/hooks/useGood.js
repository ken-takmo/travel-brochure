import { db } from "../database/db";
import { useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { useAuth } from "../providers/AuthContext";
import { users } from "./users";

export const useGood = (id) => {
  const [isAuth] = useAuth();
  const [goodUsers, setGoodUSers] = useState([]);
  const [isGood, setIsGood] = useState(false);
  const [filterUser, setFilterUser] = useState({});
  const goodCollectionRef = collection(db, "trips", id, "goodUsers");

  useEffect(() => {
    const getGoodUser = async () => {
      let users = [];
      const snapShots = await getDocs(goodCollectionRef);
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
  }, [isGood]);

  useEffect(() => {
    // いいねしたユーザーの一覧
    const hasGoodUsers = goodUsers.map((goodUser) => {
      return goodUser.user;
    });
    if (hasGoodUsers.length !== 0) {
      // いいねしたユーザーの中に操作中のユーザーがあるか
      const didGood = hasGoodUsers.includes(isAuth.uid);
      if (didGood) {
        // あった場合そのユーザーのドキュメントを取り出す
        setFilterUser(
          goodUsers.find((goodUser) => goodUser.user == isAuth.uid)
        );
        console.log(filterUser);
        console.log("いいねしてる");
        setIsGood(true);
      } else {
        console.log("いいねしてない");
        setIsGood(false);
        return;
      }
    } else {
      console.log("何もない");
      return;
    }
  }, [goodUsers]);

  const addGoodUser = async () => {
    try {
      await setDoc(doc(goodCollectionRef), {
        user: isAuth.uid,
      });
      setIsGood(true);
    } catch (err) {
      alert(err);
    }
  };

  const addEvaluation = async (evaluation, goodCount) => {
    try {
      if (evaluation == goodCount) {
        // users(isAuth.uid, id);
        addGoodUser();
        await db.collection("trips").doc(id).update({
          evaluation: evaluation,
        });
      } else {
        console.log("add");
        addGoodUser();
        await db
          .collection("trips")
          .doc(id)
          .update({
            evaluation: evaluation + 1,
          });
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteGoodUser = async () => {
    try {
      await db
        .collection("trips")
        .doc(id)
        .collection("goodUsers")
        .doc(filterUser.goodUserId)
        .delete();
      setIsGood(false);
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const reduceEvaluation = async (evaluation, goodCount) => {
    try {
      console.log(evaluation);
      console.log(goodCount);
      if (evaluation == goodCount) {
        deleteGoodUser();
        await db.collection("trips").doc(id).update({
          evaluation: evaluation,
        });
      } else {
        console.log("reduce");
        deleteGoodUser();
        await db
          .collection("trips")
          .doc(id)
          .update({
            evaluation: evaluation - 1,
          });
      }
    } catch (error) {
      alert(error);
    }
  };
  return {
    addEvaluation,
    reduceEvaluation,
    isGood,
  };
};
