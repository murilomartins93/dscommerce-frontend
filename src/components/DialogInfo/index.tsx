import Button from "../Button";

type Props = {
  message: string;
  onDialogClose: Function;
};

function DialogInfo({ message, onDialogClose }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
        {/* stopPropagation prevents closing by clicking on the dialog box */}
      <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation() }> 
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container" onClick={() => onDialogClose()}>
          <Button text="OK" />
        </div>
      </div>
    </div>
  );
}

export default DialogInfo;
