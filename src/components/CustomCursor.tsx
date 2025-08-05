import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, hsl(20.5 90.2% 48.2%), hsl(35 91% 65%));
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      box-shadow: 0 0 20px hsl(20.5 90.2% 48.2% / 0.5);
    `;

    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    cursorTrail.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: hsl(35 91% 65% / 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.15s ease;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      
      // Trail follows with slight delay
      setTimeout(() => {
        cursorTrail.style.left = e.clientX - 4 + 'px';
        cursorTrail.style.top = e.clientY - 4 + 'px';
      }, 50);
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'scale(0.8)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'scale(1)';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.2)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      document.body.style.cursor = 'auto';
      document.body.removeChild(cursor);
      document.body.removeChild(cursorTrail);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CustomCursor;