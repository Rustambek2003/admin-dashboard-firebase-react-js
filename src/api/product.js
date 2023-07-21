import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";

export const getProduct = async () => {
  try {
    const docRef = collection(db, "dashboard");
    const docSnap = await getDocs(docRef);
    const docData = docSnap.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }));
    return { success: true, data: docData };
  } catch (error) {
    return { success: false, data: error };
  }
};

export const getPersonData = async () => {
  try {
    const docRef = collection(db, "images");
    const docSnap = await getDocs(docRef);
    const docData = docSnap.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }));
    return { success: true, data: docData };
  } catch (error) {
    return { success: false, data: error };
  }
};
export const getOrders = async () => {
  try {
    const docRef = collection(db, "orders");
    const docSnap = await getDocs(docRef);
    const docData = docSnap.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }));
    return { success: true, data: docData };
  } catch (error) {
    return { success: false, data: error };
  }
};

export const getProducts = async () => {
  try {
    const docRef = collection(db, "products");
    const docSnap = await getDocs(docRef);
    const docData = docSnap.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }));
    return { success: true, data: docData };
  } catch (error) {
    return { success: false, data: error };
  }
};

export const getDataPhone = async (id) => {
  try {
    const documentRef = doc(db, "products", `${id}`);
    const documentData = await getDoc(documentRef);
    return { success: true, data: documentData.data() };
  } catch (error) {
    console.log(error);
  }
};
export const deleteItem = async (id) => {
  console.log(id);
  const itemDoc = doc(db, "products", `${id}`);
  await deleteDoc(itemDoc).then(() => console.log("Deleted"));
};

export const updateItem = async ({ id, data }) => {
  try {
    const docItem = doc(db, "products", `${id}`);
    await updateDoc(docItem, data).then(() => console.log("Update"));
  } catch (error) {
    console.log("error", error);
  }
};