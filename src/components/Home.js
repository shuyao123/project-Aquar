import Opening from './Opening';
// import Header from './Header';
import HomeMain from './HomeMain';
import Marquee from './Marquee';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
import ScrollTop from './ScrollTop';
// import MouseLight from './MouseLight';
import FishAni from './FishAni';

// import HeaderForPages from './HeaderForPages'

const Home = () => {

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="position-relative">
      <Opening />
      {/* <Header /> */}
      {/* <HeaderForPages /> */}
      <HomeMain />
      <Marquee />
      {/* <Footer link1="回到首頁" link2="預約訂票" link3="館場導覽" link4="聯絡我們" link5="常見問答"
              linkHref1="/" linkHref2="/" linkHref3="/" linkHref4="/" linkHref5="/"
      /> */}
      {/* <Sidebar /> */}
      <ScrollTop />
      {/* <MouseLight /> */}
      <FishAni />
    </div>
  )
}
export default Home;