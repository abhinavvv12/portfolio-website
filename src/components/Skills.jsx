function Skills() {

  const categories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL"]
    },

    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind", "React"]
    },

    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },

    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },

    {
      title: "Core CS",
      skills: ["DSA", "DBMS", "OS", "CN", "OOP"]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >

      <h2 className="text-5xl font-bold mb-16 text-white">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {categories.map((category) => (

          <div
            key={category.title}
            className="
            bg-[#0a0a0a]
            border
            border-zinc-700
            rounded-2xl
            p-8
            "
          >

            <h3 className="text-2xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-black
                  border
                  border-zinc-700
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;