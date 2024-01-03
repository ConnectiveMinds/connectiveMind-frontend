import Connective from "../../../Data/Connective.svg"
export function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between mt-2"> 
      <div className="">
        <img
          className=""
          src={Connective}
          alt="logo"
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <a href="/login">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300  font-bold rounded-xl tracking-wide text-xs md:text-base px-8 py-2 text-center me-2 mb-2">LOGIN</button>
        </a>
        <a href="/signup">
        <button type="button" className=" border-2 border-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-purple-600 focus:ring-purple-300 text-purple-600  font-bold tracking-wide rounded-xl text-xs md:text-base px-8 py-2 text-center me-2 mb-2">SIGN UP</button>
        </a>
      </div>
    </nav>
  );
}
