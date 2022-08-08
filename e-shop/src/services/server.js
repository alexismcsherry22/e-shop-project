import firestore from "../firebase";
import products from "./products";
// reference the objects that holds the products

// record is the object that contains the data to be send to the DB

export const createProduct = async (record) => {
    const collectionRef = firestore.collection("products");

    await collectionRef.add(record);
};

export const seedProducts = async () => {
    const collectionRef = firestore.collection("products");

    const data = await collectionRef.get();

    // Stopping execution of function if DB is not empty
    if (!data.empty) return;

    const promises = products.map(async (product) => {
        return await collectionRef.add(product);
    });

    await Promise.all(promises);
};

export const getProducts = async () => {
    const collectionRef = firestore.collection("products");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

    return data;
};

export const updateProducts = async (id, record) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

export const deleteProduct = async (id) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);
    await docRef.delete();
};

export const addToCart = async (record) => {
    const collectionRef = firestore.collection("cart");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    documents.forEach((doc) => {
        if (record.id === doc.id) return;
    });
    // if (record.id === collectionRef.doc(record.id)) return;

    await collectionRef.add(record);
};

export const getCart = async () => {
    const collectionRef = firestore.collection("cart");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id1: doc.id, ...doc.data() };
    });

    return data;
};

export const updateCart = async (id, record) => {
    const collectionRef = firestore.collection("cart");

    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

export const deleteCartItem = async (id) => {
    const collectionRef = firestore.collection("cart");
    console.log(id);

    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
