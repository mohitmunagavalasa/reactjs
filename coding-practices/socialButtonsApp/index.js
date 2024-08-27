const Button = (props) => {
  //  Write your code here.
  const { cls, name } = props;
  //   console.log(cls);
  //   console.log(<button className={cls}>{name}</button>);
  return <button className={cls}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="btn-container">
      <Button cls="btn btn1" name="Like" />
      <Button cls="btn btn2" name="Comment" />
      <Button cls="btn btn3" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
