function FormInput(props: any) {
  const { validation, ...inputProps } = props;
  return <input {...inputProps} />;
}

export default FormInput;
