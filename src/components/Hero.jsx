import profile from "../assets/abhinav.JPG";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT IMAGE */}

          <div className="flex justify-center">
            <div
              className="
              overflow-hidden
              rounded-full
              border-4
              border-zinc-800
              shadow-2xl

              w-[250px]
              h-[250px]

              sm:w-[320px]
              sm:h-[320px]

              md:w-[380px]
              md:h-[380px]

              lg:w-[450px]
              lg:h-[450px]
              "
            >
              <img
                src={profile}
                alt="Abhinav"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div>
            <p
              className="
              uppercase
              tracking-[6px]
              text-zinc-500
              text-sm
              mb-6
              "
            >
              Full Stack Developer
            </p>

            <h1
              className="
              font-bold
              leading-tight
              text-5xl
              sm:text-6xl
              md:text-7xl
              "
            >
              Hi, I'm
              <br />
              <span className="text-white">
                Abhinav
              </span>
            </h1>

            <p
              className="
              text-zinc-400
              mt-8
              text-lg
              leading-9
              max-w-xl
              "
            >
              Passionate about building modern web applications,
              solving real-world problems, and creating meaningful
              digital experiences.
            </p>

            <div className="flex gap-5 mt-10">
              <a
                href="#projects"
                className="
                px-8
                py-4
                bg-white
                text-black
                rounded-xl
                font-semibold
                hover:scale-105
                transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                px-8
                py-4
                border
                border-zinc-700
                rounded-xl
                hover:bg-zinc-900
                transition
                "
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