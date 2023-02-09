import "./Arrow2.css";

export default function Arrow2(props: Arrow2Props) {
  return (
    <div className="arrow-2-arrow-2x">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 13.061 0.939 C 12.475 0.354 11.525 0.354 10.939 0.939 L 1.393 10.485 C 0.808 11.071 0.808 12.021 1.393 12.607 C 1.979 13.192 2.929 13.192 3.515 12.607 L 12 4.121 L 20.485 12.607 C 21.071 13.192 22.021 13.192 22.607 12.607 C 23.192 12.021 23.192 11.071 22.607 10.485 L 13.061 0.939 Z M 13.5 19 L 13.5 2 H 10.5 L 10.5 19 H 13.5 Z"
          fill="black"
         />
      </svg>
    </div>
  );
}

Arrow2.defaultProps = {};

interface Arrow2Props {}

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
