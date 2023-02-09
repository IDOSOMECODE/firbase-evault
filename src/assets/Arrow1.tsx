import "./Arrow1.css";

export default function Arrow1(props: Arrow1Props) {
  return (
    <div className="arrow-1-arrow-1x">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 10.939 18.061 C 11.525 18.646 12.475 18.646 13.061 18.061 L 22.607 8.515 C 23.192 7.929 23.192 6.979 22.607 6.393 C 22.021 5.808 21.071 5.808 20.485 6.393 L 12 14.879 L 3.515 6.393 C 2.929 5.808 1.979 5.808 1.393 6.393 C 0.808 6.979 0.808 7.929 1.393 8.515 L 10.939 18.061 Z M 10.5 0 L 10.5 17 H 13.5 L 13.5 0 L 10.5 0 Z"
          fill="black"
         />
      </svg>
    </div>
  );
}

Arrow1.defaultProps = {};

interface Arrow1Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
