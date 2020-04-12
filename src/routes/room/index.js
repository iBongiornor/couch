import { h, Component } from "preact";
import style from "./style";
import { useState, useEffect, useRef } from "preact/hooks";

import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";

const Room = (props) => {
  const playerRoot = useRef(null);
  console.log(props.id);

  useEffect(() => {
    const dp = new DPlayer({
      container: playerRoot.current,
      screenshot: true,
      video: {
        url: "http://d3uuios94odbvs.cloudfront.net/akira/out.m3u8",
        type: "hls",
      },
      subtitle: {},
      danmaku: {},
    });
  }, []);
  return (
    <div class={style.room}>
      <div ref={playerRoot}></div>

      <div class={style.sofa}>
        <img src="/assets/sofa.png" />
      </div>
    </div>
  );
};

export default Room;

// export default class Profile extends Component {
//   state = {
//     time: Date.now(),
//     count: 10,
//   };

//   // update the current time
//   updateTime = () => {
//     this.setState({ time: Date.now() });
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   // gets called when this route is navigated to
//   componentDidMount() {
//     // start a timer for the clock:
//     this.timer = setInterval(this.updateTime, 1000);
//   }

//   // gets called just before navigating away from the route
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   // Note: `user` comes from the URL, courtesy of our router
//   render({ id }, { time, count }) {

//     return (
//       <div class={style.profile}>
//         <h1>Profile: {id}</h1>
//         <p>This is the user profile for a user named {id}.</p>

//         <div>Current time: {new Date(time).toLocaleString()}</div>

//         <p>
//           <button onClick={this.increment}>Click Me</button> Clicked {count}{" "}
//           times.
//         </p>
//       </div>
//     );
//   }
// }
