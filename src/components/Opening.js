import { useEffect } from "react";

const Opening = () => {
  
  document.body.style.position = "fixed"
  document.body.style.width = "100%"
  document.body.style.height = "100%"

  useEffect(() => {   
    setTimeout(() => {
      document.querySelector("#opening").classList.add("fade-out")
    }, 5000)
    setTimeout(() => {
      document.body.style.position = "static"
      document.body.style.width = "auto"
      document.body.style.height = "auto"
      document.querySelector(".opening").style.display = "none"
    }, 6000)
  },[])

  return (
    <div id="opening" className="opening">
      <div className="word-locate">
        <span className="slide-in-blurred-left">A</span>
        <span className="slide-in-blurred-tl">q</span>
        <span className="slide-in-blurred-top">u</span>
        <span className="slide-in-blurred-tr">a</span>
        <span className="slide-in-blurred-right">R</span>
      </div>
      <div className="loadLine"></div>
    </div>
  )
}

export default Opening;