import React from "react";
import { Box ,Button} from "@material-ui/core";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

function ViewReport(){
    
    const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#template"));
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("sample.pdf");
        };

    return (
        <div style={{marginTop:"10vh"}}>
            
            <ReportTemplate/>
            <Box style={{alignItems:'right'}}>
                <Button onClick={createPDF}>Download PDF Report</Button> 
            </Box>
        </div>
    );
}

function ReportTemplate(){
    return(
        <div id="template" style={{backgroundColor:"#74B2B8"}}>
            <Box style={{width:"50vw", height:"50vh", backgroundColor:"#FFD379"}}>
                <h1>Hello 1</h1>
            </Box>
            <Box style={{width:"50vw", height:"50vh", backgroundColor:"#FFD379", alignContent:'right'}}>
                <h1>Hello 2</h1>
            </Box>
            <Box style={{width:"50vw", height:"50vh", backgroundColor:"#FFD379"}}>
                <h1>Hello 1</h1>
            </Box>
            <Box style={{width:"50vw", height:"50vh", backgroundColor:"#FFD379", alignContent:'right'}}>
                <h1>Hello 2</h1>
            </Box>
            
        </div>
    );
}

export default ViewReport;