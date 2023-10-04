import { Link } from "react-router-dom";

const RegisterPage = () => {

const register = async (event) => {}

  return ( 
    <>
    <main className="bg-darkgreen text-white p-5 flex flex-col justify-center items-center h-screen">
      <form onSubmit={register} className="w-4/12 flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" className="text-black" placeholder="Bitte trage deine Email ein!"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Passwort:</label>
          <input type="password" name="password" className="text-black"/>
        </div>
        <input type="submit" value="Register" className="cursor-pointer hover:bg-highlight" />
      </form>
      <Link to={"/login"} className="text-highlight hover:underline mt-5 text-sm">Du hast schon ein Konto? Dann logge dich hier ein!</Link>
    </main>
    </>
  );
}

export default RegisterPage