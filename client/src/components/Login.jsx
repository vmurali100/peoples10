import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser, changeUser } from "../actions/actions";
let user = {};
class Login extends Component {
  loginUser() {
    this.props.login(this.props.user);
  }

  changeValues = e => {
    let nam = e.target.name;
    let val = e.target.value;
    user[nam] = val;
    this.props.change(user);
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-sm" />

            <div className="col-sm">
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={this.props.user.email}
                    placeholder="Enter email"
                    name="email"
                    onChange={e => this.changeValues(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={this.props.user.password}
                    placeholder="Password"
                    name="password"
                    onChange={e => this.changeValues(e)}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    this.loginUser();
                  }}
                  name={this.props.user}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
              {this.props.user.email !== "" && (
                <h4>{this.props.user.message} </h4>
              )}
            </div>
            <div className="col-sm" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(loginUser(user));
    },
    change: user => {
      dispatch(changeUser(user));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
