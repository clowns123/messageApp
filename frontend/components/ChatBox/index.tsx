import { EditorState } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

const ChatBox = () => {
  const [content, setContent] = useState<EditorState>(EditorState.createEmpty());
  const onEditorStateChange = (e: any) => {
    console.log(e);
  };
  return (
    <DivStyle>
      <Editor
        editorState={content}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // onEditorStateChange={onEditorStateChange}
      />
    </DivStyle>
  );
};

const DivStyle = styled.div`
  .rdw-editor-main {
    height: 250px;
    /* overflow: auto; */
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #f1f1f1;
    bottom: 0;
    width: 100%;
  }
`;

export default ChatBox;
