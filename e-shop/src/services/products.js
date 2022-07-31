const products = async () => {
    try {
        const promises = [];

        promises.push(fetch("https://fakestoreapi.com/products"));

        const responses = await Promise.all(promises);
        const jsonResponses = responses.map((response) => response.json());
        const data = await Promise.all(jsonResponses);

        return data;
    } catch {
        throw new Error("Failed request");
    }
};

export default products;
