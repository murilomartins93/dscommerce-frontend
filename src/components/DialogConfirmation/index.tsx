import Button from "../Button";

type Props = {
  message: string;
  onDialogAnswer: Function;
};

function DialogConfirmation({ message, onDialogAnswer }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false)}>
        {/* stopPropagation prevents closing by clicking on the dialog box */}
      <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation() }> 
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(false)}>
            <Button text="Não" />
          </div>
          <div onClick={() => onDialogAnswer(true)}>
            <Button text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogConfirmation;
