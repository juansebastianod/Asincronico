import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const responsive = await fetch(urlApi);
  const data = (await responsive).json();

  return data;
}

const another = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/products/${product.category.id}`
    );

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch {
    console.error("Que es eso");
  }
};

another(API);
