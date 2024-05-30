import { useEffect } from "react";

const ScrollTop = () => {
  
  useEffect(() => {
    
    function scrollYFunction(){
      let scrollTop = document.querySelector('#scroll-top')

      // console.log(window.scrollY)
      if ( window.scrollY > window.innerHeight * 2 ) {
        scrollTop.style.opacity = "1";
        scrollTop.style.transform = `translateX(0px)`;
      }else if ( window.scrollY <= window.innerHeight * 2 ) {
        scrollTop.style.opacity = "0";
        scrollTop.style.transform = `translateX(50px)`;
      }
    }

    window.addEventListener('scroll', scrollYFunction);

  },[])
  
  return (
    <div className="scroll-top" id="scroll-top" onClick={ () => {document.querySelector("#mainBlock1").scrollIntoView({ behavior: "smooth" }) }}>
      <span className="material-symbols-outlined">expand_less</span>
    </div>
  )
}

export default ScrollTop;