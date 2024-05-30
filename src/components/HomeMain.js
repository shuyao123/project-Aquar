import { useEffect } from 'react';
import { listenHomeScrollYFunction, resizeFunction } from '../Animation';

const HomeMain = () => {

  //視窗尺寸變更
  window.addEventListener("resize", resizeFunction);

  
  useEffect(() => {
    //視窗滾動
    window.addEventListener("scroll", listenHomeScrollYFunction);
  },[]);


  return (
    <main>
      <div id="mainBlock1" className="mainBlock-1">
        <div className="bgMask"></div>
        <div className="container">
          <div className="subtitle">
            <p>在這片水的世界中</p>
            <p>靜謐如詩，魚兒如詞，我們是這水中故事的閱讀者</p>
          </div>

          <div className="toNextBlock" onClick={ () => {document.querySelector("#mainBlock2").scrollIntoView({ behavior: "smooth" }) }}>
            <span className="material-symbols-outlined expandMore">expand_more</span>
          </div>
        </div>
      </div>

      <div id="mainBlock2" className="mainBlock-2">
        <div className="container">
          <div className="title">
            <p>計畫 ‧ 探索 ‧ 預約</p>
            <p>於水族館的完美一日</p>
          </div>

          <div className="Block2CardsGroup">
            <a href="/" id="block2Card1" className="Block2Card Block2Card-1">
              <div className="insideBorder">
                <p>營業時間
                  <span className="material-symbols-outlined">arrow_right</span>
                </p>
                <div className="cardMidLine"></div>
                <p>Business Hours</p>
              </div>
              <div className="hoverBlock"></div>
            </a>
            <a href="/" id="block2Card2" className="Block2Card Block2Card-2">
              <div className="insideBorder">
                <p>館內資訊
                  <span className="material-symbols-outlined">arrow_right</span>
                </p>
                <div className="cardMidLine"></div>
                <p>Information</p>
              </div>
              <div className="hoverBlock"></div>
            </a>
            <a href="/" id="block2Card3" className="Block2Card Block2Card-3">
              <div className="insideBorder">
                <p>預約訂票
                  <span className="material-symbols-outlined">arrow_right</span>
                </p>
                <div className="cardMidLine"></div>
                <p>Ticket</p>
              </div>
              <div className="hoverBlock"></div>
            </a>
          </div>
          <div className="toNextBlock" onClick={ () => {document.querySelector("#mainBlock3").scrollIntoView({ behavior: "smooth" }) }}>
            <span className="material-symbols-outlined expandMore">expand_more</span>
          </div>
        </div>
      </div>


      <div id="mainBlock3" className="mainBlock-3">
        <div className="container">

          <h2 id="mainBlock3TitleBlock" className="mainBlock3TitleBlock">
            <p>最新消息</p>
            <p>LATEST NEWS</p>
          </h2>
          
          <div id="block3CardsGroup" className="block3CardsGroup">


            <a href="/" id="block3Card1" className="block3Card block3Card-1 block3Card-1-rwd">
              <div className="textMask">
                <p>2023.01.01</p>
                <p>寫Code寫到眼冒金星嗎? 快來AquaR愛護你的眼睛</p>
              </div>
              <img src="https://images.unsplash.com/photo-1641302109126-886918769611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            </a>

            <a href="/" id="block3Card2" className="block3Card block3Card-2">
              <div className="textMask">
                <p>2023.01.01</p>
                <p>寫Code寫到眼冒金星嗎? 快來AquaR愛護你的眼睛</p>
              </div>
              <img src="https://images.unsplash.com/photo-1588303249074-67ce2ce2d3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
            </a>

            <a href="/" id="block3Card3" className="block3Card block3Card-3">
              <div className="textMask">
                <p>2023.01.01</p>
                <p>寫Code寫到眼冒金星嗎? 快來AquaR愛護你的眼睛</p>
              </div>
              <img src="https://images.unsplash.com/photo-1573378617548-c82dd01a3fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="" />
            </a>

          </div>
          <a href="/" className="seeMoreBtn">
            <div className="btnDeco">
              <span className="material-symbols-outlined seeMoreArrow">
                chevron_right
              </span>
            </div>
            <span>See All News</span>
          </a>


        </div>
      </div>





      <div id="mainBlock4" className="mainBlock-4">
          <div className="container">

            <div id="block4TextBlock1" className="block4TextBlock-1">
              <p>配合動物自然生態習性
                <br />館內特定區域非全時段開放
              </p>
              <p>詳情請參閱現場公告或洽現場工作人員
                <br />敬請知悉並配合</p>
            </div>

            <div id="block4TextBlock2" className="block4TextBlock-2">
              <p className="block4TextBlock">
                <span>海洋夢——</span><br />
                　碧波深處珍奇珠，<br />
                　七彩倩影舞輝璩。<br />
                　海底王國真寶庫，<br />
                　潮音引領夢幻途。
              </p>
            </div>

          </div>
      </div>

    </main>
  )
}

export default HomeMain;