import icon from "./../assets/svg/icon-dice.svg";

export default function Button({ apiClick }) {
  return (
    <button onPointerDown={apiClick}>
      <img src={icon} alt="Icon" />
    </button>
  );
}
