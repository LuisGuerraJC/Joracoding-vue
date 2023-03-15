import type devService from "@/interfaces/devService";

export const getDevData = async (): Promise<devService[]> => {
  const baseUrl: string = import.meta.env.VITE_API_URL;
  const data = await fetch(`${baseUrl}/devServices`);
  if( !data.ok) throw new Error("failed Fetch")

  const json = await data.json();

  return json as devService[];
};
