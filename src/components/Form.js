import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

// form validation
const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  size: yup.string().required("Select a Size"),
  pepperoni: yup.boolean().defined(),
  sausage: yup.boolean().defined(),
  bacon: yup.boolean().defined(),
  ham: yup.boolean().defined(),
  special: yup.string().notRequired(),
});

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    bacon: false,
    ham: false,
    special: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    ham: "",
    special: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [post, setPost] = useState([]);

  //   Input change

  const inputChange = (e) => {
    const newFormState = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };

    validateChange(e);
    setFormState(newFormState);
  };

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        console.log(res.data.size);
        setFormState({
          name: "",
          size: res.data.size,
          pepperoni: false,
          sausage: false,
          bacon: false,
          ham: false,
          special: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  return (
    <>
      <h1>Build Your Pizza</h1>
      <div>
        <form onSubmit={formSubmit}>
          <div>
            <h2>Choose Size :</h2>
            <select>
              <option value="" selected>
                - Select -
              </option>
              <option value="small">Small (10 in)</option>
              <option value="medium">Medium (12 in)</option>
              <option value="large">Large (14 in)</option>
              <option value="x-large">X-large (18 in)</option>
            </select>
          </div>

          <div>
            <h2>Choose Sauce :</h2>
            <label htmlFor="pepperoni">
              <input
                type="checkbox"
                name="pepperoni"
                id="pepperoniCheckBox"
                checked={formState.pepperoni}
                onChange={inputChange}
              />
              Pepperoni
            </label>

            <label htmlFor="sausage">
              <input
                type="checkbox"
                name="sausage"
                id="sausageCheckBox"
                checked={formState.sausage}
                onChange={inputChange}
              />
              Sasuage
            </label>

            <label htmlFor="bacon">
              <input
                type="checkbox"
                name="bacon"
                id="baconCheckBox"
                checked={formState.bacon}
                onChange={inputChange}
              />
              Bacon
            </label>

            <label htmlFor="ham">
              <input
                type="checkbox"
                name="ham"
                id="hamCheckBox"
                checked={formState.ham}
                onChange={inputChange}
              />
              Ham
            </label>

            <label htmlFor="Special Instructions">
              <h3>Any special instructions?</h3>
              <br />
              <textarea
                name="special"
                id="special"
                placeholder="specify instructions here..."
                value={formState.special}
                onChange={inputChange}
              />
            </label>
          </div>
          <button id="submit" disabled={buttonDisabled}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;