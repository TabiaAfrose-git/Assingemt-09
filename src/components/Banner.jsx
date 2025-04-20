

const Banner = () => {
    return (
        <div>
          <div class="hero min-h-[350px]"
          style={{backgroundImage: "url(/public/img/pic1.jpg)",}}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;