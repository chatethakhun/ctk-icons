import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowExpand02 = (
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
      d="M14.206 4H20m0 0v5.793M20 4l-5.794 5.793M9.794 20H4m0 0v-5.793M4 20l6-6m9.999.206V20m0 0h-5.793M20 20l-5.793-5.794M4 9.794V4m0 0h5.793M4 4l6 6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowExpand02);
const Memo = memo(ForwardRef);
export default Memo;
