export const Footer = () => {
  return (
    <footer className="text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left side: Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/zyrox03/"
            className="hover:text-[#28a745]  text-lg transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01cf03078bc432e534"
            className="hover:text-[#28a745] text-lg transition duration-300"
          >
          <i className="fa-brands fa-upwork"></i>
          </a>
          <a
            href="https://github.com/Zyrox03"
            className="hover:text-[#28a745] text-lg transition duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Right side: Copyright and Additional Info */}
        <div className="text-sm text-center">
          {/* <p>&copy; 2023 Said Bara. All rights reserved.</p> */}
          <p className="mt-1">
            Crafted with <span className="text-red-500">&hearts;</span> and{" "}
            <span className="font-bold">passion</span> by Said Bara{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
