'use client';
import Anchor from '@components/common/Anchor';
import athletics from '@assets/javelin-white.png';
import martial from '@assets/martial-white.png';
import { useEffect, useRef } from 'react';

export default function Departments() {
  const anchor1 = {
    text: 'ATLÉTIKA',
    href: '/departments/athletics',
    target: '',
    imgSrc: '/assets/kaiser-circle.jpg',
    img: athletics,
    imgAlt: 'Athletics',
    // imgWidth: 500,
    // imgHeight: 100,
  };

  const anchor2 = {
    text: 'KÖZELHARC',
    href: '/departments/fighting',
    target: '',
    imgSrc: '/assets/kaiser-circle.jpg',
    img: martial,
    imgAlt: 'Fighting',
    // imgWidth: 300,
    // imgHeight: 100,
  };

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.3, // 50% of target visible
      }
    );
    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    // Clean up the observer
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="initial" ref={targetRef}>
      <h1 className="text-center">SZAKOSZTÁLYAINK</h1>
      <main className="flex flex-wrap justify-evenly gap-10 sm:gap-0 py-20">
        <Anchor {...anchor1}></Anchor>
        <Anchor {...anchor2}></Anchor>
      </main>
    </div>
  );
}
