const Notification = (props) => {
  //  Write your code here.
  const { className, image, message } = props;
  console.log(className);
  return (
    <div className={`card-container ${className}`}>
      <img src={image} className="image" />
      <p className="paragraph">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Notifications</h1>
      <Notification
        className="blue-background"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="green-background"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="yellow-background"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="red-background"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
