import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownContained02 = (
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
      d="M16.49 13.278a.8.8 0 1 0-1.025-1.23zm-4.49 2.7-.512.614a.8.8 0 0 0 1.024 0zm-3.465-3.93a.8.8 0 1 0-1.025 1.23zM12.8 8.023a.8.8 0 0 0-1.6 0zm2.665 4.025-3.977 3.315 1.024 1.23 3.978-3.315zm-2.953 3.315-3.977-3.315-1.025 1.23 3.978 3.314zm.288.614V8.023h-1.6v7.954zm4.998 1.821a8.2 8.2 0 0 1-11.596 0L5.07 18.93c3.827 3.827 10.032 3.827 13.86 0zm-11.596 0a8.2 8.2 0 0 1 0-11.596L5.07 5.07c-3.827 3.827-3.827 10.032 0 13.86zm0-11.596a8.2 8.2 0 0 1 11.596 0L18.93 5.07c-3.828-3.827-10.033-3.827-13.86 0zm11.596 0a8.2 8.2 0 0 1 0 11.596l1.132 1.132c3.827-3.828 3.827-10.033 0-13.86z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownContained02);
const Memo = memo(ForwardRef);
export default Memo;
