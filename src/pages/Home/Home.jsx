import React from 'react'
import style from "./Home.module.css"
import img from "../../assets/hero/home.png"

export const Home = () => {
  return (
    <main className={style['home']}>
      <div className={style['hero']}>
        <div className={style['content']}>Lorem ajskdja eosaidod</div>
        <div className={style['background']}>
          <img className={style['background-img']} src={img}  />
        </div>
      </div>
    </main>
  )
}
