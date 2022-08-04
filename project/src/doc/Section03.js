import '../css/common.css'
import '../css/basic.css'
// import '../css/section03.css'

const Section03 = () => {
    return (
        <section className="Business02 basicSection">
            <h2><span>OUR</span>BUSINESS</h2>
            <p>복숭아맛쿠키</p>
            <div className="container">
                <div className="left">
                    <figure>
                        <img src="./img/hd01.jpg" alt="" />
                    </figure>
                </div>
                <div className="right">
                    <h3>심플하지만 다갖춘 쿠키런킹덤</h3>
                    <p>쿠키쿠키쿠키쿠키</p>

                    <ul className="dotList">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                        <li>ullam velit aliquid quam non, aliquam inventore?
                        </li>
                        <li>Culpa voluptatem dolorem </li>
                    </ul>
                    <div className="bottom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />ullam velit aliquid quam non, aliquam
                        inventore?
                    </div>
                </div>
            </div>
            <div className="inner">
                <h3>심플하지만 다갖춘 쿠키런킹덤</h3>
                <ul className="row">
                    <li data-num="01">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li data-num="02">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                    <li data-num="03">ullam velit aliquid quam non, aliquam inventore?
                    </li>
                    <li data-num="04">Culpa voluptatem dolorem </li>
                </ul>
            </div>
        </section>
    )
}
export default Section03;