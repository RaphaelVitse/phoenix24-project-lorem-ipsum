const Title = (props) => {
  console.log("props title => " + props);
  return <h1>{props.name}</h1>;
};

export default Title;
