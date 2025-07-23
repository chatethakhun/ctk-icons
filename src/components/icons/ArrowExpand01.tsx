import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowExpand01 = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1em"
    height="1em"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M8 20H4m0 0v-4m0 4 4.5-4.5M16 4h4m0 0v4m0-4-4.5 4.5M4 8V4m0 0h4M4 4l4.5 4.5M20 16v4m0 0h-4m4 0-4.5-4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowExpand01);
const Memo = memo(ForwardRef);
export default Memo;
