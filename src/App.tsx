import React, { useEffect, useState } from 'react'
import './App.css'
import qs, { stringify } from 'qs'
import { difference, isEqual, xor } from 'lodash'

function App() {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [leftParams, setLeftParams] = useState<{ key: string; value: any }[]>()
  const [rightParams, setRightParams] = useState<{ key: string; value: any }[]>()
  const [table, setTable] = useState<{ key: string; value1: any; value2: any }[]>([])

  useEffect(() => {
    if (left && right) {
      const _table = []
      const leftObj = qs.parse(left.split('?')[1], { ignoreQueryPrefix: true })
      const rightObj = qs.parse(right.split('?')[1], { ignoreQueryPrefix: true })
      console.log(leftObj, rightObj)
      const keySet = new Set<string>()
      Object.keys(leftObj).forEach((key) => {
        keySet.add(key)
      })
      Object.keys(rightObj).forEach((key) => {
        keySet.add(key)
      })
      const table = [...keySet.values()].map((key) => {
        const row: { value1: any; value2: any } | any = {}
        if (leftObj[key]) {
          row.value1 = leftObj[key]
        }
        if (rightObj[key]) {
          row.value2 = rightObj[key]
        }
        return { key, ...row }
      })
      setTable(table)
      // setLeftParams(lp)
      // setRightParams(rp)
    }
  }, [left, right])

  return (
    <div className="App">
      <div className="top">
        <div>
          <textarea value={left} onChange={(e) => setLeft(e.target.value)} rows={30} cols={30} />
        </div>
        <div>
          <textarea value={right} onChange={(e) => setRight(e.target.value)} rows={30} cols={30} />
        </div>
      </div>
      <div className="bottom">
        <table>
          <tbody>
            <tr>
              <td>key</td>
              <td width="30%">value1</td>
              <td width="30%">value2</td>
              <td width="30%">diff</td>
            </tr>
            {table.map(({ key, value1, value2 }) => {
              const diff = difference([value1], [value2])[0]
              const isMissing = !value1 || !value2

              return (
                <tr key={key}>
                  <td style={{ background: isMissing ? '#ed73a2' : 'transparent' }}>{key}</td>
                  <td width="30%">
                    {!value1
                      ? ''
                      : typeof value1 === 'object'
                      ? JSON.stringify(value1, null, 2)
                      : `${value1}`}
                  </td>
                  <td width="30%">
                    {!value2
                      ? ''
                      : typeof value2 === 'object'
                      ? JSON.stringify(value2, null, 2)
                      : `${value2}`}
                  </td>
                  <td width="30%">
                    {diff === null ? '' : typeof diff === 'object' ? JSON.stringify(diff) : diff}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
