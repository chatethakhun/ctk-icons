import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpContained02 = (
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
      d="M7.51 10.723a.8.8 0 1 0 1.025 1.229zm4.49-2.7.512-.615a.8.8 0 0 0-1.024 0zm3.465 3.929a.8.8 0 0 0 1.025-1.23zM11.2 15.977a.8.8 0 1 0 1.6 0zm-2.665-4.025 3.977-3.315-1.024-1.23-3.978 3.316zm2.953-3.315 3.977 3.315 1.025-1.23-3.978-3.314zm-.288-.615v7.955h1.6V8.022zm6.598-1.82a8.2 8.2 0 0 1 0 11.596l1.132 1.132c3.827-3.828 3.827-10.033 0-13.86zm0 11.596a8.2 8.2 0 0 1-11.596 0L5.07 18.93c3.827 3.827 10.032 3.827 13.86 0zm-11.596 0a8.2 8.2 0 0 1 0-11.596L5.07 5.07c-3.827 3.827-3.827 10.032 0 13.86zm0-11.596a8.2 8.2 0 0 1 11.596 0L18.93 5.07c-3.828-3.827-10.033-3.827-13.86 0z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpContained02);
const Memo = memo(ForwardRef);
export default Memo;
