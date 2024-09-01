"use client"; // Mark this component as a Client Component

import { useEffect, useState } from "react";

export default function ClientTrackingComponent() {
  const [clickCount, setClickCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [screenTime, setScreenTime] = useState(0);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // Track page load
    setCurrentPage(window.location.href);
    setStartTime(Date.now());
    console.log("Current page:", window.location.href);

    // Track clicks
    const handleClick = () => {
      setClickCount((prev) => {
        const newClickCount = prev + 1;
        console.log("Click count:", newClickCount);
        return newClickCount;
      });
    };

    // Track scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      console.log("Scroll position:", scrollY);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate screen time on unmount
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (startTime) {
        const totalTime = Date.now() - startTime;
        setScreenTime(totalTime);
        console.log("Screen time (ms):", totalTime);

        const data = {
          clickCount: clickCount,
          scrollPosition,
          screenTime: totalTime,
          currentPage,
        };

        // Send data to the server
        fetch("http://localhost:8080/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => {
          if (response.ok) {
            console.log("Data sent successfully");
          } else {
            console.error("Failed to send data");
          }
        }).catch(error => {
          console.error("Error:", error);
        });
      }

      // Prevent the default action to ensure the data is sent
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [startTime, clickCount, scrollPosition, currentPage]);

  return null; // No UI needed for this component
}
