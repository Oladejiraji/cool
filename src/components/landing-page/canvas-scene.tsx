import { useEffect, useRef } from "react";

const DIMENSION = 432;
const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

const CanvasScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPosition = useRef<any>(null);

  const initialImageRef = useRef<ImageData | null>(null);

  const undoIntervalRef = useRef<number | null>(null);

  const circlesQueueRef = useRef<
    Array<{ x: number; y: number; radius: number }>
  >([]);

  useEffect(() => {
    init();

    return () => {
      if (undoIntervalRef.current) {
        clearInterval(undoIntervalRef.current);
      }
    };
  }, []);

  const init = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = new Image();

    img.src = "/assets/paint3.png";

    img.onload = function () {
      ctx.drawImage(img, 0, 0, DIMENSION, DIMENSION);

      initialImageRef.current = ctx.getImageData(0, 0, DIMENSION, DIMENSION);

      startUndoInterval();
    };
  };

  const startUndoInterval = () => {
    // Clear any existing interval
    if (undoIntervalRef.current) {
      clearInterval(undoIntervalRef.current);
    }

    // Set up a new interval that partially restores the canvas
    undoIntervalRef.current = window.setInterval(() => {
      removeOldestCircle();
    }, 50); //
  };

  const removeOldestCircle = () => {
    if (
      !canvasRef.current ||
      !initialImageRef.current ||
      circlesQueueRef.current.length === 0
    )
      return;

    // Remove the oldest circle from the queue
    circlesQueueRef.current.shift();
    // Redraw the canvas from scratch
    redrawCanvas();
  };

  const redrawCanvas = () => {
    if (!canvasRef.current || !initialImageRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Start with the original image
    ctx.putImageData(initialImageRef.current, 0, 0);

    // Apply all the remaining circles
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#ffffff";

    circlesQueueRef.current.forEach((circle) => {
      const { x, y, radius } = circle;
      ctx.beginPath();
      ctx.fillRect(Math.floor(x), Math.floor(y), radius, radius);
      ctx.fill();
    });

    // Reset the composite operation
    ctx.globalCompositeOperation = "source-over";
  };

  const draw = (x: number, y: number, radius: number) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.fillRect(Math.floor(x), Math.floor(y), radius, radius);
    ctx.fill();

    // Add the circle to our queue
    // Check if coordinates already exist in the queue
    const isDuplicate = circlesQueueRef.current.some(
      (circle) => circle.x === x && circle.y === y
    );

    // Only add to queue if it's not a duplicate
    if (!isDuplicate) {
      circlesQueueRef.current.push({ x, y, radius });
    }
    // circlesQueueRef.current.push({ x, y, radius });
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const { clientX, clientY, movementX, movementY } = e;

    const rect = canvasRef.current.getBoundingClientRect();

    const canvasClientX = clientX - rect.left;
    const canvasClientY = clientY - rect.top;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 20;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, canvasClientX, (1 / nbOfCircles) * i);

        const targetY = lerp(y, canvasClientY, (1 / nbOfCircles) * i);

        draw(targetX, targetY, 80);
      }
    }
    prevPosition.current = {
      x: canvasClientX,
      y: canvasClientY,
    };
  };

  return (
    <div className=" flex items-center justify-center w-full h-full z-[10] relative">
      <canvas
        ref={canvasRef}
        onMouseMove={manageMouseMove}
        width={DIMENSION}
        height={DIMENSION}
      ></canvas>
    </div>
  );
};
export default CanvasScene;
