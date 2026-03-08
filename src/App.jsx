function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">Gunjika</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
{/* Hero Section */}
     
{/* Hero Section */}
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900">
    Gunjika Khurana
  </h2>

  <p className="text-xl font-semibold tracking-wide text-gray-700 mb-10">
    B.Tech CSE • Banasthali Vidyapith
  </p>

  <div className="flex justify-center gap-6">
    <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-black transition duration-300">
      View Projects
    </button>

    <button className="px-6 py-2 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-100 transition duration-300">
      Contact
    </button>
  </div>

</section>
      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-32 px-6 border-t border-gray-200">
        <h3 className="text-3xl font-semibold mb-6 text-center">About Me</h3>
        <p className="text-gray-600 text-lg text-center leading-relaxed max-w-2xl mx-auto">
  I am a Computer Science student at Banasthali Vidyapith with a strong
  interest in technology and innovation. I consider myself an active
  learner who enjoys exploring new concepts and working on practical
  projects. I am always eager to learn more, improve my technical
  understanding, and gain new experiences that help me grow both
  academically and professionally.
</p>
      </section>
      {/* Skills */}
 {/* Skills */}
{/* Skills */}
{/* Skills */}
<section className="max-w-5xl mx-auto mt-32 px-6 text-center border-t border-gray-200 pt-24">

  <h3 className="text-3xl font-semibold mb-10">Skills</h3>

  <div className="flex justify-center gap-6 flex-wrap">

    <div className="bg-white px-10 py-4 rounded-lg shadow-md">
      C++
    </div>

    <div className="bg-white px-10 py-4 rounded-lg shadow-md">
      Python
    </div>

    <div className="bg-white px-10 py-4 rounded-lg shadow-md">
      HTML
    </div>

    <div className="bg-white px-10 py-4 rounded-lg shadow-md">
      CSS
    </div>

  </div>

</section>

      {/* Projects */}
     {/* Projects */}

    {/* Projects */}
<section id="projects" className="max-w-5xl mx-auto mt-32 px-6 text-center border-t border-gray-200 pt-24">

  <h3 className="text-3xl font-semibold mb-12">Projects</h3>

  <div className="flex justify-center">

    <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md max-w-md">

      <h4 className="text-xl font-bold mb-3">
        Portfolio Website
      </h4>

      <p className="text-gray-600 mb-4">
        My personal portfolio website built using HTML, CSS and modern
        web development tools to showcase my skills, projects and
        contact information.
      </p>

      <button className="text-blue-600 font-semibold hover:underline">
        View Project →
      </button>

    </div>

  </div>

</section>

      {/* Contact */}
      {/* Contact */}
{/* Contact */}
<section id="contact" className="max-w-5xl mx-auto mt-32 mb-20 px-6 text-center border-t border-gray-200 pt-24">

<h3 className="text-3xl font-semibold mb-4">
  Let’s Build Something Great Together
</h3>

<p className="text-gray-600 mb-10 max-w-xl mx-auto">
  Feel free to reach out for collaborations, opportunities, or just a
  conversation about technology and learning.
</p>

<div className="flex justify-center gap-6 flex-wrap">s
    {/* Email */}
    <a 
      href="mailto:gunjikakhurana@gmail.com"
      className="bg-white border border-gray-200 px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <p className="font-semibold">Email Me</p>
      <p className="text-gray-600">gunjikakhurana@gmail.com</p>
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/gunjika-khurana-1677193a5/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-gray-200 px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <p className="font-semibold">LinkedIn</p>
      <p className="text-gray-600">linkedin.com/in/gunjika-khurana</p>
    </a>

  </div>

</section>

{/* Footer */}
<footer className="text-center py-6 text-gray-500 text-sm">
  © 2026 Gunjika Khurana
</footer>

</div>
  );
}

export default App;