import { createPortal } from "react-dom";

function Modal(props) {
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,.3)",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={props.onClose}
    >
      <div
        style={{
          padding: "1rem",
          background: "#fff",
          borderRadius: 2,
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.message}</p>

        <button
          style={{ float: "right", cursor: "pointer" }}
          onClick={props.onClose}
        >
          OK
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;
