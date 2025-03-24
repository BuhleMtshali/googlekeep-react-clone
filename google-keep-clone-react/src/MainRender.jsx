import React from "react";
import styled from "styled-components";
const NoteInput = styled.form`
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),
    0 2px 6px 2px rgba(60,64,67,.15);
    width:600px;
    border-radius:8px;
    margin:20px auto;
    padding:20px;
  `
  const Title = styled.input`
    border:none;
    color:#000;
    display:block;
    width:100%;
    font-size:18px;
    margin:10px 0;
    outline:none;
    &::placeholder{
      color:#3c4043;
      opacity:1;
    }
  `
  const TextArea = styled.textarea`
      border:none;
      color:#000;
      display:block;
      width:100%;
      font-family: 'Noto Sans', sans-serif;
      font-size:13px;
      font-weight:bold;
      outline:none;
      resize: none;
      overflow: hidden;
      min-height: 10px;
      &::placeholder{
        color:#3c4043;
        opacity:1;
      }
  `

const MainRender = () => {
    
    return (
        <main>
            <NoteInput>
                <Title type="text" placeholder="Title"/>
                <TextArea name="" id="" cols="30" rows="1" placeholder="Take a note..."/>
            </NoteInput>
        </main>
    )
}

export default MainRender;