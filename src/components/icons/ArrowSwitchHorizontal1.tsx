import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowSwitchHorizontal1 = (
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
      d="M5.575 3a.8.8 0 0 1 1.596-.082L7.175 3v16.07l2.01-2.01a.8.8 0 1 1 1.13 1.13L6.94 21.565a.8.8 0 0 1-1.13 0L2.435 18.19l-.055-.06a.8.8 0 0 1 1.125-1.125l.06.055 2.01 2.01zm11.25 18V4.93l-2.01 2.01a.8.8 0 1 1-1.13-1.13l3.375-3.375.058-.054a.8.8 0 0 1 1.073.054l3.375 3.375.054.06a.8.8 0 0 1-1.125 1.125l-.06-.055-2.01-2.01V21l-.004.082a.8.8 0 0 1-1.592 0z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowSwitchHorizontal1);
const Memo = memo(ForwardRef);
export default Memo;
