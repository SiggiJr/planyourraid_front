import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {

  const navigator = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/auth/check", {
        headers: {
          "authorization": "Baerer " + localStorage.getItem("token")
        }
      })
      if (!response.ok) {
        navigator("/")
      } else {
        setAuth(true)
      }
    }
    checkToken()
  }, [])

  return ( 
    <>
    {auth &&
      <Outlet/>
    }
    </>
  );
}
export default Protected;