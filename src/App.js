import { Container, Card, CardHeader, Avatar } from "@mui/material";
import db from "./userData";
import Image from "./components/Image";

function App() {
  return (
    <div>
      <Container>
        <Card>
          <CardHeader avatar={<Avatar>JD</Avatar>} title="Jane Doe" />
          <div>
            {db.images.map((image) => (
              <Image
                key={image.id}
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
