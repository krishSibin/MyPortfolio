
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import back from './../../assets/bg1.jpg'
import school from './../../assets/school.jpeg'
import Anim from '../education/Anim';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import clg from './../../assets/college.jpg'

import './Institute.scss';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function App() {

  const sentence = "Educational Journey".split("");
  return (
    <>
    

      <Swiper
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-pagination-color': 'white',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
         <div className='back'>
        <h1 className='last'> 
               {
            sentence.map((letter, index) => {
              return (
                <Anim  key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </Anim>
              )
            })
          }
          
           </h1> 
        </div>
       
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              `url(${back})`,
          }}
          data-swiper-parallax="-20%"
        ></div>
        <SwiperSlide>
          <div className='pageSwipe1' data-swiper-parallax="-300">
            <div className='pageImg1' style={{
              'background-image':
                `url(${clg})`,
            }}>


            </div>
            <div className='contents1'>
              <div className="title" >
                Government Engineering College Thrissur
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                2020 - 2024
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Computer Science and Engineering Undergradute<br>
                  </br>
                  <br />
                  <span className='mark'>CGPA : 8.69</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pageSwipe1' data-swiper-parallax="-300">
            <div className='pageImg1' style={{
              'background-image':
                `url(${school})`,
            }}>

            </div>
            <div className='contents1'>
              <div className="title" >
                MVHSS Ariyallur
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                2018 - 2019
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Completed 12th in Science
                  <br />
                  <br />
                  <span className='mark'>
                    Secured 95.3 / 100
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pageSwipe1' data-swiper-parallax="-300">
            <div className='pageImg1' style={{
              'background-image':
                `url(${school})`,
            }}>

            </div>
            <div className='contents1'>
              <div className="title" >
                MVHSS Ariyallur
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                2016 - 2017
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  SSLC
                  <br />
                  <br />
                  <span className='mark'>
                    Secured 100 / 100
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
