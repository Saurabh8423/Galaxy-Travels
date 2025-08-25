import { FaTimes } from 'react-icons/fa';

const Modal = ({ handleClick}) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className="cross">
            <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
        </div>
        <h1>
          🚀 Your journey to the stars begins here!  
          Book your ticket today and secure an unforgettable experience of space
          travel. Limited seats are available — don’t miss out on this once-in-a-lifetime adventure!
        </h1>
      </div>
    </div>
  );
};

export default Modal

