"use client";

const Banner = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      <div className="w-full h-full relative">
        {/* YouTube Video Background */}
        <iframe
          src="https://www.youtube.com/embed/REXwxkmErpY?autoplay=1&mute=1&loop=1&playlist=REXwxkmErpY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=0&disablekb=1&fs=0&cc_load_policy=0&vq=highres&start=1&end=9999&widget_referrer=none"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          className="absolute pointer-events-none"
          style={{
            width: '120%',
            height: '120%',
            top: '-10%',
            left: '-10%',
            border: 'none',
            pointerEvents: 'none',
            objectFit: 'cover'
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-15" />

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
              Have Client is Joy
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              Bắt sóng thời đại – Dẫn lối truyền thông.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;