"use client";
export default function ClientButton(props) {
  return (
    <button
      className={props.classes}
      type={props.type}
      onClick={(e) => {
        document.querySelector(".colors").classList.toggle("on");
        e.target.classList.toggle("on");
      }}
    >
      {props.children}
    </button>
  );
}
