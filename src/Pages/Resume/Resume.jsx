import { Education ,Experience,Skills } from "../../componets/index"



export const Resume = () => {
  return (
    <>
        
        <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                       <Experience/>
                       <Education/>
                        <div className="pb-5"></div>
                       <Skills/>
                    </div>
                </div>
            </div>
    </>
  )
}
