import "./signin.scss";
import { Form, Formik } from "formik";
import { signinSchema } from "../../../schemas";
import CustomInput from "../../../component/formInput/customInput";
import { IMAGE } from "../../../assets/images/images";
import { ICON } from "../../../assets/icons/icons";

const ScreenSignin = ({ onSubmit, isEyes, onSetIsEyes }) => {
  return (
    <div className="form-signin" id="form-signin">
      <div className="wrapper">
        <div className="box-signin">
          <div className="title-logo">
            <ICON.COMPANY />
            <h3>Log In</h3>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signinSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="please insert your email"
                />

                <CustomInput
                  label="Password"
                  name="password"
                  type={isEyes ? "text" : "password"}
                  placeholder="please insert your password"
                />

                <div className="form-cehckbox">
                  <input
                    name="show-pass"
                    type="checkbox"
                    id="checbox-signin"
                    checked={isEyes}
                    onChange={onSetIsEyes}
                  />
                  <label htmlFor="checbox-signin">show password</label>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn-signin"
                >
                  {isSubmitting ? "Loading .." : "Log In"}
                </button>
                <a href="/member/registered">create account ?</a>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="image-wrapper">
        <img src={IMAGE.SIGNIN.IMG} alt={IMAGE.SIGNIN.alt} />
      </div>
    </div>
  );
};
export default ScreenSignin;
