import { route } from "preact-router";

const BottomAction = (props) => {
  const openRoom = () => {
    route("/room/nnnn");
  };
  return (
    <div class="actions">
      <a
        class="myButton"
        onClick={() => {
          openRoom();
        }}
      >
        order
      </a>
      <a class="myButton"> share</a>
    </div>
  );
};
export default BottomAction;
