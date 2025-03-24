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
  const autoGrow = (elem) =>{
    elem.current.style.height = "5px";
    elem.current.style.height = (10 + 
    elem.current.scrollHeight)+"px";
  }

const MainRender = (props) => {
    
    return (
        <main>
            <NoteInput>
            {props.showInput && (
          <Title 
            type="text" 
            placeholder="Title" 
            value={props.titleValue}
            onFocus={() => props.onTitleFocus(true)}
            onBlur={() => props.onTitleFocus(false)}
            onChange={(e) => props.onTitleChange(e.target.value)}
          />
        )}

        <TextArea
          cols="30"
          rows="1"
          placeholder="Take a note..." 
          value={props.textValue} 
          ref={props.textAreaRef} // Use the passed ref
          onFocus={() => {
            props.onShowInput(true);
            if (props.textAreaRef.current) {
              props.textAreaRef.current.focus();
            }
          }}  
          onInput={() => autoGrow(props.textAreaRef.current)} 
          onChange={(e) => props.onTextChange(e.target.value)}
        />
            </NoteInput>
        </main>
    )
}

export default MainRender;