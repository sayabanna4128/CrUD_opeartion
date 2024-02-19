import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css"
function Home() {
  return (
    <section id={style.nav}>
      <Link to="/">CreateUser</Link>
      <Link to="/users">Users</Link>
    </section>
  );
}
export default Home
