import React from 'react';

export default function bookDetails(props) {
 if (!props.bookDetails){
 return  <div></div>;
 } else {
   return (
     <div> 
        <div>Titel: {props.title}</div>
        <div>Författare: {props.author_name}</div>
        <div>Förlag: {props.publisher}</div>
        <div>Språk: {props.language}</div>
        <div>Ämne: {props.subject}</div>
     </div>
   );
 }
}