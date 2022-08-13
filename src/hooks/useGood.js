// import { db } from "../database/db";

// export const useGood = () => {
//   const [isGood, setIsGood] = useState(false);
//   const addGoodUser = async () => {
//     try {
//       await db.collection("trips").doc(id).collection("goodUser").add(user);
//     } catch (err) {
//       alert(err);
//     }
//   };
//   const addEvaluation = async (id, evaluation, userId) => {
//     try {
//       await db
//         .collection("trips")
//         .doc(id)
//         .update({
//           evaluation: [evaluation + 1, userId],
//         });
//       await db
//         .collection("trips")
//         .doc(id)
//         .collection("goods")
//         .add({ user: userId });
//     } catch (error) {
//       alert(error);
//     }
//   };
//   const reduceEvaluation = async (id, evaluation) => {
//     if (evaluation == 0) {
//       return;
//     }
//     try {
//       await db
//         .collection("trips")
//         .doc(id)
//         .update({
//           evaluation: evaluation - 1,
//         });
//       // setIsGood(false);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   return {
//     addEvaluation,
//   };
// };
