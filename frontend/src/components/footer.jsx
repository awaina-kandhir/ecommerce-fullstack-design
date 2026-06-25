function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              ShopEase
            </h2>
            <p className="mt-3 text-gray-300">
              Your one-stop online shopping destination.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Quick Links
            </h3>
            <p>Home</p>
            <p>Products</p>
            <p>Cart</p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Customer Service
            </h3>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

        <hr className="my-6" />

        <p className="text-center text-gray-400">
          © 2026 ShopEase. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;