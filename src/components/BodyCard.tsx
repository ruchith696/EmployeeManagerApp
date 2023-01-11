import * as React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import "./BodyCard.css";

interface IBodyCardProps {}

const BodyCard: React.FunctionComponent<IBodyCardProps> = (props) => {
  return (
    <Container>
      <Row>
        <div className="col-md-6 col-xl-3">
          <Card className="card">
            <Card.Body className="row">
              <div className="col-6">
                <a href="">
                  <Image
                    src="https://hub.dummyapis.com/Image?text=KB&height=120&width=120"
                    roundedCircle
                    className="w-60"
                  />
                </a>
              </div>

              <div className="col-6 mb-0">
                <Card.Title className="align-self-center">
                  Kacey Bartwell
                </Card.Title>
                <p className="m-0">Graphics Designer</p>
              </div>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <i className="fa fa-envelope float-end"></i>Email :{" "}
                  <a href="#">Kacey.Bartell@dummyapis.com</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i className="fa fa-phone float-end"></i>Phone : 000 123-456
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <ButtonGroup className="float-end" size="sm">
                <Button variant="primary">
                  <i className="fa fa-pencil"></i>{" "}
                </Button>
                <Button variant="secondary">
                  <i className="fa fa-times"></i>
                </Button>
              </ButtonGroup>
              <div className="social-links">
                <ListGroup horizontal>
                  <ListGroup.Item>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href=""
                      data-original-title="Facebook"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href=""
                      data-original-title="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      className="tooltips"
                      href=""
                      data-original-title="Skype"
                    >
                      <i className="fa fa-skype"></i>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default BodyCard;
