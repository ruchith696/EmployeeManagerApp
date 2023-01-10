import * as React from "react";
import { Card } from "react-bootstrap";
import "./BodyCard.css";

interface IBodyCardProps {}

const BodyCard: React.FunctionComponent<IBodyCardProps> = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-3"></div>
      </div>
    </div>
  );
};

export default BodyCard;
