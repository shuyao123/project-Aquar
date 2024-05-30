import { useLocation } from 'react-router-dom/cjs/react-router-dom'

const HeaderForPages = () => {

  let { pathname } = useLocation();

  return (
    <>
      <header style={{ display: pathname === '/' ? 'none' : 'block' }}>
        <div className="container-fluid">
          <a href="/">
            <img className="headerLogo" src="./images/logo-small.png" alt="" />
          </a>
          <div className="headerForpages">
            <a href="/">AquaR</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderForPages