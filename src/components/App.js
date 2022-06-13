// create your App component here
import { useState, useEffect } from "react";
function App() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.message);
      });
  }, []);
  //   let image = img;
  //   console.log(image);
  return (
    <>
      <p>{img.length > 0 ? <img alt="A Random Dog" src={img}></img> : "Loading..."} </p>
    </>
  );
}
export default App;
