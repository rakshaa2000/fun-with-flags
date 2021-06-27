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
          <a href="/play"><Button variant="contained" color="secondary">Let's play</Button></a>
      </Card>
    </div>
  );
}

export default App;
