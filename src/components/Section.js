import React from 'react';
import '../sass/Section.scss'

function Section() {
  return(
    <section>
      <div className="section-container">
        <div className="section-title">
          안상혁 <br/> Web Developer Portfolio
        </div>
        <div className="section-description">
          안녕하세요 신입 프론트엔드 개발자입니다. <br/>
          엉덩이가 무거운, 끈기 있는 자세로 매일 매일 발전해나가겠습니다 !
        </div>
        <button className="btn">View My Work</button>
      </div>
    </section>
  )
}

export default Section;