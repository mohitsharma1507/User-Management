import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials.email, credentials.password, navigate));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
