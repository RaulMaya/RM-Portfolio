
import rmSVG from "../rmSVG.svg";

const LoaderComponent = () => {

    return (
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
            <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-300 to-cyan-700 animate-spin">
                    <div className="absolute">
                        <div className="h-16 w-16 rounded-full bg-white border-2 border-black flex items-center justify-center">
                            <img
                                className="text-center h-8"
                                src={rmSVG}
                                alt="Logo of Raul Maya"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoaderComponent