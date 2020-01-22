import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './Home.module.css'

export const Home = () => {
  return (
    <div className={cn('container', style.main)}>
      <h1>Hello World</h1>
      <form>
        <div className="row">
          <div className="six columns">
            <label htmlFor="exampleEmailInput">Your email</label>
            <input
              className="u-full-width"
              type="email"
              placeholder="test@mailbox.com"
              id="exampleEmailInput"
            />
          </div>
          <div className="six columns">
            <label htmlFor="exampleRecipientInput">Reason htmlFor contacting</label>
            {/* <select className="u-full-width" id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select> */}
            <Select
              instanceId="select"
              className="react-select-container"
              classNamePrefix="react-select"
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          </div>
        </div>
        <label htmlFor="exampleMessage">Message</label>
        <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage" />
        <label className="example-send-yourself-copy">
          <input type="checkbox" />
          <span className="label-body">Send a copy to yourself</span>
        </label>
        <input className="button-primary" type="submit" value="Submit" />
      </form>
      <br />
      <Link to="/about">About</Link>
    </div>
  )
}
