import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import chart from '@toast-ui/editor-plugin-chart';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-chart/dist/tui-chart.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { StyledButton } from '../components/style/StyledButton';

const Post = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  const articleRef = firebase.database().ref('article');
  const editorRef = useRef();
  const handleClickPostButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    const newArticle = {
      title: `${title}`,
      subTitle: `${subTitle}`,
      content: `${markdownContent}`,
    };
    articleRef.push(newArticle);
    window.history.back();
  };
  const handleChangeInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeInputsubTitle = (e) => {
    setSubTitle(e.target.value);
  };

  return (
    <PostStyle>
      <PostBoxWrapper>
        <PostBoxStyle>
          <PostBox>Title</PostBox>
          <PostInputStyle
            placeholder="Title"
            value={title}
            onChange={handleChangeInputTitle}
          />
        </PostBoxStyle>
        <PostBoxStyle>
          <PostBox>SubTitle</PostBox>
          <PostInputStyle
            placeholder="subTitle"
            value={subTitle}
            onChange={handleChangeInputsubTitle}
          />
        </PostBoxStyle>
      </PostBoxWrapper>
      <EditorStyle>
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
      </EditorStyle>
      <StyledButton onClick={handleClickPostButton}>Post</StyledButton>
    </PostStyle>
  );
};

export default Post;

const PostStyle = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 2.625rem 1.3125rem;
`;

const EditorStyle = styled.div`
  width: 200%;
`;

const PostBoxWrapper = styled.div``;

const PostBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 900;
  font-size: 1rem;
  margin-right: 5px;
`;

const PostBoxStyle = styled.div`
  margin: 5px 0;
  display: flex;
  width: 200%;
`;

const PostInputStyle = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-family: Montserrat, sans-serif;
  font-weight: 900;

  ::placeholder {
    color: #d3d3d3;
  }
`;
