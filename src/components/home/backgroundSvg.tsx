export const BackgroundSVG = ({ backgroundSvg }: { backgroundSvg: string }) => (
  <div
    className="absolute lg:-top-47 left-0 z-0 h-full min-h-screen w-full"
    style={{
      WebkitMaskImage: `
        linear-gradient(
          to right,
          black calc(80% - 2.5rem),
          transparent calc(80% - 2.5rem),
          transparent calc(80% + 2.5rem),
          black calc(80% + 2.5rem)
        )
      `,
      maskImage: `
        linear-gradient(
          to right,
          black calc(74% - 3.5rem),
          transparent calc(74% - 3.5rem),
          transparent calc(74% + 3.5rem),
          black calc(74% + 3.5rem)
        )
      `,
      // Optional if you need vendor prefixing
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "100% 100%",
      maskSize: "100% 100%",
    }}
  >
    <img src={backgroundSvg} alt="Background" className="h-full w-full" />
  </div>
);

// export const BackgroundSVG = ({ backgroundSvg }: { backgroundSvg: string }) => (
//   <div className=" absolute xl:-top-40 left-0 z-0 h-full min-h-screen w-full max-sm:top-66">
//     <img src={backgroundSvg} alt="Background" />
//   </div>
// );

// export const BackgroundSVG = ({ backgroundSvg }: { backgroundSvg: string }) => (
//   <div className="background-mask absolute left-0 z-0 sm:h-full  xl:-top-96  ">
//     <img
//       src={backgroundSvg}
//       alt="Background"
//     />
//   </div>
// );
 