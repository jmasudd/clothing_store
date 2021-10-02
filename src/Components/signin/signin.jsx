import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="sigin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type="submit" value="submit-form" />
        </form>
      </div>
    );
  }
}

export default SignIn;