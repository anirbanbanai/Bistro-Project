import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './AuthPrvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';



const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {logIn,googleSignIn }  =useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.fromZ?.pathname || "/"

  const captchaRef = useRef(null);
  const [, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleGoogleSignIn  = ()=>{
    googleSignIn()
    .then(result  =>{
      console.log(result.user);
      navigate(from, {replace: true})
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setError();
    setSuccess();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const all = { email, password };
    console.log(all)

    logIn(email, password)
    .then(result =>{
      console.log(result.user);
      setSuccess("Login successfull")
      navigate(from, {replace: true})
    })
    .catch(error=>{
      console.log(error.message);
      setError(error.message)
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
                <input type="email" name='email' placeholder="email" required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  type="password" name='password' placeholder="password" required className="input input-bordered" />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
              </div>
              <h2 className='text-red-500'>{error}</h2>
              <h2 className='text-green-500'>{success}</h2>
              <div className="form-control">

                <input ref={captchaRef} type="text" placeholder="enter captcha" className="input input-bordered" />
                <button onClick={handleValidate} className='btn btn-outline btn-xs '>Validate Captcha</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={false} className="btn btn-primary only:">Login</button>
              </div>
              <h2>New to User? <Link to='/register'>Register</Link></h2>
             

            </form>
              <button onClick={handleGoogleSignIn} className=" mx-auto btn btn-circle btn-outline btn-warning mb-5"> <FcGoogle className='text-3xl'/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

