function Achievements() {

  const achievements = [
    "Solved 300+ DSA Problems",
    "Built 3+ Projects",
    "20+ GitHub Repositories",
    "Maintaining CGPA of 8.5",
  ];

  return (
    <section className="max-w-7xl mx-auto  px-6 py-24">

      <h2 className="text-5xl font-bold mb-16 text-white">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {achievements.map((item) => (

          <div
            key={item}
            className="
            bg-[#0a0a0a]
            border-zinc-700
            hover:border-white
            transition
            "
          >
            ✓ {item}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;