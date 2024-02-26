import { HiOutlineChevronRight, HiOutlinePhoto } from 'react-icons/hi2';
import ImportPhoto from './uploadPostPages/ImportPhoto';
import { useState } from 'react';
import SelectBoards from './uploadPostPages/SelectBoards';

const UploadPost = ({ preview, onDrop, acceptedFiles, getRootProps, getInputProps, isDragActive, handleCheckBoxChange, loading, errorMsg, submitError, handleSubmit}: any) => {
    const [step, setStep] = useState(0);

    const uploadStep = () => {
        switch (step) {
            case 0:
              return <ImportPhoto
                onDrop={onDrop}
                acceptedFiles={acceptedFiles}
                getRootProps={getRootProps}
                getInputProps={getInputProps}
                isDragActive={isDragActive}
                preview={preview}
                step={step}
                setStep={setStep}
                />;
            case 1:
              return <SelectBoards 
                step={step}
                setStep={setStep}
                handleCheckBoxChange={handleCheckBoxChange}
                loading={loading}
                errorMsg={errorMsg}
                submitError={submitError}
              />;
            default:
               return <ImportPhoto
               onDrop={onDrop}
               acceptedFiles={acceptedFiles}
               getRootProps={getRootProps}
               getInputProps={getInputProps}
               isDragActive={isDragActive}
               preview={preview}
               step={step}
               setStep={setStep}
               />;
          }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-10 py-6 px-10">
                {uploadStep()}
            </div>
            <div className="bg-black inset-0 opacity-50 fixed">
            </div>
            </form>
        </div>
    )
}

export default UploadPost