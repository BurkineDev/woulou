import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row' >
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img 
              src='images/main-banner-1.jpg'
              className='img-fluid rounded-3'
              
              />
              <div className='main-banner-content position-absolute'>
                <h4> SUPERCHARGE FOR PROS.</h4>
                <h5>ipad S3+ pro</h5>
                <p>A partir 500Fr ou 1000Fr</p>
                <Link className='button'>Achetez maintenant</Link>

              </div>

            </div>

          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative '>
              <img 
              src='images/catbanner-01.jpg'
              className='img-fluid rounded-3'
              alt='main banner'
              
              />
              <div className='small-banner-content position-absolute'>
                <h4> SUPERCHARGE FOR PROS.</h4>
                <h5>ipad S3+ pro</h5>
                <p>A partir 500Fr ou 1000Fr</p>

              </div>

            </div>
            <div className='small-banner position-relative '>
              <img 
              src='images/catbanner-02.jpg'
              className='img-fluid rounded-3'
              alt='main banner'
              
              />
              <div className='small-banner-content position-absolute'>
                <h4> NEW ARRIVAL .</h4>
                <h5>Iphone 15 pro</h5>
                <p>A partir 700Fr <br/> ou 9000Fr</p>

              </div>

            </div>
            <div className='small-banner position-relative '>
              <img 
              src='images/catbanner-04.jpg'
              className='img-fluid rounded-3'
              alt='main banner'
              
              />
              <div className='small-banner-content position-absolute'>
                <h4> BEST SALE .</h4>
                <h5>Iphone 15 pro</h5>
                <p>A partir 700Fr <br/>  ou 9000Fr</p>

              </div>

            </div>
            <div className='small-banner position-relative'>
              <img 
              src='images/catbanner-03.jpg'
              className='img-fluid rounded-3'
              alt='main banner'
              
              />
              <div className='small-banner-content position-absolute'>
                <h4> AJOUTE TA BOUTIQUE .</h4>
                <h5>Divers</h5>
                <p>A partir 700Fr <br/>  ou 9000Fr</p>

              </div>

            </div>
            </div>
          </div>

        </div>

      </div>


    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div>
                <img src='images/service.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-02.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-03.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>
              <div>
                <img src='images/service-04.png' alt='services'/>
                <div>
                 <h6></h6>
                 <p></p> 
                </div>
              </div>
              <div>
                <img src='images/service-05.png' alt='services'/>
                <div>
                  <h6></h6>
                  <p></p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Home