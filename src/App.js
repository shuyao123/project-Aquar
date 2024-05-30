import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
//路由元件匯入
// import Home from './components/Home';
import AboutUs from './components/AboutUs';
import AnimalStar from './components/AnimalStar';
import MyImformation from './components/MyImformation';
import Question from './components/Question';
import Header from './components/Header';
import HeaderForPages from './components/HeaderForPages';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MouseLight from './components/MouseLight';

//樣式匯入
import './assets/all.scss';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
        <Header />
          <HeaderForPages />

          <Switch>
            {/* 只要網址是"/"，就由Home組件負責 */}
            {/* 最後面加入【exact】限定網址列要完全符合的路徑才會轉跳 */}
            {/* 只要網址是"/about"，就由About組件負責 */}
            {/* 【:who】位置可以填入任意內容，來連結至該網址，而之後的運用方法可參考About.js檔 */}
            {/* <Route path="/" component={Home} exact/>  */}
            <Route path="/aboutus" component={AboutUs} exact/> 
            <Route path="/animalstar" component={AnimalStar} exact/> 
            <Route path="/myImformation" component={MyImformation} exact/> 
            <Route path="/question" component={Question} exact/> 
            {/* <Route path="/header" component={Header} exact/>  */}
            {/* <Route path="/headerforpages" component={HeaderForPages} exact/>  */}
            </Switch>
            <Sidebar />
          <Footer link1="回到首頁" link2="預約訂票" link3="館場導覽" link4="聯絡我們" link5="常見問答"
              linkHref1="/" linkHref2="/" linkHref3="/" linkHref4="/" linkHref5="/"
          />
          <MouseLight />


        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
