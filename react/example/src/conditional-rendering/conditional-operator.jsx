const renderNotification = (text) => ({
  success: <Success text={text} />,
  error: <Error text={text} />,
  info: <Info text={text} />,
  warning: <Warning text={text} />,
});

const Notification = ({ text, state }) => {
return (
 <div>
   {renderNotification(text)[state]}
 </div>
);
}