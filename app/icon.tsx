import { ImageResponse } from "next/og"

// Route segment config
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation for dynamic Neobrutalist Favicon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "900",
          fontFamily: "monospace",
        }}
      >
        NB
      </div>
    ),
    {
      ...size,
    }
  )
}
