import{Link} from 'react-router-dom'
import my_photo from '../../assets/images/my photo-1.png'
import dots_1 from '../../assets/images/dots-1.svg'
import dots_3 from '../../assets/images/dots-3.svg'
import dots_4 from '../../assets/images/dots-4.svg'

export const Hero = () => {
  return (
    <>

    
            
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                     
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development </div></div>
                                <div className="fs-3 fw-light text-muted">I can help your business to</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/Resume">Resume</Link>
                                    <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/Projects">Projects</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    
                                    <img className="profile-img" src={my_photo} alt="my photo" />
                                    <div className="dots-1">
                                        <img src={dots_1}alt='dots_1'/>
                                      
                                       
                                      
                                    </div>
                                    <div className="dots-2">
                                    <img src={dots_4}alt='dots_4'/>
                                      
                                     
                                    </div>
                                    <div className="dots-3">
                                    <img src={dots_3}alt='dots_3'/>
                                     
                                        
                                      
                                    </div>
                                    <div className="dots-4">
                                    <img src={dots_4}alt='dots_4'/>
                                     
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
    </>
  )
}
