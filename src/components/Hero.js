export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3e93a0a2-730d-45d7-8802-7c21a6ec8a1b/0c8a5091-99c1-4f17-b463-2c35a272eec8/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="Netflix background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 -z-10"></div>

      {/* Content */}
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-xl mb-4">Starts at ₹149. Cancel at any time.</p>
        <p className="mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-96 px-4 py-3 rounded mb-4 sm:mb-0 sm:mr-2 text-black"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
