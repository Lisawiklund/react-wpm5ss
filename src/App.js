import React from 'react';
import React, { useState, useEffect } from 'react';
import './style.css';
import BookDetails from "./BookDetails"

const SliceBooks = 1;

function ResultTable(props) {
return (
<table>
<thead>
<tr>
<th>Titel</th>
<th>Författare</th>
<th>Första Utgivningsår</th>
</tr>
</thead>
<tbody>
{props.data.slice(0, 30).map((result, index) => {
return (
<tr key={index} onClick={() => props.displayBook(index)}>
<td>{result.title}</td>
<td>{result.author_name}</td> 
<td>{result.first_publish_year}</td>
</tr>
);
})}
</tbody>
</table>
);
}

export default function App() {
const [query, setQuery] = useState('');
const [result, setResult] = useState([]);
const [activBook, setActivBook] = useState(null);



function search() {
let uri = 'https://openlibrary.org/search.json?title=' + query;
fetch(uri)
.then((response) => response.json())
.then((data) => setResult(data.docs));
}

function displayBook (index) {
  setActivBook([index]);
}

return (
<div style={{ padding: "30px", backgroundColor: "pink" }}>
<h1>Sök på en film</h1>
<input
type="text"
value={query}
onChange={(event) => setQuery(event.target.value)}
/>
<button onClick={() => search()}>SÖK</button>
<BookDetails BookDetails={activBook}/>
<ResultTable data={result} displayBook={displayBook} />
</div>
);
}