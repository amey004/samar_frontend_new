import React,{useCallback} from 'react';
import axios from 'axios';
import { useDropzone } from "react-dropzone";

function Dropzone({ open }) {
  
  const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
      }, []);
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({onDrop});
  return (
    <div {...getRootProps({ className: "dropzone" })} style={{
        border:"1px dashed",
        marginBottom:"2vh",
        height:"10vh",
        marginLeft:"4vw",
        marginRight:"4vw",
        alignContent:"center",
        justifyContent:"center",
    }}>
      <input className="input-zone" {...getInputProps()} />
      <div>
        {isDragActive ?
        <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
    </div>
  );
}
function FileUpload(){

    return (
        <div >
            <Dropzone className="dropzone"/>
        </div>
    );
}

export default FileUpload;