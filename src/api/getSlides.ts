import type Slide from "@/interfaces/slide";


export const getSlides = async (): Promise<Slide[]> => {
    const baseUrl: string = import.meta.env.VITE_API_URL;
    const data = await fetch(`${baseUrl}/comments`);
    const json = await data.json();
  
    return json as Slide[];
  };