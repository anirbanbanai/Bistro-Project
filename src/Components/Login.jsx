import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './AuthPrvider';
import { Link } from 'react-router-dom';




const Login = () => {
  const {logIn, }  =useContext(AuthContext);

  const captchaRef = useRef(null);
  const [, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const all = { email, password };
    console.log(all)

    logIn(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  return (
    <div className='pt-20'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
              </div>
              <div className="form-control">

                <input ref={captchaRef} type="text" placeholder="enter captcha" className="input input-bordered" />
                <button onClick={handleValidate} className='btn btn-outline btn-xs '>Validate Captcha</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={false} className="btn btn-primary only:">Login</button>
              </div>
              <h2>New to User? <Link to='/register'>Register</Link></h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

