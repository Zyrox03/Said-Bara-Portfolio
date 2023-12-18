import PropTypes from "prop-types";

export const Title = ({ section, title, sub_title }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-center" style={{ zIndex: 100 }}>
      <p className="text-xl font-bold text-white">{section}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold" data-aos="fade-up">
        {title}
      </h2>
      <p className="text-lg lg:text-2xl text-white mt-4"  data-aos="fade-up">{sub_title} </p>
    </div>
  );
};

Title.propTypes = {
  section: PropTypes.string,
  title: PropTypes.string.isRequired,
  sub_title: PropTypes.string,
};
