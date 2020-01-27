import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './Home.module.css'
import { Sidebar } from '../sidebar/Sidebar'

export const Home = () => {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.main}>
        <h4>Show deployed code</h4>
        <form>
          <div className="margin-bottom">
            <label htmlFor="">Branch</label>
            <input type="text" />
          </div>
          <div className="margin-bottom">
            <label htmlFor="">Target</label>
            <input type="text" />
          </div>
          <div className={cn('margin-bottom', style.previewCmd)}>
            fab deploy_test:branch=test,target=test
          </div>
          <div className="margin-bottom">
            <button>RUN</button>
          </div>
        </form>
        <label>Output</label>
        <div className={style.output}>
          fab deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test fab
          deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test fab
          deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test fab
          deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test fab
          deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test fab
          deploy_test:branch=test,target=test fab deploy_test:branch=test,target=test
        </div>
      </div>
    </div>
  )
}
