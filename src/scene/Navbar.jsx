import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Link = ({ page, selectPage, setSelectePage }) => {
  const tolowerCase = page.toLowerCase();
  console.log(selectPage)

  return (
    <AnchorLink
      
      className={`${
        selectPage === tolowerCase ? "text-yellow" : ""
      }  hover:text-yellow transition duration-100  `}
      href={`#${tolowerCase}`}
      onClick={()=>setSelectePage(tolowerCase)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectPage, setSelectePage, isTopPage }) => {
  const [openToggleMenu, setOpenToggleMenu] = useState(false);
  const Media = useMediaQuery("(min-width: 768px)");
  const navbarColor = isTopPage ? "" : "bg-red";
  return (
    <nav
      className={`${navbarColor} d-flex align-items-center w-full top-0  py-3 fixed z-40`}
    >
      <div className="w-5/6 flex justify-between items-center mx-auto">
        <h4>JEO</h4>
        {Media ? (
          <div className="flex justify-between gap-16 text-sm font-opensans font-semibold ">
            <Link
            page="Home"
              selectPage={selectPage}
              setSelectePage={setSelectePage}
            />
            <Link
            page="Skills"
              selectPage={selectPage}
              setSelectePage={setSelectePage}
            />
            <Link
            page="Project"
              selectPage={selectPage}
              setSelectePage={setSelectePage}
            />
            <Link
            page="Testimonials"
              selectPage={selectPage}
              setSelectePage={setSelectePage}
            />
            <Link
            page="Contact"
              selectPage={selectPage}
              setSelectePage={setSelectePage}
            />
          </div>
        ) : (
          <div>
            <button
              className="bg-red rounded-full p-2"
              onClick={() => setOpenToggleMenu(!openToggleMenu)}
            >
              <img alt="" src="../assets/menu-icon.svg" />
            </button>
          </div>
        )}
        {/*toggole menu*/}
        {!Media && openToggleMenu && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setOpenToggleMenu(!openToggleMenu)}>
                <img alt="" src="../assets/close-icon.svg" />
              </button>
            </div>
            <div className="flex flex-col gap-10 items-center text-2xl text-deep-blue">
              <Link
              page="Home"
                selectPage={selectPage}
                setSelectePage={setSelectePage}
              />
              <Link
              page="About"
                selectPage={selectPage}
                setSelectePage={setSelectePage}
              />
              <Link
              page="Contact"
                selectPage={selectPage}
                setSelectePage={setSelectePage}
              />
              <Link
              page="Testimonials"
                selectPage={selectPage}
                setSelectePage={setSelectePage}
              />
              <Link
              page="Contact"
                selectPage={selectPage}
                setSelectePage={setSelectePage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
