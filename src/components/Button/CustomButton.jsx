import './CustomButton.css';

const Button = ({ children, variant = 'default', size = 'default', className = '', disabled = false, loading = false, ...props }) => {
  const variantClass = `button-${variant}`;
  const sizeClass = `button-${size}`;
  const loadingClass = loading ? 'button-loading' : '';
  const disabledClass = disabled ? 'button-disabled' : '';

  return (
    <button
      className={`button ${variantClass} ${sizeClass} ${loadingClass} ${disabledClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
