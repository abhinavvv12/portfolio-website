import profile from "../assets/abhinav.JPG";

function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center">

      <div
        className="
        max-w-7xl
        mx-auto
        w-full
        px-6
        pt-24
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-14
        items-center
        "
      >

        {/* LEFT */}

        <div className="text-center lg:text-left">

          <p
            className="
            uppercase
            tracking-[5px]
            text-zinc-500
            text-sm
            mb-4
            "
          >
            Full Stack Developer
          </p>

          <h1
            className="
            font-bold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            "
          >
            Hi,
            I'm

            <span className="text-white">
              {" "}Abhinav
            </span>
          </h1>

          <p
            className="
            text-zinc-400
            mt-8
            text-base
            sm:text-lg
            leading-8
            max-w-xl
            mx-auto
            lg:mx-0
            "
          >
            Passionate about building modern web applications,
            solving real-world problems, and creating meaningful
            digital experiences.
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-10
            justify-center
            lg:justify-start
            "
          >

            <a
              href="#projects"
              className="
              px-8
              py-4
              bg-white
              text-black
              font-semibold
              rounded-xl
              text-center
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
              text-center
              "
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div
            className="
            overflow-hidden
            rounded-full
            border
            border-zinc-800

            w-[220px]
            h-[220px]

            sm:w-[280px]
            sm:h-[280px]

            md:w-[350px]
            md:h-[350px]

            lg:w-[450px]
            lg:h-[450px]
            "
          >

            <img
              src={profile}
              alt="Profile"
              className="
              w-full
              h-full
              object-cover
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;