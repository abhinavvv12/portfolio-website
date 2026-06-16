function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-8">
        Let's Connect
      </h2>

      <p className="text-slate-400 mb-10">
        Open to internships, collaborations and
        exciting opportunities.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">

        <a
          href="mailto:abhinav.r1296@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Email
        </a>

        <a
          href="https://github.com/abhinavvv12"
          target="_blank"
          className="border border-white px-6 py-3 rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="border border-white px-6 py-3 rounded-lg"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}

export default Contact;