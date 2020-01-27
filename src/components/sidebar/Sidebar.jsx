import React from 'react'
import style from './Sidebar.module.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <a>
        <img src="/fabric.png" alt="fabric" width={20} height={20} /> Fabric
      </a>
      <a>
        <img src="/heckert_gnu.png" alt="fabric" width={20} height={20} /> Make
      </a>
    </div>
  )
}
