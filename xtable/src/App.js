import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

let tableContent = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {

  let [displayContent, setDisplayContent] = useState(tableContent)

  let handleDateSort = () => {
    tableContent.sort((a,b) => {
      const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;

  // If dates are equal, compare by views
  if (a.views < b.views) return 1;
  if (a.views > b.views) return -1;

  return 0; // If dates and views are equal
    })
    setDisplayContent(tableContent)
  }

  let handleViewsSort = () => {
    tableContent.sort((a,b) => {
      const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  

  // If dates are equal, compare by views
  if (a.views < b.views) return 1;
  if (a.views > b.views) return -1;

  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;

  return 0; // If dates and views are equal
    })
    setDisplayContent(tableContent)
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}>sort by date</button><button onClick={handleViewsSort}>sort by views</button>
      <div className="tableContent">
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        </thead>
        <tbody>
            {
              displayContent.map((content) => {
                return <tr>
                    <td>{content.date}</td>
                    <td>{content.views}</td>
                    <td>{content.article}</td>
                </tr>
              })
            }
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
