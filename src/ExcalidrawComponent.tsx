import { Excalidraw } from "@excalidraw/excalidraw";
import styled from "@emotion/styled";
import * as React from "react";

// 1) A full-screen overlay covering the entire map area
const WhiteboardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Slight transparency to see the map behind.*/
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 9999; /* above other elements like the toolbar */
  pointer-events: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
`;

export const ExcalidrawComponent = ({ onClose }: { onClose: () => void }) => {
  return (
    <WhiteboardOverlay>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          //wrapper
          backgroundColor: "transparent",
        }}
      >
        <Excalidraw
          initialData={{
            appState: {
              //canvas
              viewBackgroundColor: "rgba(0, 0, 0, 0)",
            },
          }}
        />

        <CloseButton onClick={onClose}>Close</CloseButton>
      </div>
    </WhiteboardOverlay>
  );
};
