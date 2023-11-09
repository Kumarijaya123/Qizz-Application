/* eslint-disable no-unused-vars */
import React from 'react'

function ResultTable() {
  return (
    <div>
        <table> 
            <thead className='table-header'>
                <tr className="table-row">
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Marks</td>
                    <td>Result</td>
                </tr>
            </thead>
                <tbody>
                    <tr className="table-body">
                        <td>Daily Challenges</td>
                        <td>03</td>
                        <td>25</td>
                        <td>Passed</td>

                    </tr>
                </tbody>
        </table>
    </div>
  )
}

export default ResultTable