import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftContained02 = (
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
      d="M10.723 16.49a.8.8 0 1 0 1.229-1.025zM8.023 12l-.615-.512a.8.8 0 0 0 0 1.024zm3.929-3.465a.8.8 0 1 0-1.23-1.025zm4.025 4.265a.8.8 0 1 0 0-1.6zm-4.025 2.665-3.315-3.977-1.23 1.024 3.316 3.978zm-3.315-2.953 3.315-3.977-1.23-1.025-3.314 3.978zm-.615.288h7.955v-1.6H8.022zm-1.82-6.598a8.2 8.2 0 0 1 11.596 0L18.93 5.07c-3.828-3.827-10.033-3.827-13.86 0zm11.596 0a8.2 8.2 0 0 1 0 11.596l1.132 1.132c3.827-3.828 3.827-10.033 0-13.86zm0 11.596a8.2 8.2 0 0 1-11.596 0L5.07 18.93c3.827 3.827 10.032 3.827 13.86 0zm-11.596 0a8.2 8.2 0 0 1 0-11.596L5.07 5.07c-3.827 3.827-3.827 10.032 0 13.86z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftContained02);
const Memo = memo(ForwardRef);
export default Memo;
