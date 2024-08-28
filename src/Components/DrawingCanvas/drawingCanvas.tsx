import React, { useRef, useState, useEffect } from "react";
import "./drawingCanvas.css";

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.strokeStyle = "#000"; // Set the stroke color
      context.lineWidth = 2; // Set the line width
      context.lineCap = "round"; // Set the line cap style
    }
  }, []);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const { offsetX, offsetY } = event.nativeEvent;
      const context = canvas.getContext("2d");
      if (context) {
        context.beginPath();
        context.moveTo(offsetX, offsetY);
        setIsDrawing(true);
      }
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const { offsetX, offsetY } = event.nativeEvent;
      const context = canvas.getContext("2d");
      if (context) {
        context.lineTo(offsetX, offsetY);
        context.stroke();
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="drawing-canvas">
      <canvas
        ref={canvasRef}
        width={500} // Adjust as needed
        height={350} // Adjust as needed
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default DrawingCanvas;
