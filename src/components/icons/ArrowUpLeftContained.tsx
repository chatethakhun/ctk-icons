import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpLeftContained = (
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
      d="M9.729 7.922a.8.8 0 0 0-.145 1.593zm5.084 1.265.796-.072a.8.8 0 0 0-.724-.724zm-.328 5.23a.8.8 0 1 0 1.593-.146zm-5.863-.17a.8.8 0 0 0 1.131 1.131zm.962-4.732 5.156.47.145-1.594-5.156-.469zm4.432-.255.469 5.156 1.593-.145-.469-5.156zm.23-.638-5.624 5.625 1.131 1.131 5.625-5.625zM20.2 12a8.2 8.2 0 0 1-8.2 8.2v1.6c5.412 0 9.8-4.388 9.8-9.8zM12 20.2A8.2 8.2 0 0 1 3.8 12H2.2c0 5.412 4.388 9.8 9.8 9.8zM3.8 12A8.2 8.2 0 0 1 12 3.8V2.2c-5.412 0-9.8 4.388-9.8 9.8zM12 3.8a8.2 8.2 0 0 1 8.2 8.2h1.6c0-5.412-4.388-9.8-9.8-9.8z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpLeftContained);
const Memo = memo(ForwardRef);
export default Memo;
