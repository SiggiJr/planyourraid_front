import { Link } from "react-router-dom";

const HomePage = () => {

  return ( 
    <main>
      <section className='bg-[url(../img/hero.jpg)] h-screen bg-no-repeat bg-cover relative'>
        <Link to="/login" className="bg-darkgreen text-white px-5 py-2 hover:bg-highlight rounded-xl mt-5 absolute right-6 top-5">Let's Raid</Link>
        <div className="uppercase text-4xl text-white font-bold leading-loose absolute left-7 bottom-8">
          <h1 className="w-52 text-center">Plan your <span className="text-8xl text-highlight">Raid</span></h1>
        </div>
      </section>
      <section className="bg-darkgreen h-screen flex gap-10">
        <img className="w-80 object-cover rounded-[45%] p-10" src="./img/archer.jpg" alt="Frau mit Bogen" />
        <div className="mt-20 ml-20 w-[35rem] text-white leading-loose" >
          <h3 className="uppercase text-4xl font-bold text-white w-72 leading-loose">Choose your <span className="text-8xl text-highlight">Group</span></h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate earum adipisci minus delectus qui recusandae natus id inventore asperiores, sequi pariatur et quaerat accusamus ut a error porro nihil. Sapiente architecto quam nemo unde earum excepturi voluptates ab dolorum nostrum quaerat, alias deleniti. Ratione quis nemo libero voluptas autem eaque.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;