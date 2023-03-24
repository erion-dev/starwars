import { chakra } from "@chakra-ui/react";
import { NavLink as ReactNavLink } from "react-router-dom";

const ChakraNextLink = chakra(ReactNavLink);

const NavLink = ({ children, ...rest }) => (
  <ChakraNextLink {...rest}>{children}</ChakraNextLink>
);

export default NavLink;
