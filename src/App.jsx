export default function PortfolioTemplate() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-800 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Jeevasruthi Y
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("achievements")}>
            Achievements
          </button>

          <button onClick={() => scrollToSection("certifications")}>
            Certifications
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24">
        <div className="max-w-5xl">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
            Hi, I'm
            <br />
            Jeevasruthi Y
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-slate-600">
            Passionate software engineer.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="https://github.com/JEEVASRUTHIY"
              target="_blank"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
            >
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/Jeevasruthi/"
              target="_blank"
              className="border border-slate-300 bg-white px-8 py-4 rounded-2xl font-semibold"
            >
              LeetCode
            </a>

            <a
              href="https://www.linkedin.com/in/jeevasruthi-yuvaraj-8b2529317/"
              target="_blank"
              className="border border-slate-300 bg-white px-8 py-4 rounded-2xl font-semibold"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-20">

        <div className="bg-white rounded-3xl p-10 shadow-xl">

          <h2 className="text-4xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-slate-600 text-lg leading-8">
            I enjoy developing real-world applications and continuously improving
            my skills through projects, hackathons, and hands-on learning.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Languages
            </h3>

            <div className="space-y-3 text-lg">
              <p>Java</p>
              <p>Python</p>
              <p> HTML</p>
              <p> CSS</p>
              <p>JavaScript</p>
              <p> C++ </p>
              <p>C (Basic)</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Backend & Database
            </h3>

            <div className="space-y-3 text-lg">
              <p>Spring Boot</p>
              <p>REST APIs</p>
              <p>MySQL</p>
              <p>CRUD Operations</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Tools
            </h3>

            <div className="space-y-3 text-lg">
              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>Figma</p>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-10 rounded-3xl shadow-xl">

            <p className="text-blue-600 font-semibold mb-3">
              Spring Boot
            </p>

            <h3 className="text-3xl font-bold mb-5">
              Blog Platform
            </h3>

            <p className="text-slate-600 leading-8">
              Developed a blogging platform for creating, managing, and viewing
              posts with CRUD functionality.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl">

            <p className="text-blue-600 font-semibold mb-3">
              React • Node • Express • MySQL
            </p>

            <h3 className="text-3xl font-bold mb-5">
              NurseEase
            </h3>

            <p className="text-slate-600 leading-8">
              Built a healthcare support platform integrating AI-based
              summarization and vitals analysis for medical workflows.
            </p>

          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24 px-6 md:px-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">

          <p className="uppercase text-sm mb-4 opacity-80">
            Achievement
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Finalist in Open Weaver Hackathon
          </h2>

          <p className="mt-6 text-xl opacity-90">
            Selected among Top 102 teams out of 1471 participating teams.
          </p>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-24 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="/Oracle Certificate.pdf"
            target="_blank"
            className="bg-white p-8 rounded-3xl shadow-xl block"
          >
            <h3 className="text-2xl font-bold">
              Oracle Certified Professional: Java SE 11 Developer
            </h3>

            <p className="text-slate-500 mt-4">
              Score: 84%
            </p>
          </a>

          <a
            href="/iitm.png"
            target="_blank"
            className="bg-white p-8 rounded-3xl shadow-xl block"
          >
            <h3 className="text-2xl font-bold">
              IIT Madras BS Degree — Data Science Foundation Level
            </h3>
          </a>

          <a
            href="/DBMS-Infy (1).pdf"
            target="_blank"
            className="bg-white p-8 rounded-3xl shadow-xl block"
          >
            <h3 className="text-2xl font-bold">
              Infosys Springboard — DBMS
            </h3>
          </a>

          <a
            href="/Infy-html5.pdf"
            target="_blank"
            className="bg-white p-8 rounded-3xl shadow-xl block"
          >
            <h3 className="text-2xl font-bold">
              Infosys Springboard — Web Development
            </h3>
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-20 text-center">

        <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">

          <h2 className="text-5xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-2xl font-semibold">
            jvstech.in@gmail.com
          </p>

          <a
            href="/Resume (1).pdf"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Resume
          </a>

        </div>
      </section>

    </div>
  );
}