import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCheckIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 21"
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
      d="M16.945 13.028a.667.667 0 0 1 .943.943l-4 4a.67.67 0 0 1-.894.045l-.049-.045-1.833-1.833a.667.667 0 0 1 .943-.943l1.361 1.362zm-7.861-1.194a.667.667 0 0 1 0 1.332h-3a.667.667 0 0 1 0-1.332zM14.917 10V4.5c0-.736-.597-1.333-1.334-1.333h-9c-.736 0-1.333.597-1.333 1.333v12c0 .736.597 1.334 1.334 1.334h4a.666.666 0 1 1 0 1.333h-4A2.667 2.667 0 0 1 1.917 16.5v-12a2.667 2.667 0 0 1 2.667-2.666h9A2.667 2.667 0 0 1 16.25 4.5V10a.667.667 0 0 1-1.333 0m-2.833-1.167a.667.667 0 0 1 0 1.334h-6a.667.667 0 0 1 0-1.334zm0-3a.667.667 0 0 1 0 1.333h-6a.667.667 0 0 1 0-1.333z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFileCheckIcon);
const Memo = memo(ForwardRef);
export default Memo;
