import PropTypes from 'prop-types'

export const WatchVideo = ({setWatchingVideo}) => {
  return (
<div
          className="w-[100vw] h-screen gradient fixed "
          style={{ zIndex: 1001 }}
        >
          <div
            className="w-full h-full flex flex-col items-center gap-12 px-12 py-6 relative "
            style={{ zIndex: 100 }}
          >
            <div className="hidden sm:flex blur bg-blur blur-animate"></div>
            <div className="blur bg-blur-2 blur-animate"></div>

            <div className="w-full flex justify-end flex-wrap-reverse gap-2 sm:gap-4">
              <button
                onClick={() => setWatchingVideo(false)}
                className="secondary_button "
              >
                <i className="fa-solid fa-close"></i>
              </button>
            </div>
            <div className="  w-[100%] md:w-[60%] h-[300px] md:h-[500px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>  )
}
WatchVideo.propTypes = {
    setWatchingVideo : PropTypes.func.isRequired
  }