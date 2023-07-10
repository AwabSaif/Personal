import twimba from '../../assets/images/11twimba.png'
import nft from '../../assets/images/nft.png'
export const My_Projects = () => {
    return (
        <>
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">

                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">Twimba</h2>
                                            <p>A simplified Html , css and JavaScript  site similar to Twitter with one screen, through which you can post tweets, retweet, like and watch replays. <a href='https://awabsaif.github.io/Twimba/'>visit the website</a></p>
                                        </div>
                                        <img className="img-fluid" src={twimba} alt="..." />
                                    </div>
                                </div>
                            </div>

                            <div className="card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">NFT store( multi language)</h2>
                                            <p>NFT store it is a site built in a language Html , css and JavaScript a responsive site with different screens, built in a distinctive and humorous manner for the reasons of learning, and also the site consists of two languages, Arabic and English.  <a href='https://awabsaif.github.io/NFT-responsive-site/'>visit the website</a></p>
                                           
                                        </div>
                                        <img className="img-fluid" src={nft} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="/Contact">Contact me</a>
                    </div>
                </div>
            </section>


        </>
    )
}
