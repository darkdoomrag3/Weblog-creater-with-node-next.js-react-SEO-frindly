import { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Router from 'next/router'
import { signout, isAuth } from '../actions/auth'



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            {!isAuth() && <React.Fragment>
              <NavItem>
                <Link href="/signin">
                  <NavLink>Signin</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signup">
                  <NavLink>Signup</NavLink>
                </Link>
              </NavItem>





            </React.Fragment>}





            {isAuth() && isAuth().role === 0 &&

              (<NavItem>
                <Link href='/user'>
                  <NavLink >{`${isAuth().name}s Dashboard`}</NavLink>
                </Link>
              </NavItem>)}



            {isAuth() && isAuth().role === 1 &&

              (<NavItem>
                <Link href='/admin'>
                  <NavLink >{`${isAuth().name}s Dashboard`}</NavLink>
                </Link>
              </NavItem>)}

            {isAuth() && (<NavItem>

              <NavLink style={{ cursor: 'pointer' }} onClick={() => sigout(() => Router.replace(`/signin`))} >Signout</NavLink>

            </NavItem>)}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
