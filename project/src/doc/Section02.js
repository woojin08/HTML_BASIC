import '../css/common.css'
import '../css/basic.css'
// import '../css/section02.css'



const Section02 = () => {
    return (
        <section className="Business basicSection">
            <h2><span className="t_b">OUR</span>BUSINESS</h2>
            <p>새로운 매래를 열어가는 코코팜</p>
            <div className="container">
                <figure>
                    <div className="inbox">
                        <img src="./img/hd01.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reiciendis?</p>

                        <a href="">자세히보기...</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/hd02.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reiciendis?</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>

                <figure>
                    <div className="inbox">
                        <img src="./img/hd03.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reiciendis?</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>
                <figure>
                    <div className="inbox">
                        <img src="./img/hd04.jpg" alt="" />
                    </div>
                    <div className="cover">
                        <h3>주요사업 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, reiciendis?</p>

                        <a href="">자세히보기</a>
                    </div>
                </figure>

            </div>
            <div className="inner">
                <div className="tit">
                    <strong>상큼함이 터지는 포도맛 코코팜</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, a.</p>
                </div>
                <div className="list">
                    <ul className="dotList">
                        <li>Lorem ipsum, dolor sit amet consectetur</li>
                        <li> adipisicing elit. Amet, a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Section02;