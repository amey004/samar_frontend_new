import React,{useCallback} from 'react';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import {read, utils} from 'xlsx';

function Dropzone({ open }) {
  const readFile = async ([file]) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      const rABS = !!reader.readAsBinaryString;
      console.log(contents);
      var workbook = read(contents, { type: rABS ? "binary" : "array" })
      console.log(workbook);
      var sheet_name_list = workbook.SheetNames[0];
      var jsonFromExcel = utils.sheet_to_json(workbook.Sheets[sheet_name_list],)
      // displayContents(contents);
    };
    reader.readAsText(file);
  }
  const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        readFile(acceptedFiles);
      }, []);
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({onDrop});
    
  return (
    <div {...getRootProps({ className: "dropzone" })} style={{
        border:"1px dashed",
        marginBottom:"2vh",
        height:"15vh",
        marginLeft:"4vw",
        marginRight:"4vw",
        alignContent:"center",
        justifyContent:"center",
        padding:"1vh",
    }}>
      <input className="input-zone" {...getInputProps()} />
      <div style={{fontSize:"14px"}}>
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