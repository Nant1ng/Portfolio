import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="https://lh5.googleusercontent.com/-HgBJfUjXWkE/AAAAAAAAAAI/AAAAAAAAAAA/YnLNWiAuIjQ/s44-p-k-no-ns-nd/photo.jpg"
        alt="Redeye AB"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          Junior Fullstack Developer
        </h4>
        <p className="font-bold text-2xl mt-1">Redeye AB</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-5 w-5 md:h-10 md:w-10 rounded-full"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="h-5 w-5 md:h-10 md:w-10 rounded-full"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="h-5 w-5 md:h-10 md:w-10 rounded-full"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
