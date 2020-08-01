import React, { useState } from 'react';

import { APP_NAME } from '../config';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
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

                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
