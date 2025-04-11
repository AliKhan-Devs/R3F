import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  // Add the classes to position the scroll element
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  // Scroll to the correct section when the `section` changes (button click)
  useEffect(() => {
    if (isAnimating.current) return; // Prevent triggering while already animating
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true; // Set flag to prevent multiple animations
      },
      onComplete: () => {
        isAnimating.current = false; // Reset flag when the animation completes
      },
    });
  }, [section]); // Trigger animation whenever `section` changes

  // Update `section` when scrolling manually
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curScroll = data.scroll.current;
    const sectionThresholds = [0, 1 / data.pages, 2 / data.pages, 3 / data.pages];

    // Determine the current section based on scroll thresholds
    for (let i = 0; i < sectionThresholds.length; i++) {
      if (curScroll >= sectionThresholds[i] && curScroll < sectionThresholds[i + 1]) {
        if (section !== i) {
          onSectionChange(i); // Update the `section` state
        }
        break;
      }
    }

    // Handle the last section explicitly (>= 3)
    if (curScroll >= sectionThresholds[3]) {
      if (section !== 3) {
        onSectionChange(3); // Explicitly update to section 3
      }
    }

    lastScroll.current = curScroll;
  });

  return null;
};

export default ScrollManager;
