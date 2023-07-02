const About = ({ getNumber, setNumber }) => {
  function change() {
    setNumber(getNumber++);
  }
  return (
    <div>
      About
      <div>{getNumber}</div>
      <button onClick={change}>+</button>
    </div>
  );
};

export default About;
