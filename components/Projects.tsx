import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[17.5px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="data:image/png;base64,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"
              alt="Project name"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#6b0a7f]/50">
                  Projects {i + 1} of {projects.length}:
                </span>{" "}
                CRUD, Grocery List
              </h4>
              <p className="text-lg text-center md:text-left">
                Jag har gjort en Grocery List App(CRUD) med
                programmeringsspråken NextJs, TypeScript, Tailwind CSS, Styled
                Components och så använder jag mig av Firebase som databas.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#6b0a7f]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
