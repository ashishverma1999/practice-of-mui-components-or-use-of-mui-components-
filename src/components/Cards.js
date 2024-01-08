import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
const Cards = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300, marginLeft: 5 }}>
        <CardMedia
          component={"img"}
          heght="140"
          image="https://images.unsplash.com/photo-1586991359975-54500b7d8a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmslMjBmcm9tJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom varient="h5" component="div">
            Web Design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            ratione.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are You Sure </DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure to delete this products ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cards;
