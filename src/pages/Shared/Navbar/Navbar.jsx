import { Navbar, Button } from "keep-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar
      fluid={true}
      className="bg-text_color_primary/20 backdrop-blur-sm px-0 mx-0 mb-auto fixed top-0 left-0 w-full z-50 text-white "
    >
      <Navbar.Container className="flex items-center justify-between mx-0 max-w-7xl  px-0 lg:px-5">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand customClass="gap-0">
            <div>
              <h1 className=" md:text-[32px] text-2xl font-cinzel font-black">
                BISTRO BOSS
              </h1>
              <p className="-mt-3 font-bold text-base md:text-2xl">
                Restaurant
              </p>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse
            collapseType="sidebar"
            className="absolute top-0 right-0 h-full bg-white"
          >
            <Navbar.Container
              tag="ul"
              className="flex flex-col gap-5   z-50 h-full"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contactUs">CONTACT us</NavLink>
              <NavLink to="/dashboard">DASHBOARD</NavLink>
              <NavLink to="/ourMenu">Our Menu</NavLink>
              <NavLink to="/ourShop">Our Shop</NavLink>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-5  items-center py-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contactUs">CONTACT us</NavLink>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink to="/ourMenu">Our Menu</NavLink>
            <NavLink to="/ourShop">Our Shop</NavLink>
          </Navbar.Container>
          <div className="lg:flex hidden">
            <Button size="md" type="default">
              Login
            </Button>
          </div>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default Nav;
