import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectPage, setSelectePage }) => {
    const selectCircle = `relative bg-yellow before:w-6 before:h-6 before:border-2 before:border-yellow before:absolute 
    before:rounded-full before:flex before:top-[-50%] before:left-[-50%]`
    console.log(selectPage)
  return (
    <div className="flex flex-col fixed top-[30%] right-7 gap-5">
      <AnchorLink
        className={`${
          selectPage === "home" ? selectCircle : "bg-dark-grey"
        } w-3 h-3 rounded-full `}
        href="#home"
        onClick={()=>setSelectePage('home')}
      />
      <AnchorLink
        className={`${
          selectPage === "skills" ? selectCircle : "bg-dark-grey"
        } w-3 h-3 rounded-full `}
        href="#skills"
        onClick={()=>setSelectePage('skills')}
      /> 
       <AnchorLink
      className={`${
        selectPage === "project" ? selectCircle : "bg-dark-grey"
      } w-3 h-3 rounded-full `}
      href="#project"
      onClick={()=>setSelectePage('project')}


    />  
    <AnchorLink
    className={`${
      selectPage === "testimonials" ? selectCircle : "bg-dark-grey"
    } w-3 h-3 rounded-full `}
    href="#testimonials"
    onClick={()=>setSelectePage('testimonials')}


  />
    <AnchorLink
    className={`${
      selectPage === "contact" ? selectCircle : "bg-dark-grey"
    } w-3 h-3 rounded-full `}
    href="#contact"
    onClick={()=>setSelectePage('contact')}


  />
      

    </div>
  );
};

export default DotGroup;
