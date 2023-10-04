import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [err, setErr] = useState(null)
  const navigator = useNavigate()

const login = async (event) => {
  
  event.preventDefault()

  const form = new FormData(event.target)
  const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/auth/login", {
    method: "POST",
    body: form
  })
  if (response.ok) {
    const {token} = await response.json()
    localStorage.setItem("token", token)
    navigator("/dashboard")
  } else {
    event.target.reset()
    setErr(true)
  }
}
  return ( 
    <>
    <main className="bg-darkgreen text-white p-5 flex flex-col justify-center items-center h-screen">
      {err &&
      <p className="px-4 py-5 my-3 text-xl rounded bg-red-600"></p>
      }
      <form onSubmit={login} className="w-4/12 flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" className="text-black" placeholder="Bitte trage deine Email ein!"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Passwort:</label>
          <input type="password" name="password" className="text-black"/>
        </div>
        <input type="submit" value="Lass mich Raiden" className="cursor-pointer hover:bg-highlight" />
      </form>
      <Link to={"/register"} className="text-highlight hover:underline mt-5 text-sm">Noch kein Konto? Dann schnell registrieren!</Link>
    </main>
    </>
  );
}

export default LoginPage