import React from "react";
import { Grid, Avatar } from '@material-ui/core';

function NoticeDetailsCard(props){
    var noticeDetails = props.notice;
    return (
        <div>
            <Grid container>
                <Grid item xs = {4}>
                    <Avatar src={noticeDetails.image} alt="Image"></Avatar>
                </Grid>
                <Grid item xs = {8}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default NoticeDetailsCard;