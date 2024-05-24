

const VideoBanner: React.FC = () =>{

    return(
        <>
            <section className="">
              <div className="container mx-auto">
              <video className="w-full" width="320" height="240" muted loop autoPlay preload="auto">
                <source src="/video.mp4" type="video/mp4" />
                <track
                  src="/video.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>

              </div>

            </section>
    </>
    )
}

export default VideoBanner;