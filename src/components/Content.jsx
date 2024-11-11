import Title from "../components/Title";
import Description from "../components/Description";

const Content = (props) => {
  console.log("props Content => " + props);

  return (
    <>
      <div className={props.bg}></div>
    </>
  );
};

export default Content;
