import firestore from "../firebase";
import products from "./products";
// reference the objects that holds the products

// record is the object that contains the data to be send to the DB

export const createProduct = async (record) => {
    const collectionRef = firestore.collection("products");

    await collectionRef.add(record);
};

//Used to push products into an empty database
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

//Used to get all the products from the database
export const getProducts = async () => {
    const collectionRef = firestore.collection("products");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });

    return data;
};

//Used when needing to update a document in the database
export const updateProducts = async (id, record) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

//Delete a document given a condition is fulfilled
export const deleteProduct = async (id) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);
    await docRef.delete();
};

//Used to add items from products database to do cart database
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

//Used to get all the items in the cart database
export const getCart = async () => {
    const collectionRef = firestore.collection("cart");

    const querySnap = await collectionRef.get();

    const documents = querySnap.docs;

    const data = documents.map((doc) => {
        return { id1: doc.id, ...doc.data() };
    });

    return data;
};

//Used to update any documents in the cart that has value changes
export const updateCart = async (id, record) => {
    const collectionRef = firestore.collection("cart");

    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

//Used to delete a cart item document given a condition is met
export const deleteCartItem = async (id) => {
    const collectionRef = firestore.collection("cart");
    console.log(id);

    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
