import  React, {useEffect, useState, useRef} from 'react'

const Skills = () => {
    

    const [isVisible, setVisible] = useState(true);

    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    //   return () => observer.unobserve(domRef.current);
    }, []);

    return (
            <div className="skills dark-gray">

            <div className='rowTitle'>
                <span>SKILLS</span>
            </div>

            <div className={`hexigonContainContainer ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
  
                <div className="hexagon_wrap">
                    <div className="hexagon">
                        <p>JavaScript, NodeJS<br/>&<br/> Redux, ReactJS</p>
                    </div>
                </div>

                 <div className="hexagon_wrap">
                    <div className="hexagon">
                        <p>Photoshop, Illustrator<br/>&<br/>Premiere, Sketch</p>
                    </div>
                </div>

                <div className="hexagon_wrap">
                    <div className="hexagon">
                        <p>Next.js<br/>&<br/>React Native</p>
                    </div>
                </div>
                        
                <div className="hexagon_wrap">
                    <div className="hexagon">
                        <p>HTML5<br/>&<br/>CSS3, SCSS</p>
                    </div>
                </div>

                <div className="hexagon_wrap">
                    <div className="hexagon">
                        <p>Wireframes<br/>
                        &<br/>
                        UX/UI, Prototypes</p>
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default Skills
