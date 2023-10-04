const ChildTwo = (props) => {

  const {y}=props;
    
    return (
      <div className="child second">
        <div>
         <h4>{props.message}</h4>
        </div>
      </div>
    );
  };
  
  export default ChildTwo;