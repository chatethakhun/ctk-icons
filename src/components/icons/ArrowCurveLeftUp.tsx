import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowCurveLeftUp = (
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
      d="M20.4 20.6a.8.8 0 0 0 .8-.8v-6.286a4.8 4.8 0 0 0-4.8-4.8H5.531L9.48 4.766a.8.8 0 1 0-1.132-1.132L3.034 8.948a.8.8 0 0 0 0 1.132l5.314 5.314a.8.8 0 0 0 1.132-1.132L5.53 10.314H16.4a3.2 3.2 0 0 1 3.2 3.2V19.8a.8.8 0 0 0 .8.8"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowCurveLeftUp);
const Memo = memo(ForwardRef);
export default Memo;
