import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate , onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            {/* onClick가 아니라 onChange요소를 사용한 이유:버튼이 아니라 input이기 때문 */}
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default memo(TodoItem);