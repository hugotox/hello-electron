import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './Home.module.css'
import { Sidebar } from '../sidebar/Sidebar'

export const Home = () => {
  return (
    <div className={style.main}>
      <Sidebar />
      hello world
    </div>
  )
}
