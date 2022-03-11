import { Container, Card, CardHeader, Avatar } from "@mui/material";
import db from "./userData";
import Image from "./components/Image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "#A9BA9D",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Card>
          <CardHeader
            avatar={<Avatar className={classes.avatar}>JD</Avatar>}
            title="Jane Doe"
          />
          <div>
            {db.images.map((image) => (
              <Image
                key={image.id}
                id={image.id}
                description={image.description}
                url={image.url}
              />
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default App;
