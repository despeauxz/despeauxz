/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Star from "./components/Star";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';

function App() {
  return (
    <>
      <header className='header' id='header'>
        <nav className='nav container'>
          <a href="#" className='nav__logo'>Godwin Malik</a>

          <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list grid'>
              <li className='nav__item'>
                <a href="#home" className='nav__link active-link'>
                  <i className='uil uil-estate nav__icon'></i> Home
                </a>
              </li>
              <li className='nav__item'>
                <a href="#about" className='nav__link'>
                  <i className='uil uil-user nav__icon'></i> About
                </a>
              </li>
              <li className='nav__item'>
                <a href="#skills" className='nav__link'>
                  <i className='uil uil-file-alt nav__icon'></i> Skills
                </a>
              </li>
              <li className='nav__item'>
                <a href="#portfolio" className='nav__link'>
                  <i className='uil uil-scenery nav__icon'></i> Portfolio
                </a>
              </li>
              <li className='nav__item'>
                <a href="#contact" className='nav__link'>
                  <i className='uil uil-message nav__icon'></i> Contact Me
                </a>
              </li>
            </ul>

            <i className='uil uil-times nav__close' id='nav-close'></i>
          </div>

          <div className='nav__btns'>
            {/* <div className="uil uil-moon change-theme" id='theme-button' onClick={changeTheme}></div> */}

            <div className='nav__toggle' id='nav-toggle'>
              <i className='uil uil-apps'></i>
            </div>
          </div>
        </nav>
      </header>
      <main className='main'>
        <section className='home section' id='home'>
          <div className='home__container container grid'>
            <div className='home__content grid'>
              <div className='home__social'>
                <a href="https://www.linkedin.com/in/godwinmalik/" target="_blank" className='home__social-icon' rel="noreferrer">
                  <i className='uil uil-linkedin-alt'></i>
                </a>
                <a href="https://www.github.com/despeauxz/" target="_blank" className='home__social-icon' rel="noreferrer">
                  <i className='uil uil-github-alt'></i>
                </a>
              </div>

              <div className='home__img'>
                <svg className='home__blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                      <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                      <image className='home__blob-img' x="20" y="0" xlinkHref='assets/img/avatar-t.png' />
                    </g>
                </svg>
              </div>

              <div className='home__data'>
                <h1 className='home__title'>Hi, I'm Godwin</h1>
                <h3 className='home_-subtitle'>Frontend / Fullstack Software Engineer</h3>
                <p className='home__description'>Experienced software developer, proficient in many platforms and tools with over 8 years of experience focused on delivering business value through quality code.</p>
                <a href='#contact' className='button button--flex'>Contact Me <i className='uil uil-message button__icon'></i></a>
              </div>
            </div>

            <div className='home__scroll'>
              <a href='#about' className='home__scroll-button button--flex'>
                <i className='uil uil-mouse-alt home__scroll-mouse'></i>
                <span className='home__scroll-name'>Scroll down</span>
                <i className='uil uil-arrow-down home__scroll-arrow'></i>
              </a>
            </div>
          </div>
        </section>

        <section className='about section' id='about'>
          <h2 className='section__title'>About</h2>
          <span className='section__subtitle'>Introduction</span>

          <div className='about__container container grid'>
            <img src="/assets/avatar.jpeg" alt="Malik Godwin" className='about__img' />

            <div className='about__data'>
              <p className='about__description'>
                Web developer with extensive knowledge and years of expereience working with web technologies and UI/UX design and deliverying top quality code.
              </p>

              <div className='about__info'>
                <div>
                  <span className='about__info-title'>7+</span>
                  <span className='about__info-name'> Years <br /> Experience</span>
                </div>
                <div>
                  <span className='about__info-title'>8+</span>
                  <span className='about__info-name'>Completed <br /> projects</span>
                </div>
                <div>
                  <span className='about__info-title'>4+</span>
                  <span className='about__info-name'>Companies <br /> worked</span>
                </div>
              </div>

              <div className='about__buttons'>
                <a target="_blank" href='/assets/resume/Resume.pdf' className='button button--flex'>
                  Download CV <i className='uil uil-download-alt button__icon'></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='skills section' id='skills'>
          <h2 className='section__title'>Skills</h2>
          <span className='section__subtitle'>My technical level</span>

          <div className='skills__container container grid'>
            <div className='skills__content skills__open'>
              <div className='skills__header'>
                <i className='uil uil-brackets-curly skills__icon'></i>

                <div>
                  <h1 className='skills__title'>Frontend Engineer</h1>
                  <span className='skills__subtitle'>More than 5years</span>
                </div>

                <i className='uil uil-angle-down skills__arrow'></i>
              </div>

              <div className='skills__list grid'>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>HTML</h3>
                    <span className='skills__number'>90%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__html'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>React</h3>
                    <span className='skills__number'>85%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__react'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>CSS</h3>
                    <span className='skills__number'>80%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__css'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Web Processors(Gulp, SASS, Bourbon and LESS)</h3>
                    <span className='skills__number'>80%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__sass'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Vue</h3>
                    <span className='skills__number'>70%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__vue'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Javascript</h3>
                    <span className='skills__number'>70%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__js'></span>
                  </div>
                </div>
              </div>
            </div>

            <div className='skills__content skills__close'>
              <div className='skills__header'>
                <i className='uil uil-server-network skills__icon'></i>

                <div>
                  <h1 className='skills__title'>Backend Engineer</h1>
                  <span className='skills__subtitle'>More than 3years</span>
                </div>

                <i className='uil uil-angle-down skills__arrow'></i>
              </div>

              <div className='skills__list grid'>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Node JS</h3>
                    <span className='skills__number'>80%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__node'></span>
                  </div>
                </div>

                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Ruby</h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__rubyonrails'></span>
                  </div>
                </div>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>Sitecore</h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__rubyonrails'></span>
                  </div>
                </div>
                <div className='skills__data'>
                  <div className='skills__titles'>
                    <h3 className='skills__name'>GraphQL</h3>
                    <span className='skills__number'>65%</span>
                  </div>

                  <div className='skills__bar'>
                    <span className='skills__percentage skills__rubyonrails'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qualification section">
          <h2 className='section__title'>Qualification</h2>
          <span className='section__subtitle'>My personal journey</span>

          <div className='qualification__container container'>
            <div className='qualification__tabs'>
              <div className='qualification__button button--flex qualification__active' data-target="#work">
                <i className='uil uil-briefcase-alt qualification__icon'></i> Work
              </div>

              <div className='qualification__button button--flex' data-target="#education">
                <i className='uil uil-graduation-cap qualification__icon'></i> Education
              </div>
            </div>

            <div className='qualifications__sections'>
              <div className='qualification__content' data-content id='education'>
                <div className='qualification__data'>
                  <div>
                    <h3>B.Sc Statistics</h3>
                    <span className='qualification__subtitle'>Nigeria - University of Ilorin</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> 2011  -  2017
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                  
                  <div>
                    <h3>Full Stack Web Development Certification, Computer Software Engineering</h3>
                    <span className='qualification__subtitle'>FreeCodeCamp</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> Feb. 2016  -  July 2017
                    </div>
                  </div>
                </div>
                
              </div>


              <div className='qualification__content  qualification__active' data-content id='work'>
                <div className='qualification__data'>
                  <div>
                    <h3>Fullstack Software Engineer</h3>
                    <span className='qualification__subtitle'>IDEX Innovation, Dubai(Remote)</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> Dec. 2020  -  June 2023
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                  
                  <div>
                    <h3>Frontend Engineer</h3>
                    <span className='qualification__subtitle'>Coinflow - Full-time</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> Sept. 2022  -  June. 2023
                    </div>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div>
                    <h3>Frontend Engineer</h3>
                    <span className='qualification__subtitle'>Build with Assembly(AssemblyHQ) - Contract</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i>  Aug. 2022  -  Jan. 2023
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div></div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                  
                  <div>
                    <h3>Frontend Engineer</h3>
                    <span className='qualification__subtitle'>Sendstack, Lagos - Remote</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> Apr. 2020 - Dec. 2020
                    </div>
                  </div>
                </div>

                <div className='qualification__data'>
                  <div>
                    <h3>Software Engineer</h3>
                    <span className='qualification__subtitle'>Andela, Lagos</span>
                    <div className='qualification__calendar'>
                      <i className='uil uil-calendar-alt'></i> May 2019 - Oct. 2019
                    </div>
                  </div>

                  <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='portfolio' id='portfolio'>
          <h2 className='section__title'>Portfolio</h2>
          <span className='section__subtitle'>Most Recent work</span>

          <Swiper
            pagination={true}
            navigation={true}
            spaceBetween={50}
            modules={[Navigation, Pagination]}
            className='portfolio__container container'
          >
            <div className='swiper-wrapper'>
              <SwiperSlide>
                <div className='portfolio__content grid'>
                  <img src='/assets/img/portfolio1.png' alt='Hello' className='portfolio__img' />

                  <div className='portfolio__data'>
                    <h3 className='portfolio__title'>Editor JS</h3>
                    <p className='portfolio__description'>Free block-style editor with a universal JSON output</p>
                    <a href='https://editorjs.io/' target="_blank" className='button button--flex button-small portfolio__button' rel="noreferrer">
                      Demo
                      <i className='uil uil-arrow-right button__icon'></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='portfolio__content grid'>
                  <img src='/assets/img/portfolio2.png' alt='Hello' className='portfolio__img' />

                  <div className='portfolio__data'>
                    <h3 className='portfolio__title'>Hawk.so</h3>
                    <p className='portfolio__description'>Fast and lightweight errors tracking service. Catchers for JavaScript, Python, PHP, Node.js, Swift, Java Android, Kotlin and Scala</p>
                    <a href='https://hawk.so/' target="_blank" className='button button--flex button-small portfolio__button' rel="noreferrer">
                      Demo
                      <i className='uil uil-arrow-right button__icon'></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='portfolio__content grid'>
                  <img src='/assets/img/portfolio3.png' alt='Hello' className='portfolio__img' />

                  <div className='portfolio__data'>
                    <h3 className='portfolio__title'>Honda Canada</h3>
                    <p className='portfolio__description'>Honda Canada official web application via liason AssemblyHQ</p>
                    <a href='https://www.honda.ca/en/' target="_blank" className='button button--flex button-small portfolio__button' rel="noreferrer">
                      Demo
                      <i className='uil uil-arrow-right button__icon'></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </section>

        <section className='project section'>
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <div className="project__title">You have a new project or have a full-time job?</div>
                <p className="project__description">Contact me now</p>
                <a href="#contact" className="button button--flex button--white">
                  Contact Me
                  <i className="uil uil-message project__icon button__icon"></i>
                </a>
              </div>

              <img src="/assets/img/avatar-t.png" alt="Godwin" className="project__img" />
            </div>
          </div>
        </section>
        
        <section className="testimonial section">
          <h2 className="section__title">Testimonial</h2>
          <span className="section__subtitle">Team members saying</span>

          
          <Swiper
            pagination={true}
            spaceBetween={50}
            modules={[Pagination]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
              },
            }}
            className='testimonial__container container swiper-container'
          >
            <div className='swiper-wrapper'>
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src="/assets/img/macco.jpeg" alt="Emmanuel Okwara" className="testimonial__img" />

                      <div>
                        <h3 className='testimonial__name'>Emmanuel Okwara</h3>
                        <span className="testimonial__client">iOS Engineer at Delivery Hero</span>
                      </div>
                    </div>

                    <div className='testimonial__star-container'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  
                  <p className='testimonial__description'>
                    I have worked with Godwin Malik for almost a year now, and I can say without a doubt that he is one of the best UI/UX designers I have come across. 
                    He is purely driven my passion, and is more than happy to collaborate with both internal and external team members to make sure that the work gets done.
                    Asides that, he is also a fast learner with vast knowledge in several modern technologies including ReactJS, NodeJS, Laravel and many more.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src="/assets/img/victor.jpeg" alt="Hey" className="testimonial__img" />

                      <div>
                        <h3 className='testimonial__name'>Victor Nwokeocha</h3>
                        <span className="testimonial__client">Senior Software Engineer at Trailstone Group</span>
                      </div>
                    </div>

                    <div className='testimonial__star-container'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  
                  <p className='testimonial__description'>
                    I was Godwin's Learning facilitator assistant for one of the Andela Bootcamps. He is passionate about his work, always striving for excellence, has an eye for an excellent UI/UX design, and he proactively seeks and receives feedback. Over the past few months, I have seen him grow in his career as a software developer, and his willingness to learn and take on more responsibilities is something to be desired in today's tech ecosystem.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__content">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src="/assets/img/sanni.jpeg" alt="Hey" className="testimonial__img" />

                      <div>
                        <h3 className='testimonial__name'>Sanni Kehinde</h3>
                        <span className="testimonial__client">DevOps Engineer at Elliot</span>
                      </div>
                    </div>

                    <div className='testimonial__star-container'>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  
                  <p className='testimonial__description'>
                    Malik is a talented software engineer with a rare combination of technical, and soft skills.
                    As a member of the team, He's always willing to go above and beyond in doing a great job. I'm happy with the work Malik did as a frontend engineer, and I give him my full recommendation. 
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Got a question or proposal, or just want to say hello? Go ahead.</span>

          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone contact__icon"></i>

                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">(+234) 902 868 7749</span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>

                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">despeauxz@gmail.com</span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>

                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Abuja, Nigeria.</span>
                </div>
              </div>
            </div>

            <form action="https://formspree.io/f/myywpyym" method='POST' className="contact__form grid">
              <div className="contact__inpus grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">Your Name</label>
                  <input type="text" name="name" className="contact__input" required />
                </div>
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">Email Address</label>
                  <input type="email" name='email' className="contact__input" required />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Your Message</label>
                <textarea name="message" id="" cols="0" rows="7" className="contact__input" required></textarea>
              </div>

              <div>
                <button type='submit' className='button button--flex'>
                  Send Message
                  <i className='uil uil-message button__icon'></i>
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className='footer'>
          <div className="footer__bg">
            <div className="footer__container container grid">
              <div>
                <h1 className="footer__title">Godwin Malik</h1>
                <span className="footer__subtitle">Frontend/Fullstack Software Engineer</span>
              </div>

              <ul className="footer__links">
                <li>
                  <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="footer__link">Contact Me</a>
                </li>
              </ul>

              <div className="footer__socials">
                <a href='https://www.linkedin.com/in/godwinmalik' target="_blank" className="footer__social" rel="noreferrer">
                  <i className='uil uil-linkedin'></i>
                </a>
                <a href='https://www.twitter.com/despeauxz' target="_blank" className="footer__social" rel="noreferrer">
                  <i className='uil uil-twitter-alt'></i>
                </a>
                <a href='https://www.instagram.com/despeauxz' target="_blank" className="footer__social" rel="noreferrer">
                  <i className='uil uil-instagram'></i>
                </a>
              </div>
            </div>

            <p className="footer__copy">&#169; Godwin Malik. All rights reserved</p>
          </div>
        </footer>

        <a href="#" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </main>
    </>
  );
}

export default App;
