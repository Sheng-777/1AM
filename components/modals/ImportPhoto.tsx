import { HiOutlinePhoto } from 'react-icons/hi2';

const ImportPhoto = ({ preview, onDrop, acceptedFiles, getRootProps, getInputProps, isDragActive }: any) => {
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
                <p className="mb-5">
                    <img src={preview as string} alt="Upload preview"/>
                </p>
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
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-10 py-6 px-10">
            <div className="font-bold">
                <h1>Upload Photo</h1>
            </div>
            <hr className="my-4"></hr>
                {handlePhotoImport()}
        </div>
        <div className="bg-black inset-0 opacity-50 fixed">

        </div>
        </div>
    )
}

export default ImportPhoto