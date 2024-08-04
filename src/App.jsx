import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [animeList, setAnimeList] = useState([]);

  const getAnimeList = async () => {
    try {
      const response = await fetch("https://api.nekosapi.com/v3/images/random");
      if (!response.ok) {
        console.error(`API request failed: ${response.status}`);
        return null;
      }
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimeList();
      setAnimeList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center">
      <div className="m-3">
        <h1 className="text-center font-bold text-4xl mb-6 text-[#5f47ec]">
          Anime ShowCase!
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {animeList.map(
            (anime, index) =>
              anime.rating === "safe" && (
                <Card key={index} image_url={anime.image_url} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
