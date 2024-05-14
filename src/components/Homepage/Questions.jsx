
const Questions = () => {
  return (
    <div className="flex justify-center my-40">
      <section className="flex flex-col justify-center items-center">
        <h1 className="sm:mb-20 text-3xl sm:text-5xl font-Poppins font-semibold">
          Common Questions
        </h1>
        <div className="sm:w-2/3 px-10 sm:px-20">
          <section className="border-b-2 py-20 hover:translate-x-6 hover:cursor-pointer">
            <h1 className="text-lg font-Poppins font-semibold">
              What is UpStart
            </h1>
            <p className="font-Quicksand">
              UpStart- a self-serve platform that allows businesses to set up
              their online store and reach out and sell to customers - both
              local and pan India. UpStart allows sellers to build their own
              storefronts, upload product catalogs, and funnel existing and new
              customers from various channels to one unified selling platform
              with seamless payments and logistics integrations, all in a matter
              of minutes and with no technical know-how required.
            </p>
          </section>
          <section className="border-b-2 py-20 hover:translate-x-6 hover:cursor-pointer">
            <h1 className="text-lg font-Poppins font-semibold">
              As a seller X, how do I discover this product?
            </h1>
            <p className="font-Quicksand">
              Following are the ways to discover UpStart: Seller app through
              direct reach out by the UpStart team through Up.store link shared
              by a brand on Instagram (either by DM or via link in bio)
            </p>
          </section>
          <section className="border-b-2 py-20 hover:translate-x-6 hover:cursor-pointer">
            <h1 className="text-lg font-Poppins font-semibold">
              Are there any additional fees I have to pay for using this
              product?
            </h1>
            <p className="font-Quicksand">
              UpStart will charge you absolutely no commission on sales ever!
              However, you shall be charged for the 3rd party services used like
              payment gateway services, by our Payment gateway partner Cashfree
              directly and logistics fees for using fulfillment services by
              Shiprocket/Genie/Shippigo and others.
            </p>
          </section>
          <section className="border-b-2 py-20 hover:translate-x-6 hover:cursor-pointer">
            <h1 className="text-lg font-Poppins font-semibold">
              What categories can I sell from UpStart?
            </h1>
            <p className="font-Quicksand">
              Whatever size your business is, and whichever category you
              specialize in, we can help you in creating an online-first
              presence with a seamless commerce journey. Which stage of your
              selling journey is at does not matter- as long as you want to sell
              and grow online, UpStart is for you. Your business deserves the
              best and we’re here to help you with that.
            </p>
          </section>
          <section className="py-20 hover:translate-x-6 hover:cursor-pointer">
            <h1 className="text-lg font-Poppins font-semibold">
              Will I have any access to customer data?
            </h1>
            <p className="font-Quicksand">
              Yes! You will have access to customer name, address and phone
              number at the very least.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Questions
