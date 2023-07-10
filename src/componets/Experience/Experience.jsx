import  Resume  from "../../assets/Resume-Awab-Saif linkedin.pdf"
export const Experience = () => {
  return (
    <>
         <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                <a className="btn btn-primary px-4 py-3" href={Resume}>
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2022 - Jun 2023</div>
                                                <div className="small fw-bolder">website manager and IT employee</div>
                                                <div className="small text-muted">Petra Stars Company</div>
                                                <div className="small text-muted">Al Manar - Jeddah</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>I am worked as a wholesale website manager and IT employee with Petra Stars Company.</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2021 - Mar 2022  </div>
                                                <div className="small fw-bolder">OXO of accounting software</div>
                                                <div className="small text-muted">Ksab Information Technology Company</div>
                                                <div className="small text-muted">Screen Tower - Jeddah</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>I worked as a sale and marketing of accounting software on commission and technical support for clients of the Kasab Information Technology Company.</div></div>
                                    </div>
                                </div>
                            </div>
                        </section>

    </>
  )
}
