
const Footer2 = () => {
    const scrollToDiv = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href"); 
        const targetElement = document.querySelector(targetId);
         if (targetElement) {
           targetElement.scrollIntoView({
             behavior: "smooth",
           });
         }
    };

  return (
    <div className="mt-40">
      <section className="flex flex-col justify-center items-center text-center">
        <div className="my-10">
          <h1 className="mb-2 text-6xl font-Poppins font-extrabold text-[#070F2B]">
            UpStart
          </h1>
          <p className="pl-2 text-xl font-Poppins font-bold text-[#535C91]">
            For Seller
          </p>
        </div>
        <div className="my-10">
          <ul className="flex gap-10 flex-col sm:flex-row sm:gap-40 sm:text-2xl font-Poppins font-semibold text-[#4f4b49]">
            <li
              className="hover:cursor-pointer hover:text-black "
              id="aboutLink"
            >
              <a href="#home" onClick={scrollToDiv}>
                About UpStart
              </a>
            </li>
            <li className="hover:cursor-pointer hover:text-black">Privacy</li>
            <li className="hover:cursor-pointer hover:text-black">Terms</li>
            <li className="hover:cursor-pointer hover:text-black">Contact</li>
          </ul>
        </div>
        <div className="mb-20 mt-10">
          <h1 className="mb-3">ⒸUpStart</h1>
          <h1>Made while ‘Working from Heart’ by UpStart.</h1>
        </div>
      </section>
    </div>
  );
}

export default Footer2
