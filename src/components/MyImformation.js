import React from 'react';
import { Tab, Nav } from 'react-bootstrap';



const Imformation = function () {
  return (
    <>

      <div className='blackBg'>
        <div className='bgImg'></div>


        <div className="container my-imformation">
          <div className="myTitle">
            <p>參觀資訊</p>
          </div>

          <Tab.Container id="myTab" defaultActiveKey="visit-notice">
            <Nav variant="pills" className="nav-justified">
              <Nav.Item>
                <Nav.Link eventKey="visit-notice">參觀須知</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="transportation">交通方式</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="business-hours">營業時間</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {/* 參觀須知 */}
              <Tab.Pane eventKey="visit-notice">
                <div className="text-center"> {/* 20230917添加置中*/}
                  <h3 className="custom-width">
                    <h3><b>*不要觸摸生物：</b></h3><h4>請避免觸摸展示區的生物，以確保它們的安全及您的安全。<br /><br /></h4>
                    <h3><b>*不要拍打玻璃：</b></h3><h4>請不要敲打或拍打展示窗，以免嚇到海洋生物並確保觀賞的品質。<br /><br /></h4>
                    <h3><b>*禁止攜帶食物與飲料：</b></h3><h4>為了維護館內的衛生和動物的健康，請勿攜帶食物和飲料進入展示區。<br /><br /></h4>
                    <h3><b>*不要使用閃光燈：</b></h3><h4>請在拍攝照片時避免使用閃光燈，以免影響海洋生物的生活節奏。<br /><br /></h4>
                    <h3><b>*兒童安全：</b></h3><h4>若攜帶兒童參觀，請確保他們瞭解館內的規則並維持安全距離。<br /><br /></h4>
                    <h3><b>*不要吸煙：</b></h3><h4>整個海生館內禁止吸煙，以確保空氣品質和其他參觀者的舒適。<br /><br /></h4>
                    <h3><b>*緊急狀況：</b></h3><h4>如遇火警或其他緊急狀況，請遵循工作人員的指示，迅速有序地撤離館內。<br /><br /></h4>
                    <h3><b>*遵守規定：</b></h3><h4>請遵守海生館的所有規定，以確保您和其他參觀者的愉快參觀經驗。<br /><br /></h4>
                  </h3>
                </div>
              </Tab.Pane>

              {/* 交通方式 */}
              <Tab.Pane eventKey="transportation">
                <div className="text-center"> {/*20230917添加置中*/}
                  <img className="mymap " src="./images/map.png" alt="mymap" />
                  <div className="border border-0">
                    <p className="icon"></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-car-front-fill" viewBox="0 0 16 16">
                      <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                    </svg>
                    <div className="car">
                      <u>
                        國道3號-中港系統交流道-國道4號-清水端交流道下-省道臺17線-北提路內即可到達。
                      </u>
                    </div>
                  </div>
                  <div className="bus-border border-0">

                    <p className="icon"></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-bus-front-fill" viewBox="0 0 16 16">
                      <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z" />
                    </svg>
                    <div className="bus ">
                      <u >
                        搭臺鐵至清水站下-轉搭臺中市公車178、179至高美溼地站下，之後自行步行約10分鐘內即可到達。<br /><br /><br />
                      </u>
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              {/* 營業時間 */}
              <Tab.Pane eventKey="business-hours">
                <div className="my-business-hours">
                  <table className="table table-bordered" style={{ width: '80%' }}>
                    <thead>
                      <tr>
                        <th className="custom-th" style={{ backgroundColor: 'lightcyan' }}>週一~五</th>
                        <th className="custom-th">09:00-18:00</th>
                      </tr>
                    </thead>
                  </table>

                  <table className="table table-bordered" style={{ width: '80%' }}>
                    <thead>
                      <tr>
                        <th className="custom-th" style={{ backgroundColor: 'lightcyan' }}>週六~日	</th>
                        <th className="custom-th">09:00-20:00</th>
                      </tr>
                    </thead>
                  </table>
                  <p>*最終入場時間為閉館前1小時，實際營業狀況請依官方粉絲專頁公告為主。</p>
                </div>
                <img className="myimg-fluid" src="https://ws.nmmba.gov.tw/001/Upload/217/ckfile/03d85505-c448-4244-9ebe-cb723bb0d822.jpg" alt="" />

              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>



      </div>
    </>
  );
}

export default Imformation;
