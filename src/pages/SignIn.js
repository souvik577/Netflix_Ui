import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/netflix-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-75 p-10 rounded w-full max-w-md text-white">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-3 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
          <label>
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          {/* ✅ Link instead of <a href="#"> */}
          <Link to="/help" className="hover:underline">
            Need help?
          </Link>
        </div>

        <p className="mt-6 text-gray-400">
          New to Netflix?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign up now
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
