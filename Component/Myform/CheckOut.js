import React, { Component } from "react";
import Validate from "./Validate";
import { Form, Col, InputGroup } from "react-bootstrap";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import CheckBox from "./components/CheckBox";
import Radio from "./components/Radio";
import Button from "./components/Button";
import Data from "./components/Data";

console.log(Data);

let initFormState = {

  firstname: {
    name: "firstname",
    title: "First Name",
    type: "text",
    value: "",
    placeholder: "First Name",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 4,
      maxLength: 8,
      isRequired: true,
      isAlpha: true,
      // isNumber: true
    },
  },

  lastname: {
    name: "lastname",
    title: "Last Name",
    type: "text",
    value: "",
    placeholder: "Last Name",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 4,
      maxLength: 8,
      isRequired: true,
      isAlpha: true,
      // isNumber: true
    },
  },
  my_email: {
    type: "text",
    value: "",
    placeholder: "What is your email",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
      isEmail: true,
    },
  },

  phone: {
    name: "phone",
    title: "Phone Number",
    type: "text",
    value: "",
    placeholder: "Enter the Phone Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 10,
      maxLength: 10,
      isRequired: true,
      isNumber: true,
    },
  },

  address: {
    type: "textarea",
    value: "",
    placeholder: "What is your address",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 8,
      isRequired: true,
    },
  },

  age: {
    name: "age",
    title: "Age",
    type: "text",
    value: "",
    placeholder: "Age",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 1,
      maxLength: 2,
      isRequired: true,
      isNumber: true,
    },
  },

  gender: {
    name: "gender",
    title: "gender",
    type: "radio",
    value: "",
    placeholder: "Gender",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "male", displayValue: "Male" },
      { value: "female", displayValue: "Female" },
      { value: "Others", displayValue: "Others" },
    ],
  },

  country: {
    name: "country",
    title: "country",
    type: "select",
    value: "",
    placeholder: "country",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "USA", displayValue: "USA" },
      { value: "India", displayValue: "India" },
      { value: "China", displayValue: "China" },
      { value: "Russia", displayValue: "Russia" },
    ],
  },

  zipcode: {
    name: "zipcode",
    title: "zipcode",
    type: "text",
    value: "",
    placeholder: "zipcode",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 6,
      maxLength: 6,
      isRequired: true,
      isNumber: true,
    },
  },
  Nominee: {
    type: 'select',
    value: [],
    placeholder: 'Select your nominee',
    valid: false,
    errorMsg: '',
    touched: false,
    validationRules: {
      isRequired: true,
    },
    multiple: true,
    options: [
      { value: 'mom', displayValue: 'mom' },
      { value: 'father', displayValue: 'father'},
      { value: 'son', displayValue: 'son'},
      { value: 'daughter', displayValue: 'daughter'}
    ]
  },

  AadharNumber: {
    name: "AadharNumber",
    title: "Aadhar Number",
    type: "text",
    value: "",
    placeholder: "Enter the Aadhar Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 11,
      maxLength: 11,
      isRequired: true,
      isNumber: true,
    },
  },
  PanNumber: {
    name: "PanNumber",
    title: "Pan Number",
    type: "text",
    value: "",
    placeholder: "Enter the Pan Number",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      minLength: 10,
      maxLength: 10,
      isRequired: true,
      isNumber: true,
    },
  },
  termsandconditions: {
    type: "checkbox",
    value: [],
    placeholder: "Technology",
    valid: false,
    errorMsg: "",
    touched: false,
    validationRules: {
      isRequired: true,
    },
    options: [
      { value: "Terms&conditions", displayValue: "Terms&conditions" },
      { value: "Privacy&Policy", displayValue: "Privacy&Policy" },
    ],
  },
};

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsValid: false,
      formControls: initFormState,
    };
  }
  componentDidMount() {
    const updatedControls = {
      ...this.state.formControls,
    };

    let formIsValid = true;
    for (let formElementId in updatedControls) {
      let ValidationResult = Validate(
        updatedControls[formElementId].value,
        updatedControls[formElementId].validationRules
      );
      updatedControls[formElementId].valid = ValidationResult.valid;
      // console.log(ValidationResult);
      if (
        !updatedControls[formElementId].valid &&
        updatedControls[formElementId].touched
      ) {
        updatedControls[formElementId].errorMsg = ValidationResult.errorMsg;
      } else {
        updatedControls[formElementId].errorMsg = "";
      }

      formIsValid = updatedControls[formElementId].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  }

  changeHandler = (event) => {
    const name = event.target.name;
    // console.log("Name : " + name);

    const updatedControls = {
      ...this.state.formControls,
    };

    const updatedFormElement = {
      ...updatedControls[name],
    };

    let value;
    let selectedOptions;
    let newValArray;

    if (
      updatedControls[name].value instanceof Array &&
      updatedControls[name].type === "select" &&
      updatedControls[name].multiple !== undefined &&
      updatedControls[name].multiple
    ) {
      selectedOptions = event.target.selectedOptions;
      newValArray = [...selectedOptions].map((option) => option.value);
      value = newValArray;
      // console.log("MultiSelect - Value : " + value);
    } else {
      value = event.target.value;
      if (
        updatedControls[name].value instanceof Array &&
        updatedControls[name].type === "checkbox"
      ) {
        // console.log("Before Checkbox Value : " + value);
        if (updatedControls[name].value.indexOf(value) > -1) {
          newValArray = updatedControls[name].value.filter((s) => s !== value);
        } else {
          newValArray = [...updatedControls[name].value, value];
        }
        value = newValArray;
        // console.log("Checkbox Value : " + value);
      } else {
        value = event.target.value;
        // console.log("Value : " + value);
      }
    }

    updatedFormElement.value = value;
    updatedFormElement.touched = true;

    let ValidationResult = Validate(value, updatedFormElement.validationRules);
    // console.log(ValidationResult);
    updatedFormElement.valid = ValidationResult.valid;
    if (!updatedFormElement.valid && updatedFormElement.touched) {
      updatedFormElement.errorMsg = ValidationResult.errorMsg;
    } else {
      updatedFormElement.errorMsg = "";
    }

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    this.setState({
      formControls: initFormState,
      formIsValid: false,
    });

    console.log(formData);
    console.table(formData);
  };

  handleClearForm = () => {
    this.setState({
      formControls: initFormState,
      formIsValid: false,
    });
  };

  render() {
    return (
      <div className="centermine">
      
        <Input
          inputType={"text"}
          title={this.state.formControls.firstname.title}
          name={this.state.formControls.firstname.name}
          placeholder={this.state.formControls.firstname.placeholder}
          value={this.state.formControls.firstname.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.firstname.touched}
          valid={this.state.formControls.firstname.valid}
          errorMsg={this.state.formControls.firstname.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.lastname.title}
          name={this.state.formControls.lastname.name}
          placeholder={this.state.formControls.lastname.placeholder}
          value={this.state.formControls.lastname.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.lastname.touched}
          valid={this.state.formControls.lastname.valid}
          errorMsg={this.state.formControls.lastname.errorMsg}
        />
        <Input
          inputType={"email"}
          title={"Email"}
          name={"my_email"}
          placeholder={this.state.formControls.my_email.placeholder}
          value={this.state.formControls.my_email.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.my_email.touched}
          valid={this.state.formControls.my_email.valid}
          errorMsg={this.state.formControls.my_email.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.phone.title}
          name={this.state.formControls.phone.name}
          placeholder={this.state.formControls.phone.placeholder}
          value={this.state.formControls.phone.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.phone.touched}
          valid={this.state.formControls.phone.valid}
          errorMsg={this.state.formControls.phone.errorMsg}
        />
        <TextArea
          title={"Address"}
          name={"address"}
          placeholder={this.state.formControls.address.placeholder}
          value={this.state.formControls.address.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.address.touched}
          valid={this.state.formControls.address.valid}
          errorMsg={this.state.formControls.address.errorMsg}
        />
        <Input
          inputType={"text"}
          title={this.state.formControls.age.title}
          name={this.state.formControls.age.name}
          placeholder={this.state.formControls.age.placeholder}
          value={this.state.formControls.age.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.age.touched}
          valid={this.state.formControls.age.valid}
          errorMsg={this.state.formControls.age.errorMsg}
        />
        <Radio
          title={this.state.formControls.gender.title}
          name={this.state.formControls.gender.name}
          handleChange={this.changeHandler}
          value={this.state.formControls.gender.value}
          options={this.state.formControls.gender.options}
          touched={this.state.formControls.gender.touched}
          valid={this.state.formControls.gender.valid}
          errorMsg={this.state.formControls.gender.errorMsg}
        />
        <Select
          title={this.state.formControls.country.title}
          name={this.state.formControls.country.name}
          placeholder={this.state.formControls.country.placeholder}
          value={this.state.formControls.country.value}
          handleChange={this.changeHandler}
          options={this.state.formControls.country.options}
          touched={this.state.formControls.country.touched}
          valid={this.state.formControls.country.valid}
          errorMsg={this.state.formControls.country.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.zipcode.name}
          title={this.state.formControls.zipcode.title}
          placeholder={this.state.formControls.zipcode.placeholder}
          value={this.state.formControls.zipcode.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.zipcode.touched}
          valid={this.state.formControls.zipcode.valid}
          errorMsg={this.state.formControls.zipcode.errorMsg}
        />
             <Select 
                  title={'Nominee'}
                  name={'Nominee'}
                  placeholder={this.state.formControls.Nominee.placeholder}
                  value={this.state.formControls.Nominee.value}
                  handleChange={this.changeHandler}
                  options={this.state.formControls.Nominee.options}
                  touched={this.state.formControls.Nominee.touched}
                  valid={this.state.formControls.Nominee.valid}
                  errorMsg={this.state.formControls.Nominee.errorMsg}
                  multiple={this.state.formControls.Nominee.multiple}
              />
        <Input
          inputType={"text"}
          name={this.state.formControls.PanNumber.name}
          title={this.state.formControls.PanNumber.title}
          placeholder={this.state.formControls.PanNumber.placeholder}
          value={this.state.formControls.PanNumber.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.PanNumber.touched}
          valid={this.state.formControls.PanNumber.valid}
          errorMsg={this.state.formControls.PanNumber.errorMsg}
        />
        <Input
          inputType={"text"}
          name={this.state.formControls.AadharNumber.name}
          title={this.state.formControls.AadharNumber.title}
          placeholder={this.state.formControls.AadharNumber.placeholder}
          value={this.state.formControls.AadharNumber.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.AadharNumber.touched}
          valid={this.state.formControls.AadharNumber.valid}
          errorMsg={this.state.formControls.AadharNumber.errorMsg}
        />
        <CheckBox
          title={"Company Terms"}
          name={"termsandconditions"}
          handleChange={this.changeHandler}
          value={this.state.formControls.termsandconditions.value}
          options={this.state.formControls.termsandconditions.options}
          touched={this.state.formControls.termsandconditions.touched}
          valid={this.state.formControls.termsandconditions.valid}
          errorMsg={this.state.formControls.termsandconditions.errorMsg}
        />
     
        <Button
          action={this.formSubmitHandler}
          type={"primary"}
          title={"checkout"}
          style={buttonStyle}
          disabled={!this.state.formIsValid}
        />
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
      </div>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px",
};

export default CheckOut;
