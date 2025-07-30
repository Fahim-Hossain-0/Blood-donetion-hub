const Footer = () => {
  return (
    <footer className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Mission */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Blood Hub</h2>
          <p className="text-sm">
            A platform to <br /> connect lives <br /> through blood <br /> donation.
            
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-green-600 transition-all" href="/">Home</a></li>
            <li><a className="hover:text-green-600 transition-all" href="/donation-requests">Donation Requests</a></li>
            <li><a className="hover:text-green-600 transition-all" href="/blogs">Blog</a></li>
            <li><a className="hover:text-green-600 transition-all" href="/search">Search Donors</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-3">Contact Us</h3>
          <p className="text-sm">
            Email: <a href="mailto:help@bloodconnect.com" className="text-green-600">help@bloodconnect.com</a><br />
            Phone: <span className="text-green-600">+880 1234-567890</span><br />
            Address: Baily Road, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-green-500 text-xs text-gray-500">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
