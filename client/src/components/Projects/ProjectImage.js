const ProjectImage = ({image}) => {
    return (
        <div className="container m-auto flex justify-center">
            <img className="w-8/12" src={image} alt="Art" />
        </div>)
}

export default ProjectImage