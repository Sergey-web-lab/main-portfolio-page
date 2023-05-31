import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnGitHubPages from "../components/btnGitHubPages/BtnGitHubPages";
import { projects } from "./../helpers/projectsList"

const Project = () => {
	const { id } = useParams();
	const project = projects[id];

	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.img}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {project.skills}</p>
					</div>
					<div className="project-details__btnWrapper">
						<BtnGitHub link={project.gitHubLink} />
						{project.gitHubPagesLink && <BtnGitHubPages link={project.gitHubPagesLink} />}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Project;