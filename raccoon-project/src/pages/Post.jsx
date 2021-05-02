import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-chart/dist/tui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';
import 'highlight.js/styles/github.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';
import firebase from '../firebase';

const Post = () => {
  const [title, setTitle] = useState('');
  const [subContent, setSubContent] = useState('');

  const articleRef = firebase.database().ref('article');
  const editorRef = useRef();
  const handleClickPostButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContnent = editorInstance.getMarkdown();
    const newArticle = {
      title: `${title}`,
      subContent: `${subContent}`,
      contents: `${markdownContnent}`,
    };
    articleRef.push(newArticle);
  };
  const handleChangeInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeInputSubContent = (e) => {
    setSubContent(e.target.value);
  };

  return (
    <PostStyle>
      <Header />
      <input
        placeholder="input title"
        value={title}
        onChange={handleChangeInputTitle}
      />
      <input
        placeholder="input subContent"
        value={subContent}
        onChange={handleChangeInputSubContent}
      />
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="1000px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[
          chart,
          codeSyntaxHighlight,
          colorSyntax,
          tableMergedCell,
          uml,
        ]}
        ref={editorRef}
      />
      <button onClick={handleClickPostButton}>post</button>
    </PostStyle>
  );
};

export default Post;

const PostStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  font-family: 'Merriweather', 'Georgia', serif;
  font-weight: 400;
  font: 100%/1.75 'Merriweather', 'Georgia', serif;
`;
