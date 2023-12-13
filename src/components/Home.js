import { useNavigate } from "react-router-dom";

export default function Home() {
  const naviage = useNavigate();
  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Select room</h2>
      <p style={{ textAlign: "center" }}>Click on a camera icon to start</p>

      <div
        onClick={() => naviage("/form")}
        style={{
          display: "inline-block",
          position: "relative",
        }}
      >
        <img src="./background_image.png" />
        <div
          onClick={() => naviage("/form")}
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          style={{ position: "absolute", top: "50%", left: "20px" }}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <img src="./camera_image.png" />
        </div>
        <div
          onClick={() => naviage("/form")}
          style={{ position: "absolute", top: "20px", left: "50%" }}
        >
          <img src="./camera_image.png" />
        </div>
      </div>
    </div>
  );
}
