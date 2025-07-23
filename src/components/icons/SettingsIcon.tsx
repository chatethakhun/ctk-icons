import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettingsIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 23 22"
    width="1em"
    height="1em"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#606876"
      strokeWidth={1.4}
      d="M13.037 3.957c-.392-1.61-2.682-1.61-3.074 0a1.58 1.58 0 0 1-2.357.977c-1.415-.862-3.034.757-2.172 2.172a1.58 1.58 0 0 1-.977 2.359c-1.61.39-1.61 2.68 0 3.07a1.58 1.58 0 0 1 .977 2.36c-.862 1.414.757 3.033 2.172 2.171a1.58 1.58 0 0 1 2.358.977c.391 1.61 2.682 1.61 3.072 0a1.58 1.58 0 0 1 2.358-.977c1.415.862 3.034-.757 2.172-2.172a1.58 1.58 0 0 1 .977-2.358c1.61-.391 1.61-2.682 0-3.071a1.58 1.58 0 0 1-.977-2.359c.862-1.415-.757-3.034-2.172-2.172a1.58 1.58 0 0 1-2.358-.976z"
      clipRule="evenodd"
    />
    <path
      stroke="#606876"
      strokeWidth={1.4}
      d="M13.333 11a1.833 1.833 0 1 1-3.666 0 1.833 1.833 0 0 1 3.666 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsIcon);
const Memo = memo(ForwardRef);
export default Memo;
