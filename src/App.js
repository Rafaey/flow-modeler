import React from "react";
import "./styles.css";
import { FlowModeler } from "react-flow-modeler";

export default function App() {
  return (
    <FlowModeler
      flow={{
        firstElementId: "a",
        elements: {
          a: {
            nextElementId: "b",
            data: { stepContent: "Aadasdfsdfsafsaf" }
          },
          b: {
            nextElements: [
              { id: "c", conditionData: { conditionValue: "1" } },
              { conditionData: { conditionValue: "2" } }
            ],
            data: { conditionType: "B?" }
          },
          c: {
            data: { stepContent: "C" }
          }
        }
      }}
      renderStep={({ data }) => <label>{data ? data.stepContent : null}</label>}
      renderGatewayConditionType={({ data }) => (
        <label>{data ? data.conditionType : null}</label>
      )}
      renderGatewayConditionValue={({ data }) => (
        <label>{data ? data.conditionValue : null}</label>
      )}
    />
  );
}
