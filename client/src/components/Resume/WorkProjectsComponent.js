const WorkProjectsComponent = ({company, title, description, image, tags}) => {
    return (  
            <div className="mx-auto mt-5 flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 border-black border-2">
                <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={image} alt="Some Text" />
                <div className="p-4">
                    <small className="text-cyan-400 text-xs">{company}</small>
                    <h1 className="text-2xl font-medium text-slate-600 pb-2">{title}</h1>
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{description}</p>
                </div>
            </div>     
    )
}

export default WorkProjectsComponent