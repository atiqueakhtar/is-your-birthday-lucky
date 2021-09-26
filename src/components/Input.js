export default function Input(props) {
  let clickHandler = () => {
    let dob = document.querySelector("#inpute-date").value;
    let number = document.querySelector("#inpute-number").value;
    let n = dob.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (dob[i] === "-") continue;
      else {
        sum = sum + parseInt(dob[i]);
      }
    }
    console.log(sum);
    if (sum % number === 0) {
      props.setOutput(`Yayy! ${number} is your lucky number 😎`);
    } else {
      props.setOutput(`Ohh! ${number} is not your lucky number 😥`);
    }
  };
  return (
    <div>
      <div className="input-container">
        <label htmlFor="input-date">Enter date of birth: </label>
        <input id="inpute-date" type="date" placeholder="Enter date.." />
      </div>
      <div className="input-container">
        <label htmlFor="input-number">Enter your lucky number: </label>
        <input id="inpute-number" type="number" placeholder="Enter number.." />
      </div>
      <button onClick={clickHandler}>Check</button>
    </div>
  );
}
