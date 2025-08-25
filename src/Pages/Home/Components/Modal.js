import { FaTimes } from 'react-icons/fa';

const Modal = ({ handleClick}) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className="cross">
            <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, atque dolore veritatis nulla rem cum animi ab explicabo nisi quaerat dolores ex necessitatibus. Voluptatibus, porro! Obcaecati, ipsam! Deserunt, laboriosam exercitationem.
            
        </h1>
      </div>
    </div>
  );
};

export default Modal

