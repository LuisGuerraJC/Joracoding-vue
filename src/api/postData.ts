const getData = async <T>(dir: string): Promise<T> => {
  const baseUrl: string = import.meta.env.VITE_API_URL;
  const url: string = baseUrl + "/" + dir;
  const data = await fetch(url);
 
  if( !data.ok) throw new Error("failed Fetch")
 
  const json = await data.json();

  return json;
};

export default getData;
