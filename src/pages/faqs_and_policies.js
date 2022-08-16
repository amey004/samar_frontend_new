import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { HiPlus } from "react-icons/hi";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import goi from '../images/goi.png';

function FaqsAndPolicies(){
    var PoliciesDetails = [
        {   policyNumber:1,
            policyName:"Pradhan Mantri Aawas Yojana", 
        ministry:"Ministry of Housing and Urban Affairs", 
        details:"The Mission addresses urban housing shortage among the EWS/LIG and MIG categories including the slum dwellers by ensuring a pucca house to all eligible urban households by the year 2022, when Nation completes 75 years of its Independence.",
        image:goi,
    launchDate:"25 June 2015"},
        {policyNumber:2,
            policyName:"Pradhan Mantri Aawas Yojana",
            details:"The Mission addresses urban housing shortage among the EWS/LIG and MIG categories including the slum dwellers by ensuring a pucca house to all eligible urban households by the year 2022, when Nation completes 75 years of its Independence.", 
        ministry:"Government of India", 
        image:goi,launchDate:"25 June 2015"},
        {policyNumber:3,
            policyName:"Pradhan Mantri Aawas Yojana", 
            details:"The Mission addresses urban housing shortage among the EWS/LIG and MIG categories including the slum dwellers by ensuring a pucca house to all eligible urban households by the year 2022, when Nation completes 75 years of its Independence.",
        ministry:"Government of Maharashtra", 
        image:goi,launchDate:"25 June 2015"}
    ];

    var questions = [
        {   
            questionId:1,
            heading:"Registration",
            details:"Eligible citizens can register themselves for the appropriate policy by visiting the nearest Municipal Corporation.",
        },
        {   
            questionId:2,
            heading:"Am I eligible?",
            details:"Please click on policy name to know more about the policies",
        },  
        {   
            questionId:3,
            heading:"Where to report misconducts?",
            details:"There is a special section for reporting any misconduct observed. You can find it in the navbar",
        },
        {   
            questionId:4,
            heading:"Registration",
            details:"Eligible citizens can register themselves for the appropriate policy by visiting the nearest Municipal Corporation.",
        },
        {   
            questionId:5,
            heading:"Am I eligible?",
            details:"Please click on policy name to know more about the policies",
        },  
        {   
            questionId:6,
            heading:"Where to report misconducts?",
            details:"There is a special section for reporting any misconduct observed. You can find it in the navbar",
        },
    ];

    return (
            <Grid container spacing={2} padding={"2vh"}>
                <Grid item padding={"2vh"} xs={6} marginLeft={"3vw"}>
                    <Box className="container-faq">
                        <div style={{
                            fontWeight:500,
                        }}>Different Policies of the Government</div>
                        {PoliciesDetails.map((e) =>{
                            console.log(e);
                            return (<PolicyDetails policyName={e.policyName} ministry={e.ministry} image={e.image} details={e.details} launchDate={e.launchDate}/>)
                        } )}
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box className="container-faq">
                        <div style={{
                                fontWeight:500,
                                color:"#000000",
                            }}>Frequently Asked Questions</div>
                            {questions.map((e) => {
                                return (<FaqQuestion heading={e.heading} details={e.details}/>)
                            })}
                    </Box>
                </Grid>
            </Grid>
    );
}


function FaqQuestion(faqQn) {  
    return (
      <div >
        <Accordion>
          <AccordionSummary
             expandIcon={<HiPlus/>}
            //  aria-controls="panel1a-content"
             id="panel1a-header"
          >
            <Typography>{faqQn.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {faqQn.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

function PolicyDetails(pol){
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
  
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
        <div>
            <Box className="policy" onClick={handleClickOpen("paper")}>
                <Avatar src={pol.image} style={{
                    marginRight:"1vw",
                }}/>
                <div>
                    <div className="black-heading">{pol.policyName}</div>
                    <div className="black-subheading">{pol.ministry}</div>
                </div>
                
            </Box>
            <Dialog
                style={{
                    color:"#abecec"
                }}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                >
                <DialogTitle id="scroll-dialog-title" style={{display:"flex"}}>
                    <Avatar src={pol.image} style={{
                        marginRight:"1vw",
                    }}/>
                    <div>
                        <div className="black-heading">{pol.policyName}</div>
                        <div className="black-subheading">{pol.ministry}</div>
                    </div>
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                    >
                        <p>Launch Date: {pol.launchDate}</p>
                        <p>
                        Details:<br/>
                        {pol.details}
                        </p>
                            
                        
                    </DialogContentText>
                </DialogContent>
                
                </Dialog>
        </div>
        
    );
}


export default FaqsAndPolicies;