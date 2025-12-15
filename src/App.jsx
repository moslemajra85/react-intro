import Button from "./components/Button"
import ErrorMessage from "./components/ErrorMessage";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import Rating from "./components/Rating";
import { FaSun } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";


import { useState } from "react";

const App = () => {

  const [theme, setTheme] = useState('light')



  const login = () => {

    console.log("login");
  }

  const getUsers = () => {

    console.log("Get Users");
  }


  const logout = () => {

    console.log("Logout");
  }

  return (

    <div>

      <Rating  value={1}/>
      <div className="icon">

        {

          theme === 'light' ?
            <GiMoon onClick={() => setTheme('dark')} color="#333" size={30} cursor="pointer" /> :
            <FaSun onClick={() => setTheme('light')} color="gold" size={30} cursor="pointer" />
        }



      </div>


      <div className={`container ${theme === 'light' ? '' : 'dark'}`}>

        <Button handleClick={login} color="red" bgColor="orange">
          Login
        </Button>
        <Button handleClick={getUsers} color="white" bgColor="black">
          Get Users
        </Button>
        <Button handleClick={logout} color="white" bgColor="blue">
          Logout
        </Button>

        <Button>Submit</Button>


        <ErrorMessage>

          Server Crashes

        </ErrorMessage>
        <ErrorMessage>

          We Could not Connect To Database. Try again!

        </ErrorMessage>

        <br />
        <br />


        <Counter />



        <br />
        <br />

        <ProductList />



      </div>
    </div>
  )
}

export default App