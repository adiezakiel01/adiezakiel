import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "linear-gradient(135deg, #0f0a2e 0%, #4a2d5e 100%)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 700,
        color: "white",
        fontFamily: "sans-serif",
        letterSpacing: "-0.5px",
      }}
    >
      AE
    </div>,
    { ...size },
  );
}
