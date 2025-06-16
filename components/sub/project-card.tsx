
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaGlobeAfrica } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  githublink: string;
  livelink: string;
  iconLists?: readonly string[];
};


export const ProjectCard = ({
  src,
  title,
  description,
  githublink,
  livelink,
  iconLists,
}: ProjectCardProps) => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#2A0E61] bg-[#11072a] shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#a855f7]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover"
      />

      <div className="p-5">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className=" mt-2 text-gray-300">{description}</p>

      <div className="mt-6 flex items-center justify-between">
        {/* Tech Icons */}
        <div className="flex items-center">
          {iconLists?.map((icon, i) => (
            <div
              key={icon}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black"
              style={{
                transform: `translateX(-${5 * i * 2}px)`,
              }}
            >
              <Image
                src={icon}
                alt={icon}
                width={28}
                height={28}
                className="p-1"
              />
            </div>
          ))}
        </div>

        {/* Source Code + Live Website Links (hidden on small screens) */}
        <div className="flex flex-row gap-3">
          <Link
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-purple-400 hover:underline flex items-center gap-1"
          >
            <FaGithub className="hidden md:flex w-5 h-5" />
            Source Code
          </Link>

          <Link
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-purple-400 hover:underline flex items-center gap-1"
          >
            <FaEarthAsia className="hidden md:flex w-5 h-5" />
            Live Link
          </Link>
        </div>
      </div>

    </div>
    </div >
  );
};
