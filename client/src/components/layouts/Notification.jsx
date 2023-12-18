// Modal.jsx

import PropTypes from "prop-types";

export const Notification = ({ isOpen, onClose, children }) => {
  const notificationClass = isOpen ? "translate-y-0" : "translate-y-full";
  return (
    <div
      className={`fixed  bottom-0 w-full z-50 transform transition duration-500  ${notificationClass} flex items-center justify-center`}
      style={{ zIndex: 1000 }}

    >
      <div
        className=" shadow-lg text-white shadow-md py-6 px-3 sm:px-6 flex justify-between gap-2 rounded shadow-lg w-full w-[98%] md:w-[90%] relative sm:text-center"
        style={{
          background: 'radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%)',
          boxShadow: '0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%)',
        textShadow:' 0 1px 0 rgb(0 0 0 / 40%)'
        }}
      >
        <div className="hidden sm:flex"></div>
        <div id="modalContent">{children}</div>

        <button
          className="text-slate-100 hover:text-slate-100"
          onClick={onClose}
        >
          <svg
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
Notification.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
