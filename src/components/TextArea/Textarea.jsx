import './Textarea.css';

const Textarea = ({ className = '', error = false, ...props }) => {
  const errorClass = error ? 'textarea-error' : '';

  return (
    <textarea
      className={`textarea ${errorClass} ${className}`}
      {...props}
    />
  );
};

export default Textarea;
