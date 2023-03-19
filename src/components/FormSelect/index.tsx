import Select from "react-select";

function FormSelect(props: any) {

  const {
    className,
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...inputProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <div data-invalid={invalid} data-dirty={dirty} className={className}>
      <Select {...inputProps} onBlur={handleBlur} />
    </div>
  );
}

export default FormSelect;
