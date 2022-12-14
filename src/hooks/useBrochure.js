import { db } from "../database/db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, deleteObject } from "firebase/storage";
import { storage } from "../database/db";
import firebase from "firebase/compat/app";

export const useBrochure = (id) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const deleteImage = (preImage) => {
    const storageRef = ref(storage, "image/" + preImage);
    deleteObject(storageRef)
      .then(() => console.log("削除されました"))
      .catch((error) => console.log(error));
  };

  const ImageUpload = (fileData, update) => {
    const file = fileData[0];
    const storageRef = ref(storage, "image/" + file.name);
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      () => {
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
          if (update) {
            alert("変更しました");
            navigate(`/detail/${id}`);
          } else {
            alert("投稿されました");
            navigate("/list");
          }
        }, 1000);
      }
    );
  };

  const updateImage = (preImage, newFileData, update) => {
    deleteImage(preImage);
    ImageUpload(newFileData, update);
  };

  const postBrochure = async (
    destination,
    theme,
    content,
    companion,
    region,
    fileData,
    uid
  ) => {
    if (
      !destination ||
      !theme ||
      !content ||
      !companion ||
      !region ||
      !fileData ||
      !uid
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
        userId: uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
    region,
    preImage,
    newFileData,
    update
  ) => {
    if (newFileData) {
      try {
        await db.collection("trips").doc(id).update({
          destination: destination,
          theme: theme,
          content: content,
          companion: companion,
          region: region,
          image: newFileData[0].name,
        });
        updateImage(preImage, newFileData, update);
      } catch (error) {
        alert(error);
      }
    } else {
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
    }
  };

  return {
    isUploaded,
    loading,
    postBrochure,
    updateBrochure,
  };
};
