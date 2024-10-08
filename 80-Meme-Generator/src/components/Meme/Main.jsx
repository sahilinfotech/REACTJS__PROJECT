import React from "react";

export default function Main() {
  let [meme, setMeme] = React.useState({
    toptext: "",
    Bottomtext: "",
    randomImg: "https://i.imgflip.com/1w7ygt.jpg",
  });
  let [memeData, setMemeData] = React.useState([]);
  React.useEffect(function () {
    let res = fetch(`https://api.imgflip.com/get_memes`);
    res
      .then((response) => response.json())
      .then((data) => {
        setMemeData(data.data.memes);
      });
  }, []);

  // console.log(memeData);

  const clickHandleImage = () => {
    let Size = memeData.length;

    let val = Math.trunc(Math.random() * Size) + 1;
    let url = memeData[val].url;

    setMeme({
      ...meme,
      randomImg: url,
    });
  };

  const handleText = (e) => {
    const { name, value } = e.target;
    setMeme((prvText) => ({
      ...prvText,
      [name]: value,
    }));
  };
  return (
    <>
      <main className="main-section">
        <form className="from">
          <input
            type="text"
            placeholder="top text"
            className="form--input"
            name="toptext"
            value={meme.toptext}
            onChange={handleText}
          />

          <input
            type="text"
            placeholder="bottom-text"
            className="form--input"
            name="Bottomtext"
            value={meme.Bottomtext}
            onChange={handleText}
          />
        </form>
        <button className="form--button" onClick={clickHandleImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img src={meme.randomImg} alt="" className="meme--image" />
          <h2 className="meme--text top">{meme.toptext}</h2>
          <h2 className="meme--text bottom">{meme.Bottomtext}</h2>
        </div>
      </main>
    </>
  );
}
