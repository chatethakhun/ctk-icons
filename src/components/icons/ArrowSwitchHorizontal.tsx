import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowSwitchHorizontal = (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M6.94 2.434a.8.8 0 0 1 0 1.132L4.932 5.575H21a.8.8 0 0 1 0 1.6H4.931l2.01 2.01a.8.8 0 1 1-1.132 1.13L2.434 6.942a.8.8 0 0 1 0-1.132L5.81 2.434a.8.8 0 0 1 1.132 0m10.12 11.25a.8.8 0 0 1 1.13 0l3.376 3.375a.8.8 0 0 1 0 1.132l-3.375 3.375a.8.8 0 1 1-1.132-1.132l2.01-2.009H3a.8.8 0 0 1 0-1.6h16.069l-2.01-2.01a.8.8 0 0 1 0-1.13"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowSwitchHorizontal);
const Memo = memo(ForwardRef);
export default Memo;
