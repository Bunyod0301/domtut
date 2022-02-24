import React from 'react'
import '../css/section.css'
import translate from '../i18n/messages/translate';


class Section1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:[
                {   k:0,
                    image: "https://domtut.uz/wp-content/uploads/2020/06/sky-builds_renders-385x258.jpg",
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    kochmas:<span className="kochmas">{translate("kochmas")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi6")}</span>,
                    a:<a className='aa'>{translate("Sky")}</a>,
                    address:<span className='address'>ул Карасув №35</span>,
                    xona:<span className='xona'>{translate("yotoqxona")}: 1,2,3,4</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>Sky Build</span>
                },
                {   k:0,  
                    image:"https://domtut.uz/wp-content/uploads/2020/04/grand_mukimiy2-385x258.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    ipoteka:<span className="ipoteka">{translate("bank")}</span>,
                    tayyor:<span className="tayyor">{translate("tayyor")}</span>,
                    narxi1:<span className='narxi1'>{translate("narxi2")}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi7")}</span>,
                    a:<a className='aa'>{translate("grand")}</a>,
                    address:<span className='address'>г. Ташкент, 1й проезд ул. Мукими, дом №8</span>,
                    xona:<span className='xona'>{translate("xonalar")}: 2,3</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>Stroy Paritet</span>


                },
                {   k:0,
                    image:"https://domtut.uz/wp-content/uploads/2021/01/obi_hayot_renders-3-385x258.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    ipoteka:<span className="ipoteka">{translate("bank")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate("narxi3")}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi8")}</span>,
                    a:<a className='aa'>{translate("obi hayot")}</a>,
                    address:<span className='address'>улица Захидова 4</span>,
                    xona:<span className='xona'>{translate("yotoqxona")}: 1,2,3,4</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>Sky Build</span>


                },
                {   k:0,
                    image:"https://domtut.uz/wp-content/uploads/2020/09/fayzli_renders3-385x258.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate("narxi4")}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi9")}</span>,
                    a:<a className='aa'>{translate("fayzli")}</a>,
                    address:<span className='address'>ул Карасув, ор-р дворец Авиастроителей</span>,
                    xona:<span className='xona'>{translate("yotoqxona")} 1,2</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>Obi Hayot</span>


                },
                {   k:0,
                    image:"https://domtut.uz/wp-content/uploads/2021/04/namuna_renders5-385x258.jpg",
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    kochmas:<span className="kochmas">{translate("kochmas")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate("narxi2")}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi10")}</span>,
                    a:<a className='aa'>{translate("nur")}</a>,
                    address:<span className='address'>Ниёзбек йули, 3-й проезд (ор-р: ресторан </span>,
                    xona:<span className='xona'>{translate("yotoqxona")} 1,3,4,5</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>FDG</span>


                },
                {   k:0,
                    image:"https://domtut.uz/wp-content/uploads/2020/04/mankhattan_renders5-385x258.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate("narxi5")}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi11")}</span>,
                    a:<a className='aa'>{translate("manhattan")}</a>,
                    address:<span className='address'>Дархан, ор-р Central Park, бывшего парка им</span>,
                    xona:<span className='xona'>{translate("xonalar")} 2,3,4</span>,
                    hammom:<span className='hammom'>{translate("hammom")}: 1,2</span>,
                    build:<span className='build'>Namuna Developmentd</span>


                }
            ]
        }
    }
    
    push=(index)=>{
        ++this.state.count[index].k
        this.setState({
            count:this.state.count
        })
        if(this.state.count[index].k%2==1) {
            document.getElementById("heart").setAttribute('class', 'fas fa-heart')
        }
        else {
            document.getElementById("heart").setAttribute('class', 'far fa-heart')
        }
        console.log(this.state.count[index].k)
    }










    render() {
        return(
            <div className="section1">
                <h2>{translate('eng mashhur yangi binolar')}</h2>
                <div className="sectiongrid">
                    {
                        this.state.count.map((item, index) => (
                            <div className="grid-item">
                                <div className='divimg'>
                                    <img src={item.image} />
                                    <div className="imgopacity">
                                        <div className='label'>
                                            <p className='p1'>
                                                {item.tavsiya}
                                                
                                            </p>
                                            <p className="p2">
                                                {item.kochmas}
                                                {item.inshoat}
                                                
                                                {item.ipoteka}
                                                {item.muddat}
                                                {item.tayyor}
                                            </p>
                                        </div>
                                        <div className='narxlari'>
                                            <div className='narxspan'>{item.narxi1} {item.narxi2}</div>
                                            <div className='narxlike'>
                                                <span><i onClick={()=>this.push(index)} id='heart' class="far fa-heart"></i></span>
                                                <span><i class="fas fa-camera"></i></span>
                                                <span><i class="fas fa-plus"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text'>
                                    <div className='d-flex flex-column'>
                                        {item.a}
                                        {item.address}
                                    </div>
                                    <div className='d-flex justify'>
                                        <div className='d-flex flex-column'>
                                            {item.xona}
                                            {item.hammom}
                                            {item.build}
                                        </div>
                                        <div>
                                            <a className='haqida'>{translate("haqida")} <i class="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div><hr/>
                                    <p><i className='fas fa-user'></i> {item.build}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='reklama'>
                    <img src='https://domtut.uz/wp-content/uploads/2021/04/dinastiya_banner_desctop.jpg' />
                </div>
            </div>
        )
    }
}
export default Section1