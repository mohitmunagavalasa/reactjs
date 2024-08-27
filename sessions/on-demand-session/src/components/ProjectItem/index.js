import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, websiteUrl} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <div className="visit-container">
            <a className="blue-color" href={websiteUrl} target="__blank">
              Visit Website
              <FontAwesomeIcon
                icon={faArrowRight}
                className="blue-color arrow-space"
              />
            </a>
          </div>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
