import {
  Button,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  media: {
    height: 500,
  },
  unlikeButton: {
    color: "red",
  },
});

function Image({ description, url }) {
  const [likeCounter, setLikeCounter] = useState("");
  const [dislikeCounter, setDislikeCounter] = useState("");
  const classes = useStyles();

  function handLikeCounter() {
    let currentCount = likeCounter;
    currentCount++;
    setLikeCounter(currentCount);
  }

  function handleDislikeCounter() {
    let currentCount = dislikeCounter;
    currentCount++;
    setDislikeCounter(currentCount);
  }

  return (
    <>
      <CardMedia className={classes.media} image={url} />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <div>
          <label>{likeCounter}</label>
        </div>
        <Button>
          <ThumbUpIcon color="success" onClick={handLikeCounter} />
        </Button>
        <Button>
          <ThumbDownIcon
            className={classes.unlikeButton}
            onClick={handleDislikeCounter}
          />
        </Button>
        <div>
          <label>{dislikeCounter}</label>
        </div>
      </CardActions>
    </>
  );
}

export default Image;
