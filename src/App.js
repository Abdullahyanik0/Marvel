import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import axios from "axios";

const hash = "bd0722d5750b6362d5ba0212ca36726b";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`
      );
      setItems(result.data.data.results);
      setLoading(false)
    };
    fetch();
  }, []);
  return (
    <div className="bg-black text-white">
      <Header />
      <Main items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
