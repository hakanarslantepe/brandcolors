import { getContrastYIQ } from "../helpers";

function Copied({ colorCopied }) {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${colorCopied}`,
        "--textColor": `${getContrastYIQ(colorCopied)}`,
      }}
    >
      Copied #{colorCopied} to Clipboard
    </div>
  );
}

export default Copied;