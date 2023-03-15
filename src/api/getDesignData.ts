import type designService from "@/interfaces/designService";

export const getDesignData = async (): Promise<designService[]> => {
    const baseUrl: string = import.meta.env.VITE_API_URL;
    const data = await fetch(`${baseUrl}/designServices`);
    if( !data.ok) throw new Error("failed Fetch")

    const json = await data.json();
    
    return json as designService[];
  };
  