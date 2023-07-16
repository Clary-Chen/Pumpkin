import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import classNames from 'classnames'
import dayjs from 'dayjs'
import '../../styles/MeCalendar.less'

export default class MeCalendar extends Component {
  render() {
    return (
      <div className='MeCalendar'>
         <Calendar
          renderDate={date => {
            const dates = [16, 17, 18, 19]
            const d = dayjs(date).date()
            return (
              <div
                className={classNames('custom-cell', {
                  ['custom-cell-selected']: dates.includes(d),
                })}
              >
                {d}
              </div>
            )
          }}
        />
      </div>
    )
  }
}
