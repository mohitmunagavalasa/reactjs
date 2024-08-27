const Welcome = (props) => <h1 className={props.className}>{props.message}</h1>;
const Greet = () => {
  return (
    <div>
      <Welcome className={"greeting"} message={"Hello, mohit"} />
      <Welcome className={"greeting"} message={"hi, neeraj"} />
    </div>
  );
};

ReactDOM.render(<Greet />, document.getElementById("root"));
