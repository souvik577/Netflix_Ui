export default function Features() {
  const features = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "📺",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
      icon: "⬇️",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: "📱",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "👶",
    },
  ];

  return (
    <div className="text-white px-6 my-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1f1f3a] to-[#0d0d1f] p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{item.description}</p>
            <div className="text-4xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
