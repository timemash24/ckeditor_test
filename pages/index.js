import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';

// https://vimeo.com/306783762

export default function Home() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>
      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

      {data}
    </div>
  );
}
