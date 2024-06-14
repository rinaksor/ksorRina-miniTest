import React from "react";

function Scores({courseName, courseResults}) {
    return (
        <main className="scores-container">
        <div class="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {courseResults.map((results, index)=>
                <tr key={index}>
                <td>{results.firstName}</td>
                <td>{results.lastName}</td>
                <td>{results.score}</td>
                </tr>
        )}
            </tbody>
          </table>
        </div>
      </main>
      
    );
  }
  
  export default Scores;