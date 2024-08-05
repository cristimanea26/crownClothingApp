const Form = ({ label, ...otherProps }) => {
  return (
    <div className="form">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Form;
