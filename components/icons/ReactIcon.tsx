import * as React from "react";
import { SiReact } from "react-icons/si";

export default function ReactIcon(props: React.ComponentProps<typeof SiReact>) {
  return <SiReact {...props} />;
}
