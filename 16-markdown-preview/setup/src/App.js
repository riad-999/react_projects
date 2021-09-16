import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown,setMarkDown] = useState('## markdown preview');
  return (
    <main>
      <section className="markdown">
        <textarea className="input" value={markDown}
         onChange={(event) => setMarkDown(event.currentTarget.value)}
         ></textarea>
         <article className="result">
           <ReactMarkdown>{markDown}</ReactMarkdown>
          </article>
      </section>
    </main>
  );
}

export default App
