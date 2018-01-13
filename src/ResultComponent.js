import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import "./App.css";

const ResultComponent = result => (
  <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">
        #{result.index}
        {" " + result.client}
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>Kultaa {result.gold || "-"}</Panel.Body>
    <Panel.Body>XP {result.xp || "-"}</Panel.Body>
    <Panel.Body>
      Pelin kesto{" "}
      {result.durationMinutes
        ? result.durationMinutes.toFixed(1) + " min"
        : "-"}
    </Panel.Body>
  </Panel>
);

export default ResultComponent;
