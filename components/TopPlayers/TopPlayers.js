import React from "react";
import topPlayerStyle from "../../styles/topPlayers.module.css";
function TopPlayers() {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className={topPlayerStyle.heading}>TOP PLAYERS</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={topPlayerStyle.topPlayersCard}>
              <img src="https://sportvot.com/playerCardBg.png?imwidth=1920" alt="playerCardBg" />
              <div className={topPlayerStyle.topPlayerImg}>
                <img className={topPlayerStyle.topPlayerOne} src="https://d25s2jqw4qdf1e.cloudfront.net/d19cfe71-7234-46bd-8c98-f92a63c2f3b7.webp?imwidth=1920" alt="playerImg" />
                <h6>Akash Gaikwad</h6>
                <div className={topPlayerStyle.redCircle}>
                  <img src="https://sportvot.com/playerCardRankBg.png?imwidth=1920" alt="redCircle" />
                </div>
              </div>
              </div>
              </div>
            <div className="col">
             <div className={topPlayerStyle.topPlayersCard}>
             <img src="https://sportvot.com/playerCardBg.png?imwidth=1920" alt="playerCardBg" />
             <div className={topPlayerStyle.topPlayerImg}>
                <img  className={topPlayerStyle.topPlayerOne} src="https://d25s2jqw4qdf1e.cloudfront.net/d19cfe71-7234-46bd-8c98-f92a63c2f3b7.webp?imwidth=1920" alt="playerImg" />
                <h6>Akash Gaikwad</h6>
                <div className={topPlayerStyle.redCircle}>
                  <img src="https://sportvot.com/playerCardRankBg.png?imwidth=1920" alt="redCircle" />
                </div>
              </div>
              </div>
              </div>
            <div className="col col3">
            <div className={topPlayerStyle.topPlayersCard}>
            <img src="https://sportvot.com/playerCardBg.png?imwidth=1920" alt="playerCardBg" />
            <div className={topPlayerStyle.topPlayerImg}>
                <img  className={topPlayerStyle.topPlayerOne} src="https://d25s2jqw4qdf1e.cloudfront.net/d19cfe71-7234-46bd-8c98-f92a63c2f3b7.webp?imwidth=1920" alt="playerImg" />
                <h6>Akash Gaikwad</h6>
                <div className={topPlayerStyle.redCircle}>
                  <img src="https://sportvot.com/playerCardRankBg.png?imwidth=1920" alt="redCircle" />
                </div>
              </div>
              </div>
              </div>
            <div className="col col4">
             <div className={topPlayerStyle.topPlayersCard}>
             <img  src="https://sportvot.com/playerCardBg.png?imwidth=1920" alt="playerCardBg" />
             <div className={topPlayerStyle.topPlayerImg}>
                <img  className={topPlayerStyle.topPlayerOne} src="https://d25s2jqw4qdf1e.cloudfront.net/d19cfe71-7234-46bd-8c98-f92a63c2f3b7.webp?imwidth=1920" alt="playerImg" />
                <h6>Akash Gaikwad</h6>
                <div className={topPlayerStyle.redCircle}>
                  <img src="https://sportvot.com/playerCardRankBg.png?imwidth=1920" alt="redCircle" />
                </div>
              </div>
              </div>
            </div>
            <div className="col col5">
            <div className={topPlayerStyle.topPlayersCard}>
              <img src="https://sportvot.com/playerCardBg.png?imwidth=1920" alt="playerCardBg" />
              <div className={topPlayerStyle.topPlayerImg}>
                <img  className={topPlayerStyle.topPlayerOne} src="https://d25s2jqw4qdf1e.cloudfront.net/d19cfe71-7234-46bd-8c98-f92a63c2f3b7.webp?imwidth=1920" alt="playerImg" />
                <h6>Akash Gaikwad</h6>
                <div className={topPlayerStyle.redCircle}>
                  <img src="https://sportvot.com/playerCardRankBg.png?imwidth=1920" alt="redCircle" />
                </div>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPlayers;
