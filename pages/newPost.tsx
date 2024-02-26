import UploadPost from '@/components/modals/UploadPost';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiChevronLeft } from 'react-icons/hi2';

const PostForm = () => {
 const [formData, setFormData] = useState({
    id : '',
    source : '',
    boards : [''],
 });

{/*
 const availableBoard = [
    {id:1, label: "Board 1"},
    {id:2, label: "Board 2"},
    {id:3, label: "Board 3"},
    {id:4, label: "Board 4"},
    {id:5, label: "Board 5"},
    {id:6, label: "Board 6"},
 ]
 */}
    
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
        const apiRes = await axios.post("https://www.rouge-co.com/api/services/createPost", formData)
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
    <div className="h-full w-full">
      <div className="w-full px-6 h-20 flex items-center fixed ">
            <Link href="/">
                <HiChevronLeft className="text-gray-600 text-4xl"/>
            </Link>
        </div>
        <UploadPost
            onDrop={onDrop}
            acceptedFiles={acceptedFiles}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            preview={preview}
            formData={formData}
            setFormData={setFormData}
            handleCheckBoxChange={handleCheckBoxChange}
            loadin={loading}
            errorMsg={errorMsg}
            submitError={submitError}
            handleSubmit={handleSubmit}
        />
    </div>
 );
};

export default PostForm