const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getAll = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

















export default { getAll };