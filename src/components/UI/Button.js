function Button(props) {
  const { type, isDisabled, version } = props;
  console.log(type, isDisabled, version)

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {props.children}
    </button>
  );
}

export default Button;
