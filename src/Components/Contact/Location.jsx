
const Location = () => {
    return (
        <div className="w-3/4 mx-auto flex justify-between">
            <div className="border-2  p-3"> 
                <h3 className="bg-orange-400 py-4 text-center">gg</h3>
                <div className="p-5 w-[90%] mx-auto bg-slate-300">
                <h2>Phone</h2>
                <p>+38 (012) 34 56 789</p>
            </div>
            </div>
            
            <div className="border-2 p-3"> 
               <h3 className="bg-orange-400 py-4 text-center">HH</h3>
               <div className="p-5 w-[90%] mx-auto  bg-slate-300">
                <h2>ADDRESS</h2>
                <p>+38 (012) 34 56 789</p>
            </div>
            </div>
           
            <div className="border-2  p-3"> 
               <h3 className="bg-orange-400 py-4 text-center">KK</h3>
               <div className="p-5 w-[90%] mx-auto bg-slate-300">
                <h2>WORKING HOURS</h2>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
            </div>
           
        </div>
    );
};

export default Location;