import { h } from "preact";
import style from "./style";
import MovieSwiper from "@/components/movie_swiper";
import BottomActions from "@/components/bottom_actions";
import datas from "@/assets/movie.json";
import { useState, useEffect, useRef } from "preact/hooks";
const Home = (props) => {
  const [mindex, setMindex] = useState(0);
  const changeMovie = (i) => {
    setMindex(i);
  };
  console.log("rerender", mindex);
  return (
    <div class={style.home}>
      <MovieSwiper shuffle={changeMovie} />
      <MovieDetail detail={datas[mindex]} />

      <BottomActions mindex={mindex} />
    </div>
  );
};

const MovieDetail = (props) => {
  const d = props.detail;
  return (
    <div class={style.mdetail}>
      <h2>{d.name}</h2>
      <dl>
        <dt>导演</dt>
        <dd>{d.director}</dd>
        <dt>上映日期</dt>
        <dd>{d.date}</dd>
        <dt>简介</dt>
        <dd>{d.brief}</dd>
      </dl>
    </div>
  );
};
export default Home;
