import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightContained02 = (
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
      d="M13.278 7.51a.8.8 0 1 0-1.23 1.025zm2.7 4.49.614.512a.8.8 0 0 0 0-1.024zm-3.93 3.465a.8.8 0 1 0 1.23 1.025zM8.023 11.2a.8.8 0 0 0 0 1.6zm4.025-2.665 3.315 3.977 1.23-1.024-3.315-3.978zm3.315 2.953-3.315 3.977 1.23 1.025 3.314-3.978zm.614-.288H8.023v1.6h7.954zm1.821-4.998a8.2 8.2 0 0 1 0 11.596l1.132 1.132c3.827-3.828 3.827-10.033 0-13.86zm0 11.596a8.2 8.2 0 0 1-11.596 0L5.07 18.93c3.827 3.827 10.032 3.827 13.86 0zm-11.596 0a8.2 8.2 0 0 1 0-11.596L5.07 5.07c-3.827 3.827-3.827 10.032 0 13.86zm0-11.596a8.2 8.2 0 0 1 11.596 0L18.93 5.07c-3.828-3.827-10.033-3.827-13.86 0z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRightContained02);
const Memo = memo(ForwardRef);
export default Memo;
