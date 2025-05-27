import { useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paint")({
  component: RouteComponent,
});

const WIDTH = 350;
const HEIGHT = WIDTH / 0.8;

function RouteComponent() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <BgImage />

      <Scene />
    </main>
  );
}

const BgImage = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-black">
      <img
        src="/assets/sticker1.jpg"
        alt=""
        className=""
        style={{ width: WIDTH, height: HEIGHT }}
      />
    </div>
  );
};

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevPosition = useRef<any>(null);

  // Store the initial canvas state
  const initialImageRef = useRef<ImageData | null>(null);
  // Reference to hold the interval timer
  const undoIntervalRef = useRef<number | null>(null);

  const circlesQueueRef = useRef<
    Array<{ x: number; y: number; radius: number }>
  >([]);

  const isCommandKeyPressedRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Meta") {
        isCommandKeyPressedRef.current = true;
        console.log("Command key pressed");
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Meta") {
        isCommandKeyPressedRef.current = false;
        console.log("Command key released");
      }
    };

    // Add global event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

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

    img.src = "/assets/sticker1.jpg";

    img.onload = function () {
      ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);

      initialImageRef.current = ctx.getImageData(0, 0, WIDTH, HEIGHT);

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
      circlesQueueRef.current.length === 0 ||
      isCommandKeyPressedRef.current
    )
      return;

    // Remove the oldest circle from the queue
    circlesQueueRef.current.shift();
    console.log("redraw");
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
    if (!isCommandKeyPressedRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.fillRect(Math.floor(x), Math.floor(y), radius, radius);
    ctx.fill();

    // Add the circle to our queue
    circlesQueueRef.current.push({ x, y, radius });
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const { clientX, clientY, movementX, movementY } = e;

    const rect = canvasRef.current.getBoundingClientRect();

    const canvasClientX = clientX - rect.left;
    const canvasClientY = clientY - rect.top;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, canvasClientX, (1 / nbOfCircles) * i);

        const targetY = lerp(y, canvasClientY, (1 / nbOfCircles) * i);

        draw(targetX, targetY, 30);
      }
    }
    prevPosition.current = {
      x: canvasClientX,
      y: canvasClientY,
    };
  };

  return (
    <div className="absolute flex items-center justify-center w-full h-full z-[10] custom-cursor">
      <canvas
        ref={canvasRef}
        onMouseMove={manageMouseMove}
        width={WIDTH}
        height={HEIGHT}
      ></canvas>
    </div>
  );
};
