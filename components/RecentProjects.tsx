import { projects } from "@/data/";
import { ExpandableCard } from "./ui/ExpandableCard";

const projectCards = projects.map(({ title, des, img, iconLists, link }) => ({
  title,
  subtitle: des,
  thumbnail: img,
  icons: iconLists,
  link,
}));

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 w-full">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-12">
        <ExpandableCard cards={projectCards} coverThumbnails />
      </div>
    </div>
  );
};

export default RecentProjects;
