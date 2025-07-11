import { useRef, useEffect } from "react";
import "./cursor.css";

const CustomCursor = () => {
  // Refs for DOM elements
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // State refs
  const isHoveredRef = useRef(false);
  const isClickedRef = useRef(false);
  const isOverFooterRef = useRef(false);

  // Animation refs
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Position refs
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dotElement = dotRef.current;
    const ringElement = ringRef.current;

    if (!dotElement || !ringElement) return;

    const updateMousePosition = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const checkIfInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isOverFooter = target.closest("footer") !== null;

      if (isOverFooter !== isOverFooterRef.current) {
        isOverFooterRef.current = isOverFooter;

        dotElement.classList.toggle("cursor-over-footer", isOverFooter);
        ringElement.classList.toggle("cursor-over-footer", isOverFooter);
      }

      const isInteractive =
        target.matches('a, button, [role="button"], .cursor-pointer') ||
        !!target.closest('a, button, [role="button"], .cursor-pointer');

      if (isInteractive && !isHoveredRef.current) {
        isHoveredRef.current = true;
        dotElement.classList.add("cursor-dot--hover");
        ringElement.classList.add("cursor-ring--hover");
      } else if (!isInteractive && isHoveredRef.current) {
        isHoveredRef.current = false;
        dotElement.classList.remove("cursor-dot--hover");
        ringElement.classList.remove("cursor-ring--hover");
      }
    };

    const handleMouseDown = () => {
      isClickedRef.current = true;
      dotElement.classList.add("cursor-dot--clicked");
      ringElement.classList.add("cursor-ring--clicked");
    };

    const handleMouseUp = () => {
      isClickedRef.current = false;
      dotElement.classList.remove("cursor-dot--clicked");
      ringElement.classList.remove("cursor-ring--clicked");
    };

    const handleMouseLeave = () => {
      dotElement.style.opacity = "0";
      ringElement.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      dotElement.style.opacity = "1";
      ringElement.style.opacity = "1";
    };

    const animateCursor = (time: number) => {
      if (previousTimeRef.current !== null) {
        const smoothing = 0.15;

        cursorPos.current.x +=
          (targetPos.current.x - cursorPos.current.x) * smoothing;
        cursorPos.current.y +=
          (targetPos.current.y - cursorPos.current.y) * smoothing;

        dotElement.style.transform = `translate3d(${
          cursorPos.current.x - 4
        }px, ${cursorPos.current.y - 4}px, 0)`;
        ringElement.style.transform = `translate3d(${
          cursorPos.current.x - 16
        }px, ${cursorPos.current.y - 16}px, 0)`;
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    document.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    document.addEventListener("mousemove", checkIfInteractive, {
      passive: true,
    });
    document.addEventListener("mousedown", handleMouseDown, { passive: true });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, {
      passive: true,
    });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
    });

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousemove", checkIfInteractive);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
