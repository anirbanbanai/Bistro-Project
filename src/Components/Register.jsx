import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthPrvider";
import Swal from "sweetalert2";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();

  const from = location.state?.fromZ?.pathname || "/"


  const HandleSubmit = (event) => {
    event.preventDefault();
    setError()
    setSuccess()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const all = { name, photo, email, password };
    console.log(all)

    createUser(email, password)
      .then(result => {
        const loggeduser = result.user;
        console.log(loggeduser);
        setSuccess("successfull")

        updateUserProfile(name, photo)

          .then(() => {
            const saveUser = { name: name, email: email, photo: photo }
            fetch(`https://bistro-boss-server-wine.vercel.app/users`, {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  form.reset();
                  Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Register has been successfull.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace: true})
                }
              })


          })

      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })
  }
  return (
    <div className="pt-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo_Url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <h2 className='text-red-500'>{error}</h2>
              <h2 className='text-green-500'>{success}</h2>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h2>Already have an Accunt? <Link to='/login'>Login</Link></h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;