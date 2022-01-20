import React from "react";
import "./Modal.css"

// Чтобы окно не закрывалось при нажание на контентную часть, мы вещаем e => e.stopPropagation
// если кликаем на модал черную область, ставим фалзе и закрываем
const Modal = ({ active, setActive, children }) => {
   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "Modal__container active" : "Modal__container"} onClick={e => e.stopPropagation()}>
            {children}
         </div>
      </div>
   );
}

export default Modal;