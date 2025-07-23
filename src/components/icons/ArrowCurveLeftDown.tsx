import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowCurveLeftDown = (
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
      d="M8.914 19.8 3.6 14.486m0 0 5.314-5.314M3.6 14.486h12.8a4 4 0 0 0 4-4V4.2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowCurveLeftDown);
const Memo = memo(ForwardRef);
export default Memo;
