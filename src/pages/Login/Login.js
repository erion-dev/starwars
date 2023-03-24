import { Button, Container, Input, VStack, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import NavLink from "../../components/Card/NavLink";
import { useUserContext } from "../../UserContextProvider";
import "./login.css";

function Login() {
  const userCtx = useUserContext();
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userCtx.setUser(formValues);
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password < 4) {
      errors.password = "Password must be more than 4 characters ";
    }
    return errors;
  };
  return (
    <Container
      m="auto"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      bg="black"
      h="300px"
      w="400px"
      mt="30px"
    >
      <chakra.form onSubmit={handleSubmit}>
        <Input
          h="50px"
          w="300px"
          alignSelf="center"
          mt="5px"
          color="black"
          fontSize="15px"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <Container className="error_msg">{formErrors.username}</Container>
        <Input
          h="50px"
          w="300px"
          alignSelf="center"
          mt="15px"
          color="black"
          fontSize="15px"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Container className="error_msg">{formErrors.password}</Container>
        <VStack>
          <Button
            fontSize="20px"
            alignSelf="center"
            mt="15px"
            width="310px"
            height="50px"
            transitionDuration="0.4s"
            _hover={{
              bg: "darkgrey",
              color: "white",
            }}
            type="submit"
          >
            Login
          </Button>
          <NavLink
            fontSize="20p x"
            pl="200px"
            color="white"
            to="/signup"
            transitionDuration="0.4s"
            textDecoration="none"
          >
            Sign Up?
          </NavLink>
        </VStack>
      </chakra.form>
    </Container>
  );
}

export default Login;
