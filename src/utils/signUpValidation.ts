function validation(values: any) {
  const error = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  };
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const phoneNoPattern = /^\d{12,}$/;

  if (values.userName === "") {
    error.userName = "Name should not be empty";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    error.email = "Email should include @ and .";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    error.password =
      " Password should contain at least 6 characters,one uppercase letter, one lowercase letter, one number, and one special character";
  }

  if (
    values.confirmPassword === "" ||
    values.confirmPassword !== values.password
  ) {
    error.confirmPassword = "Passwords didn't match";
  }

  if (!phoneNoPattern.test(values.phoneNo)) {
    error.phoneNo = "Please add country code";
  }

  return error;
}

export default validation;