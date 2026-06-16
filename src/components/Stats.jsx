function Stats() {
  const stats = [
    { value: "300+", label: "DSA Problems" },
    { value: "20+", label: "Repositories" },
    { value: "3+", label: "Projects" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item.label}
            className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-2xl
            p-8
            text-center
            transition
            "
          >
            <h2 className="text-4xl  font-bold text-white">
              {item.value}
            </h2>

            <p className="mt-3 text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;
// { value: "8.5", label: "CGPA" },