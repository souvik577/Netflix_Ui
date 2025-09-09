import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full flex items-center justify-between px-8 py-4 z-50">
      {/* Netflix Logo */}
      <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <select className="bg-black bg-opacity-60 text-white border border-gray-500 px-2 py-1 rounded">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        {/* Sign In Button */}
        <Link to="/signin"><button className="bg-red-600 px-4 py-2 rounded text-white">Sign In</button></Link>
      </div>
    </div>
  );
}
