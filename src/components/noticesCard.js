import React from "react";
import { Avatar,Grid,Box, Card, Button} from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { HiX } from "react-icons/hi";
import "./App.css";

function NoticeItem(props){
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
      <div className="noticeItem">
        <Card
          style={{
            height: "10vh",
            width: "15vw",
            margin: "5px",
            paddingLeft: "10px",
          }}
          className="subnoticeItem"
          onClick={handleClickOpen("paper")}
        >
          <div style={{ fontSize: "15px", fontWeight: "500" }}>
            {props.notice.recipient}
          </div>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxLines: "2",
              marginRight: "12px",
              fontSize: "12px",
            }}
          >
            {props.notice.subject}
          </p>
        </Card>
        <Dialog
          style={{
            color: "#478e93",
          }}
          PaperProps={{
            style: {
              backgroundColor: "#478e93",
            },
          }}
          open={open}
          onClose={handleClose}
          scroll={scroll}
        >
          <DialogTitle style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#478e93",
                // fontFamily:"Poppins",
                color: "white",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    style={{
                      margin: "2vh",
                      height: "5vw",
                      width: "5vw",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs={12}>
                      <p>{props.notice.recipient}</p>
                      <p
                        style={{
                          fontSize: "10px",
                          fontColor: "#e8f1f2",
                        }}
                      >
                        <b>Address: </b>
                        {props.notice.address}
                        <br></br>
                        <b>Allotted on: </b>
                        {props.notice.allottedOn}
                      </p>
                    </Grid>
                  </Grid>
                  <Grid>
                    <div
                      className="close-button"
                      style={{
                        position: "absolute",
                        right: "1vw",
                        top: "1vh",
                        color: "#FFFFFF",
                      }}
                      onClick={handleClose}
                    >
                      <HiX />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <div
              style={{
                backgroundColor: "#478e93",
                color: "#FFFFFF",
                fontSize: "14px",
              }}
            >
              <div style={{ fontWeight: "500", paddingBottom: "-10px" }}>
                Notice Regarding:
              </div>
              {props.notice.subject}
              <br></br>
              <br></br>
              <div style={{ fontWeight: "500", paddingBottom: "-10px" }}>
                Verification Date:
              </div>
              {props.notice.verificationDate}
            </div>
            <div
              style={{
                margin: "2vh",
                justifyContent: "space-evenly",
                textTransform: "capitalize",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "#EEF0F2",
                  textTransform: "capitalize",
                  color: "black",
                  margin: "2vh",
                  fontFamily: "Poppins",
                }}
              >
                Notice Sent
              </Button>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "#EEF0F2",
                  textTransform: "capitalize",
                  color: "black",
                  margin: "2vh",
                  fontFamily: "Poppins",
                }}
              >
                Remove from Blacklist
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
}

function Notices(props){
    return (
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          margin: "2vh",
          backgroundColor: "#478e93",
          borderRadius: "10px",
          padding: "5px",
          height: "36vh",
        }}
      >
        <Grid
          container
          sx={{
            overflowY: "scroll",
            maxHeight: "20vh",
          }}
          justifyContent={"space-evenly"}
          alignContent={"center"}
        >   
            {props.notices.map((e,key) => (
              <NoticeItem notice={e} key={key}/>
            ))}
        </Grid>
      </Box>
    );
}

export default Notices;