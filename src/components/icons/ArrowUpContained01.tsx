import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpContained01 = (
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
      d="M7.71 12.45a.8.8 0 1 0 1.025 1.229zm4.49-2.7.513-.615a.8.8 0 0 0-1.025 0zm3.466 3.929a.8.8 0 1 0 1.024-1.23zm-6.931 0 3.978-3.315-1.025-1.23-3.977 3.316zm2.953-3.315 3.978 3.315 1.024-1.23-3.977-3.314zM20.2 12a8.2 8.2 0 0 1-8.2 8.2v1.6c5.412 0 9.8-4.388 9.8-9.8zM12 20.2A8.2 8.2 0 0 1 3.8 12H2.2c0 5.412 4.388 9.8 9.8 9.8zM3.8 12A8.2 8.2 0 0 1 12 3.8V2.2c-5.412 0-9.8 4.388-9.8 9.8zM12 3.8a8.2 8.2 0 0 1 8.2 8.2h1.6c0-5.412-4.388-9.8-9.8-9.8z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpContained01);
const Memo = memo(ForwardRef);
export default Memo;
