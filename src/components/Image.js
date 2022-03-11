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
import { useSelector, useDispatch } from "react-redux";
import { likeIncrease, dislikeIncrease } from "../actions";

const useStyles = makeStyles({
  media: {
    height: 500,
  },
  unlikeButton: {
    color: "#A9BA9D",
  },
});

function Image({ description, url, id }) {
  const classes = useStyles();
  const likeCounter = useSelector((state) => state.likeCounter);
  const dislikeCounter = useSelector((state) => state.dislikeCounter);
  const dispatch = useDispatch();

  return (
    <>
      <CardMedia className={classes.media} image={url} />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <div>
          <label>
            {likeCounter.find((obj) => obj.id === id)
              ? likeCounter.find((obj) => obj.id === id).likes
              : 0}
          </label>
        </div>
        <Button>
          <ThumbUpIcon
            color="success"
            onClick={() => dispatch(likeIncrease(id))}
          />
        </Button>
        <Button>
          <ThumbDownIcon
            className={classes.unlikeButton}
            onClick={() => dispatch(dislikeIncrease(id))}
          />
        </Button>
        <div>
          {dislikeCounter.find((obj) => obj.id === id)
            ? dislikeCounter.find((obj) => obj.id === id).likes
            : 0}
        </div>
      </CardActions>
    </>
  );
}

export default Image;
