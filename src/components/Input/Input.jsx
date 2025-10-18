import './Input.css';

const Input = ({ className = '', error = false, ...props }) => {
  const errorClass = error ? 'input-error' : '';

  return (
    <input
      className={`input ${errorClass} ${className}`}
      {...props}
    />
  );
};

export default Input;
