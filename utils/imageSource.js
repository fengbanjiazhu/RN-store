export function imageSource(img) {
  if (typeof img !== "string") return null;

  return `https://github.com/fengbanjiazhu/RN-store/blob/main/assets/products/${img}?raw=true`;
}
