import './App.css';
import { Button, Card,CardContent } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Card className="flagcontent">
        <CardContent>
          <h2>Hey there</h2>
          <h3>This is a fun exercise that helps you learn more about the different flags of the LGBTQIA+ communities. </h3>
          <h4>Let's dive in and learn</h4>
        </CardContent>
            <Button variant="contained">Let's play</Button>
      </Card>
    </div>
  );
}

export default App;
