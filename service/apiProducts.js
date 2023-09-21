const API_URL = "http://localhost:4000/api/";

export async function fetchProduct() {
  try {
    const res = await fetch(`${API_URL}products`);

    if (!res.ok) throw Error("Failed getting products");

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
