export default function Experience() {
  const projects = [
    {
      name: "Crupp",
      url: "https://github.com/AnDenL/crupp",
      desc: "C++ Build Tool made on Rust. Managed package deployment, updates, and maintenance for the Arch User Repository (AUR).",
    },
    {
      name: "JDS",
      url: "https://github.com/AnDenL/JDS",
      desc: "Compiled, statically-structured scripting language designed for x86_64 Linux systems.",
    },
    {
      name: "Retrolite",
      url: "https://github.com/AnDenL/Retrolite",
      desc: "A roguelike game made on Unity with many unique mechanics such as world redacting or using formulas as a weapon.",
    },
    {
      name: "Problems of wealth",
      url: "https://jjfcompany.itch.io/problem-of-wealth",
      desc: "Mobile vampire-like/tower defence game on Unity where you defend your wealth from others greed.",
    },
  ]

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-6">
      <div>
        <h2 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2 mb-3">Summary</h2>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          Software Engineer with a solid foundation in low-level systems programming, game development, and cybersecurity. Experienced in building custom development tools and game architecture. Enthusiastic about command-line workflows, automation, and optimizing code performance. Looking for opportunities to contribute to complex software or game development projects.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2 mb-3">Technical Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
          <li className="bg-slate-800/60 p-3 rounded-lg border-l-2 border-cyan-500">
            <b className="text-white">Programming Languages:</b> Lua, Rust, C#, C++, Python, HTML, GDScript, x86_64 NASM Assembly
          </li>
          <li className="bg-slate-800/60 p-3 rounded-lg border-l-2 border-cyan-500">
            <b className="text-white">Engines & Graphics:</b> Unity, Godot, WGPU (Custom Engines), Custom Rendering Pipelines
          </li>
          <li className="bg-slate-800/60 p-3 rounded-lg border-l-2 border-cyan-500">
            <b className="text-white">Tools & Environment:</b> Git, Cargo, Make, Linux CLI / Bash, Build Tooling
          </li>
          <li className="bg-slate-800/60 p-3 rounded-lg border-l-2 border-cyan-500">
            <b className="text-white">Specialization:</b> Game loop architecture, simulation mechanics, custom build systems, compilation & parsing, low-level optimization.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2 mb-3">Projects & Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg"
            >
              <h3 className="font-bold text-white text-base">
                <a href={proj.url} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                  {proj.name}
                </a>
              </h3>
              <p className="text-sm text-slate-400 mt-2">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
