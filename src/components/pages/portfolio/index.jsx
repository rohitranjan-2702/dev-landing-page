import { ProjectCard } from "../../ui";
import { projects } from "../../../utils/data";

const Portfolio = () => {
  return (
		<main className="mt-16 mb-12">
			{projects.map((project, index) => {
				return <ProjectCard index={index} project={project} />
			})}
		</main>
  )
}

export default Portfolio;