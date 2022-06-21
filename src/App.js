import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from "react-bootstrap";
import Comments from './components/comments/Comments';

function App() {
  return (
    <div className="App">
        <Container style={{display:"flex"}} className="main">
          <Col sm={6} xs={12}>
            <img
              alt={
                "https://i0.wp.com/blogflick.wpcomstaging.com/wp-content/uploads/2021/08/Add-Location-Tag-to-FBIG.gif?resize=316%2C562&ssl=1"
              }
              className="img-responsive"
              src={
                "https://i0.wp.com/blogflick.wpcomstaging.com/wp-content/uploads/2021/08/Add-Location-Tag-to-FBIG.gif?resize=316%2C562&ssl=1"
              }
            />
          </Col>
          <Col sm={6} xs={12}>
          <h1>Interactive Comment Section</h1>
            <Comments currentUserId="1"/>
          </Col>
        </Container>
    </div>
  );
}

export default App;
