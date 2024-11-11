import Title from "../components/Title";
import Description from "../components/Description";

const Content = (props) => {
  console.log("props Content => " + props);

  return (
    <>
      <div className={props.bg}>
        <Title name={props.name} />
        <Description text={props.text} />
      </div>
    </>
  );
};

export default Content;
