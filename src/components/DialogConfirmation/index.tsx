import Button from "../Button";

type Props = {
  id: number;
  message: string;
  onDialogAnswer: Function;
};

function DialogConfirmation({ id, message, onDialogAnswer }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false, id)}>
        {/* stopPropagation prevents closing by clicking on the dialog box */}
      <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation() }> 
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(false, id)}>
            <Button text="Não" />
          </div>
          <div onClick={() => onDialogAnswer(true, id)}>
            <Button text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogConfirmation;
