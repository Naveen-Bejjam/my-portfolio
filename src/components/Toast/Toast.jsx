import { useState, useEffect } from 'react';
import './Toast.css';

let toastIdCounter = 0;
const toastListeners = new Set();

export const toast = ({ title, description, variant = 'default', duration = 5000 }) => {
  const id = toastIdCounter++;
  const toastData = { id, title, description, variant, duration };
  
  toastListeners.forEach(listener => listener(toastData));
  
  return {
    id,
    dismiss: () => {
      toastListeners.forEach(listener => listener({ id, dismiss: true }));
    }
  };
};

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (toastData) => {
      if (toastData.dismiss) {
        setToasts(prev => prev.filter(t => t.id !== toastData.id));
      } else {
        setToasts(prev => [...prev, toastData]);
        
        if (toastData.duration) {
          setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== toastData.id));
          }, toastData.duration);
        }
      }
    };

    toastListeners.add(listener);
    return () => toastListeners.delete(listener);
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map(({ id, title, description, variant }) => (
        <div key={id} className={`toast toast-${variant}`}>
          <div className="toast-content">
            {title && <div className="toast-title">{title}</div>}
            {description && <div className="toast-description">{description}</div>}
          </div>
          <button 
            className="toast-close" 
            onClick={() => removeToast(id)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
