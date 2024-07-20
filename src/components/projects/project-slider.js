import PropTypes from 'prop-types';


{/** Home Page Section two our services images   */}
function ProjectSlider({ project }) {
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;

    return (
        <div className="project-item">
            <div  className="project-img">
                <img src={imagePath} alt={project?.title} />
            </div>
        </div>
    );
}

ProjectSlider.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
