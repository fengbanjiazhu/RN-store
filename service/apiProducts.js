const API_URL = "http://localhost:4000/api/";

export async function fetchProduct() {
  try {
    const res = await fetch(`${API_URL}products`);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
