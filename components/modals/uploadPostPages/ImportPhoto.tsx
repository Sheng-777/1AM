import { HiOutlineChevronRight, HiOutlinePhoto } from 'react-icons/hi2';

const ImportPhoto = ({ preview, onDrop, acceptedFiles, getRootProps, getInputProps, isDragActive, setStep, step }: any) => {
    function handleNext() {
        setStep(step + 1);
    }

    const handlePhotoImport = () => {
        if (preview && isDragActive) {
            return (
                <div className="my-20 flex flex-col items-center text-center" {...getRootProps()}>
                <input {...getInputProps()} />
                    <HiOutlinePhoto className="text-9xl text-gray-300" />
                    <p>Drop file here...</p>
                </div>
            );
        } else if (preview) {
            return (
                <div>
                    <p className="mb-5">
                        <img src={preview as string} alt="Upload preview"/>
                    </p>
                    <div className="flex justify-between items-center">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <button className="text-gray-500 underline">
                                Choose another photo
                            </button>
                        </div>
                        <button onClick={handleNext} className="flex gap-1 items-center text-white bg-blue-500 rounded-md px-4 py-1">
                            <p>Next</p>
                            <HiOutlineChevronRight/>
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="my-20 flex flex-col items-center text-center" {...getRootProps()}>
                <input {...getInputProps()} />
                    <HiOutlinePhoto className="text-9xl text-gray-300" />
                    <p>Drag and drop a file here, or click to select a file</p>
                </div>
            );
        }
    }

    return (
        <div>
            <div className="font-bold">
                <h1>Upload Photo</h1>
            </div>
            <hr className="my-4"></hr>
                {handlePhotoImport()}
        </div>
    )
}

export default ImportPhoto