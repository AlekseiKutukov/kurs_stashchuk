function ResetButton(props) {
  return (
    props.count > 0 && (
      <div>
        <button onClick={props.func}>Reset</button>
      </div>
    )
  );
}

export default ResetButton;
