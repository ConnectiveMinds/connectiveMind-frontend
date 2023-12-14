export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className="flex items-center">
        <img
          className="h-16"
          src="src/Data/Connective 1.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="/login">
          <button className="text-purple-500">Sign In</button>
        </a>
        <a href="/signup">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Sign Up</button>
        </a>
      </div>
    </nav>
  );
}
