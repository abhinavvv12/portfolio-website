import profile from "../assets/abhinav.JPG";

function Hero() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />

              <div
                className="
            relative
            overflow-hidden
            rounded-full
            border-4
            border-green-500/20
            w-[240px]
            h-[240px]
            sm:w-[300px]
            sm:h-[300px]
            md:w-[360px]
            md:h-[360px]
            "
              >
                <img
                  src={profile}
                  alt="Abhinav"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-white mb-8">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <span className="uppercase tracking-[4px] text-black text-xs">
                Full Stack Developer
              </span>
            </div>

            <h1 className="font-bold leading-none">
              <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
                Hi, I'm
              </span>

              <span className="block text-5xl sm:text-6xl md:text-7xl text-white mt-2">
                Abhinav
              </span>
            </h1>

            <p className="text-zinc-400 mt-8 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Passionate about building modern web applications,
              solving real-world problems, and creating meaningful
              digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-zinc-700 rounded-xl hover:border-green-400 hover:text-green-400 transition"
              >
                Contact Me
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;