export default function Footer() {
  return (
    <footer className="text-gray-400 px-6 py-12 max-w-6xl mx-auto">
      {/* Email Section */}
      <div className="text-center mb-10">
        <p className="text-white mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="w-80 px-4 py-3 bg-black border border-gray-600 rounded-l"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r font-semibold">
            Get Started →
          </button>
        </div>
      </div>

      {/* Links */}
      <p className="mb-6">
        Questions? Call{" "}
        <a href="tel:000-800-919-1743" className="underline">
          000-800-919-1743
        </a>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Centre</a>
        <a href="#" className="hover:underline">Account</a>
        <a href="#" className="hover:underline">Media Centre</a>
        <a href="#" className="hover:underline">Investor Relations</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Ways to Watch</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Cookie Preferences</a>
        <a href="#" className="hover:underline">Corporate Information</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Speed Test</a>
        <a href="#" className="hover:underline">Legal Notices</a>
        <a href="#" className="hover:underline">Only on Netflix</a>
      </div>

      {/* Language Dropdown */}
      <div className="mb-6">
        <select className="bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>

      {/* Footer Note */}
      <p className="text-sm">Netflix India</p>
      <p className="text-xs mt-2">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="#" className="underline">Learn more.</a>
      </p>
    </footer>
  );
}
