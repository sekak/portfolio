import { useState, useEffect } from "react";
import Navbar from "./scene/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scene/DotGroup";
import Landing from "./scene/Landing";
import Myskills from "./scene/Myskills";
import LineGradient from "./components/LineGradient";
import Project from "./scene/Project";
import Testimonials from "./scene/Testimonials";
import Contact from "./scene/Contact";
import Footer from "./scene/Footer";

function App() {
  const [selectPage, setSelectePage] = useState("home");
  const [isTopPage, setIsTopPage] = useState(true);
  const Media = useMediaQuery("(min-width:1060px)");
  useEffect(() => {
    const handleSize = () => {
      if (window.scrollY === 0) setIsTopPage(true);
      else if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  }, []);

  useEffect(()  => {
      // console.log(window.scrollY)
      const scroll =() => {
        console.log(selectPage)
        if(window.scrollY <= 960)
        setSelectePage('home')
        else if(window.scrollY >= 960 && window.scrollY <= 1800)
          setSelectePage('skills')
        else if(window.scrollY >= 1800 && window.scrollY <= 3200)
          setSelectePage('project')
        else if(window.scrollY >= 3200 && window.scrollY <= 4151)
          setSelectePage('testimonials')
        else if(window.scrollY >= 4151)
          setSelectePage('contact')
      }
      window.addEventListener("scroll",scroll);
      return()=> window.removeEventListener("scroll",scroll);
  },[])

  return (
    <div className="app bg-deep-blue flex flex-col">
      {/* navbar */}
      <Navbar
        setSelectePage={setSelectePage}
        selectPage={selectPage}
        isTopPage={isTopPage}
      />
      {/* landing page */}
      <div className="w-5/6 mx-auto md:h-full ">
        {Media && (
          <DotGroup selectPage={selectPage} setSelectePage={setSelectePage} />
        )}
        <Landing selectPage={selectPage} setSelectePage={setSelectePage} />
      </div>
      {/* line */}
      <LineGradient />
      {/* skills */}
      <div className="w-5/6 mx-auto md:h-full">
        <Myskills selectPage={selectPage} setSelectePage={setSelectePage} />
      </div>
      {/* project */}
      <div className="w-5/6 mx-auto ">
        <Project selectPage={selectPage} setSelectePage={setSelectePage} />
      </div>
      {/* testimonials */}
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>
      {/* Contact */}
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
