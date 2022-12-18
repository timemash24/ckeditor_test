import React, { useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';
// import ClassicEditor from '../ckeditor5/build/ckeditor';
// import ClassicEditor from '../ckeditor5/build/ckeditor';

function Editor({ onClick, editorLoaded, name, value }) {
  const [test, setTest] = useState('');

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            setTest(data);
          }}
          config={{
            mediaEmbed: {
              previewsInData: true,
            },
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
      <button onClick={() => onClick(test)}>전송</button>
    </div>
  );
}

export default Editor;
