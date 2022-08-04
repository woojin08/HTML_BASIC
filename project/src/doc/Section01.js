
const Section01 = () => {
    return (
        <section className="about basicSection">
            <h2><span className="mainColor">CEO'S</span> GREETINGS</h2>
            <p>새로운 매래를 열어가는 코코팜</p>
            <div class="container">
                <div className="des">
                    <p className="tit">
                        웹서비스의 <span className="mainColor">새로운 미래를</span><br />
                        <span className="mainColor">코코팜</span>이 만들어 가겠습니다.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptates deserunt nulla modi,
                        autem velit explicabo eaque ea quis possimus vitae?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Aperiam qui doloribus voluptates
                        voluptatibus ipsa beatae voluptas nulla dolorum nihil expedita, tenetur impedit dolorem quasi rem?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptate, veniam repellat voluptates
                        minima facere necessitatibus.</p>

                    <p>코코팜 임직원 일동</p>

                </div>
                <figure><img src="./img/hd01.jpg" alt="" /></figure>
            </div>

            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive-table">
                    <table className="table">

                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56
                                    포카리스웨터 옆
                                </td>

                            </tr>
                            <tr>
                                <th>전화번호 </th>
                                <td>051-783-2317</td>


                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </section>

    )
}

export default Section01;