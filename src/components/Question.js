import React, { useState, useEffect } from 'react';



const Question = function () {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  const openAccordionByIndex = (index) => {
    setAccordionOpen(index);
  };

  const closeAccordion = () => {
    setAccordionOpen(null);
  };

  const handleAccordionClick = (index) => {
    if (accordionOpen === index) {
      closeAccordion();
    } else {
      openAccordionByIndex(index);
    }
  };

  const handleSearchClick = () => {
    const paragraphs = document.querySelectorAll('.accordion-item ');

    let found = false;

    paragraphs.forEach((paragraph, index) => {
      if (paragraph.textContent.includes(searchKeyword)) {
        openAccordionByIndex(index + 1);
        found = true;
      }
    });

    if (!found) {
      closeAccordion();
    }
  };

// 使用 onKeyDown 事件監聽 Enter 鍵按下事件
  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  useEffect(() => {
    closeAccordion();
  }, [searchKeyword]);
  
  const accordionItemStyle = {
    marginBottom: '30px',
  };

  return (
    <>
      <div className='blackBg'>
        <div className='bgImg'></div>
      <div className="container myquestion">
        <div className="myTitle">
          <p>常見問答</p>
        </div>

        <div className="myColumn">
          <div className="yao-search-box" >
            <input
              type="text"
              id="search-input"
              placeholder="輸入關鍵字..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <button onClick={handleSearchClick}>搜尋</button>
          </div>
          <div className="border border-0">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(1)}
                  >
                    <h5> Q: 平假日營業時間？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseOne"
                  className={`accordion-collapse collapse ${accordionOpen === 1 ? 'show' : ''}`}
                >
                  <p>A: 營業時間: 週一~週日 10:00-20:00</p>
                </div>
              </div>

              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(2)}
                  >
                    <h5>Q:能否帶寵物入館？請問導盲犬可否進館？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className={`accordion-collapse collapse ${accordionOpen === 2 ? 'show' : ''}`}
                >
                  <p>
                  <br/>A:為維護館內的參觀品質，請勿攜帶寵物入館。
                  <br/>由於寵物禁止入館，如有帶寵物來館的民眾，建議可先跟AquaR鄰近的寵物旅館預約寄放。
                  <br/>另外，為顧及視障朋友們的參觀權益與安全，導盲犬於執勤中可陪伴入館參觀。
                  </p>
                </div>
              </div>

              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(3)}
                  >
                    <h5>Q:是否有接駁車？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseThree"
                  className={`accordion-collapse collapse ${accordionOpen === 3 ? 'show' : ''}`}
                >
                  <p>A:無提供接駁車之服務</p>
                </div>
              </div>

              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(4)}
                  >
                    <h5>Q:有置物櫃或行李托放服務嗎？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseFour"
                  className={`accordion-collapse collapse ${accordionOpen === 4 ? 'show' : ''}`}
                >
                  <p>A:館內並未設有置物櫃或行李托放之服務</p>
                </div>
              </div>

              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(5)}
                  >
                    <h5>Q:請問館內可否攝錄影？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseFive"
                  className={`accordion-collapse collapse ${accordionOpen === 5 ? 'show' : ''}`}
                >
                  <p>A:※室內拍攝注意事項
                    <br /><br/>1.館內開放一般性參觀留念拍照，限個人非商業目的使用。
                    <br /><br/>2.展廳內請勿錄影、使用閃光燈、腳架、自拍器或其他輔助設備。
                    <br /><br/>3.館內不開放婚紗、藝術照、扮裝（Cosplay）、攝影教學或其他影響安全及他人觀賞權益之拍攝。
                    <br /><br/>4.請尊重智慧財產權，勿拍攝未開放拍照之區域或展品。
                    <br /><br/>5.拍照時請勿越線或影響他人觀賞權益，並請留意人身及展品安全、行為不得違背公序良俗與法令規章。
                    <br /><br/>6.本館工作人員無提供拍照服務，不便之處敬請見諒。
                  </p>
                </div>
              </div>

              <div className="accordion-item" style={accordionItemStyle}>
                <div className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionClick(6)}
                  >
                    <h5>Q:有提供嬰兒車或輪椅嗎？</h5>
                  </button>
                </div>
                <div
                  id="panelsStayOpen-collapseSix"
                  className={`accordion-collapse collapse ${accordionOpen === 6 ? 'show' : ''}`}
                >
                  <p>A:館內提供輪椅及嬰兒車租借(借用方式請洽服務台)。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
       </div>
    </>
  );
};

export default Question;
