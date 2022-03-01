import React, {useEffect} from 'react';
import './modal.css';
import { useDispatch } from 'react-redux';
import { AddEvent } from '../states/slice';
import { useRef } from 'react';
import Event from '../event';
type ModalProps = {
  onCloseButtonClick: () => void;
  mon: ()=> string;
};

const Modal = (props: ModalProps) => {
  const { onCloseButtonClick } = props;
 

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const Add = () => {
    const title = titleRef.current?.value;
    const desc = descRef.current?.value;
    const date = props.mon();
    if (title && desc) {
      const event = { ...new Event(title, desc, date) };
      dispatch(AddEvent.add(event));
      titleRef.current.value = '';
      descRef.current.value = '';

      titleRef.current.focus();
    }
  };
  
 
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        <div className="events">
          <label>title</label>
          <br />
          <input ref={titleRef} type="text" className="title" />
          <br />
          <label>description</label>
          <br />
          <input ref={descRef} type="text" className="desc" />
          <button type="submit" onClick={Add}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
