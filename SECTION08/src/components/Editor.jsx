import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onsubmit = () => {
        if(content === ""){
            return;
        }
        onCreate(content);
    }
    return (
        <div className="Editor">
            <input ref={contentRef} value={content} onChange={onChangeContent} placeholder="새로운 Todo..." />
            <button onClick={onsubmit}>추가</button>
        </div>
    );
}

export default Editor;