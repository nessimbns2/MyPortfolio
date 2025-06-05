import * as React from "react"

export default function AwsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="16" cy="24" rx="12" ry="4" fill="#FF9900"/>
      <rect x="10" y="8" width="12" height="8" rx="2" fill="#232F3E"/>
      <rect x="14" y="4" width="4" height="4" rx="1" fill="#FF9900"/>
    </svg>
  )
}
