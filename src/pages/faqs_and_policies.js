import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { HiPlus, HiX } from "react-icons/hi";
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
            policyName:"Rajiv Gandhi Aawas Yojana",
            details:"The scheme focussed on bringing existing slums within the formal system and enabling them to avail of the same level of basic amenities as the rest of the town/city.Tackling the shortages of urban land and housing that keep shelter out of reach of the urban poor.", 
        ministry:"Government of India", 
        image:goi,launchDate:"02 June 2011"},
        {policyNumber:3,
            policyName:"Interest Subsidy Scheme for Housing the Urban Poor", 
            details:"To enable the urban poor to obtain the credit for home loans at affordable rates, ISHUP provides 5% interest subsidy on loans up to Rs. 1 Lakh",
        ministry:"Government of India", 
        image:goi,launchDate:"26 December 2008"}
    ];

    var questions = [
        {   
            questionId:1,
            heading:"Registration for developers",
            details:"Interested developers can register themselves by visiting the nearest Municipal Corporation.",
        },
        {   
            questionId:2,
            heading:"Which policies am I eligible for?",
            details:"Please click on policy name to know more about the policies.",
        },  
        {   
            questionId:3,
            heading:"Where to report misconducts?",
            details:"There is a special section(Grievance Redressal) for reporting any misconduct observed. You can find it in the navbar.",
        },
        {   
            questionId:4,
            heading:"What after reporting?",
            details:"The concerned authorities will be notified about your grievances and will take the appropriate action.",
        },
        {   
            questionId:5,
            heading:"Am I eligible for the Slum Rehabilitation Program?",
            details:"Please check with the nearest Municipal Corporation for eligibility criteria details",
        },  
        {   
            questionId:6,
            heading:"What to do in case of denial or delay in service by the developer?",
            details:"You can report grievances in the Grievance Redressal section.",
        },
    ];

    return (
            <Grid container spacing={2} padding={"2vh"} marginTop={"0vh"}>
                <Grid item padding={"2vh"} md={6} marginLeft={"3vw"}>
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
                <Grid item md={5}>
                    <Box className="container-faq">
                        <div style={{
                                fontWeight:500,
                                color:"#000000",
                                marginBottom:"1vh",
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
        <br/>
        <Accordion disableGutters={true}>
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
                    backgroundColor:"white",
                    padding:"5px",
                    objectFit:"contain",
                }}/>
                <div>
                    <div className="white-heading">{pol.policyName}</div>
                    <div className="white-subheading">{pol.ministry}</div>
                </div>
                
            </Box>
            <Dialog
                style={{
                    color:"#EEF0F2"
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
                    <div className="close-button" style={{
                        position:"absolute",
                        right:"1vw",
                        top:"1vh",
                        color:"#4E4E4E"
                    }} onClick={handleClose}><HiX/></div>
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