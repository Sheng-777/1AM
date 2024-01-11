import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const PostForm = () => {
 const [formData, setFormData] = useState({
    id : '',
    source : '',
    boards : [''],
 });


 const availableBoard = [
    {id:1, label: "Board 1"},
    {id:2, label: "Board 2"},
    {id:3, label: "Board 3"},
    {id:4, label: "Board 4"},
    {id:5, label: "Board 5"},
    {id:6, label: "Board 6"},
 ]
    
const [selectedItems, setSelectedItems] = useState(Array<string>)


const handleCheckBoxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked){
        setSelectedItems([...selectedItems, value]);
    }else{
        setSelectedItems(selectedItems.filter(item => item !== value))
    }

};

const onDrop = useCallback((acceptedFiles: Array<File>) => {
  const file = new FileReader;

  file.onload = function() {
    setPreview(file.result);
  }

  file.readAsDataURL(acceptedFiles[0])
}, [])

const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop
});

const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

/**
 * handleOnSubmit
 */

async function handleOnSubmit() {

  if ( typeof acceptedFiles[0] === 'undefined' ) return;

  const fD = new FormData();

  fD.append('file', acceptedFiles[0]);
  fD.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET as string);
  fD.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string);

  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: fD
  }).then(r => r.json());

  if (results.url === undefined){
    return ""
  }
  else{
  return results.url
  }
}
 

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});

 };

 const [errorMsg, setErrorMsg] = useState('')
 const [submitError, setSubmitError] = useState<string>("")
 const [loading, setLoading] = useState(false)
 const router = useRouter()
 const validateData = ():boolean => {
    if (selectedItems.length < 1) {
      setErrorMsg("*There needs to be at least 1 board");
      return false;
    }

    if (formData.source === undefined || formData.source === ""){
      setErrorMsg("*Please upload an image")
      return false
    }

    else{
        setErrorMsg("")
        return true;
    }
 };



 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.boards = selectedItems;
    //console.log(formData)

    const re = await handleOnSubmit();
    //console.log(re.url)
    formData.source = re
    const isValid = validateData();

    
    if (isValid){
      try{
        setLoading(true)
        console.log(formData)

        const apiRes = await axios.post("https://www.rouge-co.com/api/createPost", formData)
        console.log(apiRes)
        if (apiRes?.status === 200){
          // save data in session
          //console.log(apiRes)
            router.push("/")
        }

      }catch(error:unknown){
          if (error instanceof AxiosError){
            const errorMsg = error.response?.data?.error
            setSubmitError(errorMsg) 
          }
      }

      setLoading(false)
    }
    
    
    
 };

 

 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create New Post
        </h2>
      </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">

        {availableBoard.map((board) => (
        <div key={board.id} className=''>
          <label className="">
            <input
                id="boards"
                name="boards"
                type="checkbox"
                value={board.label}
                onChange={handleCheckBoxChange}
            />
            {board.label}
          </label>

        </div>
        ))}
      </div>
      
      
      <div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag and drop some files here, or click to select files</p>
              }
            </div>

          {preview && (
            <p className="mb-5">
              <img src={preview as string} alt="Upload preview" />
            </p>
          )}

    </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled = {loading}
        >
          Create Post
        </button>
        {errorMsg && <div className='pt-2 text-red-700'>{errorMsg}</div>}
        {submitError && <div className='pt-2 text-red-700'> {submitError} </div>}
      </div>

      
    </form>
    </div>
    </div>
 );
};

export default PostForm;