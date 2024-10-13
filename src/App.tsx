import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";
import styled, { createGlobalStyle } from "styled-components";
import Signin from "./screens/signin";
import Signup from "./screens/signup";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <Home/>
        )
      },
      {
        path: "profile",
        element: (
          <Profile/>
        )
      }
    ]
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Container className="App">
      <GlobalStyle/>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default App;
