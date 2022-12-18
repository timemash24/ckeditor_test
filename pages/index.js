import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
// import Editor from '../components/Editor';

// https://vimeo.com/306783762

export default function Home() {
  const Editor = dynamic(() => import('../components/Editor'), { ssr: false });
  const [editorLoaded, setEditorLoaded] = useState(false);
  const resultView = useRef(null);

  const onClick = (str) => {
    if (resultView.current) {
      resultView.current.innerHTML = `<h2>html결과 view입니다</h2>${str}`;
    }
  };
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>
      <Editor
        name="description"
        onClick={onClick}
        editorLoaded={editorLoaded}
      />
      <div ref={resultView} />
    </div>
  );
}
