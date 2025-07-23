import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowExpand03 = (
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
      d="M14.207 3.2a.8.8 0 0 0 0 1.6zM20 4h.8a.8.8 0 0 0-.8-.8zm-.8 5.793a.8.8 0 0 0 1.6 0zm-5.96.966-.565-.566zM9.794 20.8a.8.8 0 0 0 0-1.6zM4 20h-.8a.8.8 0 0 0 .8.8zm.8-5.793a.8.8 0 0 0-1.6 0zM14.207 4.8H20V3.2h-5.793zM19.2 4v5.793h1.6V4zm.234-.566-6.759 6.759 1.132 1.131 6.759-6.758zM9.794 19.2H4v1.6h5.793zM4.8 20v-5.793H3.2V20zm-.234.566 9.24-9.242-1.13-1.131-9.242 9.241z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowExpand03);
const Memo = memo(ForwardRef);
export default Memo;
