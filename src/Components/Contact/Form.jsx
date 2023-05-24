
const Form = () => {
    return (
        <div className="p-20 bg-slate-200 w-[80%] mx-auto">
            <div className="bg-white text-black">
                <div className="card-body">
                  <div className="flex">
                  <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />

                    </div>
                  </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="Mesage" id="" cols="10" rows="5" placeholder="write your message here!"></textarea>

                    </div>

                <button className="btn btn-outline btn-warning">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Form;