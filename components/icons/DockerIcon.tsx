import * as React from "react"

export default function DockerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="7" y="17" width="2" height="3" fill="#2496ED"/>
      <rect x="11" y="17" width="2" height="3" fill="#2496ED"/>
      <rect x="15" y="17" width="2" height="3" fill="#2496ED"/>
      <rect x="19" y="17" width="2" height="3" fill="#2496ED"/>
      <rect x="23" y="17" width="2" height="3" fill="#2496ED"/>
      <path d="M5 20c2 4 10 6 18 2 2-1 3-3 3-5H5z" fill="#2496ED"/>
      <circle cx="25" cy="15" r="2" fill="#2496ED"/>
    </svg>
  )
}
