type Props = {
  children: string;
};

const StyledHeading = (props: Props) => {
  return (
    <h2 className="style1" attr-title={props.children}>
      {props.children}
    </h2>
  );
};

export default StyledHeading;
