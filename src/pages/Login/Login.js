import { Button, Container, Input, VStack, chakra } from "@chakra-ui/react";
import React from "react";
import NavLink from "../../components/Card/NavLink";
import { useUserContext } from "../../UserContextProvider";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

function Login() {
  const userCtx = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    userCtx.setUser(data);
  });

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
      <chakra.form onSubmit={onSubmit}>
        <Input
          h="50px"
          w="300px"
          alignSelf="center"
          mt="5px"
          color="black"
          fontSize="15px"
          type="text"
          name="username"
          placeholder="Username"
          {...register("username", {
            required: { value: true, message: "This is Required" },
          })}
        />
        {<div className="error_msg">{errors.username}</div>}
        <Input
          h="50px"
          w="300px"
          alignSelf="center"
          mt="15px"
          color="black"
          fontSize="15px"
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", {
            required: { value: 5, message: "Must be more than 5" },
          })}
        />
        {<div className="error_msg">{errors.password}</div>}
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
