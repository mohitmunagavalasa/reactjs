const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Boxes</h1>
      <div className="boxes-container">
        <Box className="yellow-background" text="Small" />
        <Box className="blue-background" text="Medium" />
        <Box className="pink-background" text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
