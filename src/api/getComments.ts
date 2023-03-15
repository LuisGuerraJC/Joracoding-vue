import type comment from "@/interfaces/comment";


export const getComments = async (): Promise<comment[]> => {
    const baseUrl: string = import.meta.env.VITE_API_URL;
    const data = await fetch(`${baseUrl}/comments`);
    if( !data.ok) throw new Error("failed Fetch")

    const json = await data.json();
  
    return json as comment[];
  };

