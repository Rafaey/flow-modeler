import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { FlowModeler } from "react-flow-modeler";

export default function App() {
  const [externalState, setExternalState] = useState({
    flow: { firstElementId: null, elements: {} }
  });

  return (
    <FlowModeler
      flow={externalState.flow}
      renderStep={({ data }) => (data ? <label>{data.value}</label> : null)}
      renderGatewayConditionType={({ data }) =>
        data ? <label>{data.value}</label> : null
      }
      renderGatewayConditionValue={({ data }) =>
        data ? <label>{data.value}</label> : null
      }
      onChange={({ changedFlow }) => {
        externalState.flow = changedFlow;
        setExternalState(externalState);
      }}
    />
  );
}
