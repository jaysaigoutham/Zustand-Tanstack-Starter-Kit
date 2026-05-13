
import { useField } from "./useField";
import useLocalStorage from "./../../localStorage/localStorage,js";

export const FormHook = () => {
  const name = useField("text");
  const date = useField("date");
  const number = useField("number");

  const [text, setText] = useLocalStorage("text", "");

  return (
    <div>
      <form>
        name:
        <input type={name.type} value={name.value} onChange={name.onChange} />
        <input {...name}/>
        <br />
        birthdate:
        <input type={date.type} value={date.value} onChange={date.onChange} />
        <input {...date}/>
        <br />
        height:
        <input
          type={number.type}
          value={number.value}
          onChange={number.onChange}
        />
        <input {...number}/>
      </form>
      <div>
        {name.value} || {date.value} || {number.value}
      </div>

      <br></br>
      <br></br>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <p>Hello {text}! (stored in local storage ,will survive refresh)</p>

      </div>
    </div>
  );
};
