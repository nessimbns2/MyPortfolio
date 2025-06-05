import * as React from "react"

export default function GitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="14" width="20" height="4" rx="2" fill="#F05033"/>
      <circle cx="10" cy="16" r="3" fill="#F05033"/>
      <circle cx="22" cy="16" r="3" fill="#F05033"/>
    </svg>
  )
}
