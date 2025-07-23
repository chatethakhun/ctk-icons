import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownRightContained = (
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
      d="M16.078 9.729a.8.8 0 0 0-1.593-.145zm-1.265 5.084.072.796a.8.8 0 0 0 .724-.724zm-5.23-.328a.8.8 0 1 0 .146 1.593zm.17-5.863a.8.8 0 0 0-1.131 1.131zm4.732.962-.47 5.156 1.594.145.469-5.156zm.255 4.432-5.156.469.145 1.593 5.156-.469zm.638.23L9.753 8.623 8.622 9.753l5.625 5.625zM20.2 12a8.2 8.2 0 0 1-8.2 8.2v1.6c5.412 0 9.8-4.388 9.8-9.8zM12 20.2A8.2 8.2 0 0 1 3.8 12H2.2c0 5.412 4.388 9.8 9.8 9.8zM3.8 12A8.2 8.2 0 0 1 12 3.8V2.2c-5.412 0-9.8 4.388-9.8 9.8zM12 3.8a8.2 8.2 0 0 1 8.2 8.2h1.6c0-5.412-4.388-9.8-9.8-9.8z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownRightContained);
const Memo = memo(ForwardRef);
export default Memo;
