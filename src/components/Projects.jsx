function Projects() {
  const projects = [
    {
      title: "LeetMetric App",
      desc: "Visualize LeetCode statistics and track coding progress.",
      live: "https://abhinavvv12.github.io/LeetMetric-App/",
      github: "https://github.com/abhinavvv12",
    },
    {
      title: "Weather App",
      desc: "Responsive weather forecasting application.",
      live: "https://abhinavvv12.github.io/Weather-App/",
      github: "https://github.com/abhinavvv12",
    },
    {
      title: "To Do List",
      desc: "Task management application built using JavaScript.",
      live: "https://abhinavvv12.github.io/To-Do-List/",
      github: "https://github.com/abhinavvv12",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
            bg-[#0a0a0a]
            rounded-2xl
            p-6
            border
            border-slate-900
            hover:border-white
            hover:-translate-y-3
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-white mb-6">
              {project.desc}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                className="text-white"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-white"
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;