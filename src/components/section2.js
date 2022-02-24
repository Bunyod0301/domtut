import { textAlign } from "@mui/system";
import React from "react";
import '../css/section.css'
import translate from "../i18n/messages/translate";

class Section2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: [
                {
                    image: "https://domtut.uz/wp-content/uploads/2021/03/baraka_residence_renders11-810x430.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi1-1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi1-2")}</span>,
                    a:<a className='aa'>{translate("baraka")}</a>,
                    address:<span className='address'>Дурмень ул. Мирабад 32</span>,
                    img:"https://domtut.uz/wp-content/uploads/2021/03/barakatmplogjpg-350x350.jpg",
                    xonalar:"2,3,4",
                    sanzuel:"1,2",
                    qavat:"8",
                    yil:"2020",
                    build:"Baraka Residence"
                },
                {
                    image: "https://domtut.uz/wp-content/uploads/2020/12/infinity_renders1-810x430.jpg",
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    kochmas:<span className="kochmas">{translate("kochmas")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi2-1')}</span>,
                    a:<a className='aa'>{translate("infinity")}</a>,
                    address:<span className='address'>Пересечение улиц А. Кадырий и Истикбол</span>,
                    img:"https://domtut.uz/wp-content/uploads/2019/09/goldenhouse-zastr-logo-350x280.jpg",
                    xonalar:"1,2,3,4",
                    sanzuel:"1,2",
                    qavat:"10",
                    yil:"2021",
                    build:"Golden House"
                },
                {
                    image: "https://domtut.uz/wp-content/uploads/2021/03/sky_line_renders7-810x430.jpg",
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi3-1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi3-2")}</span>,
                    a:<a className='aa'>{translate("skyline")}</a>,
                    address:<span className='address'>улица Нукусская, 72А (ор-р: Мирабадский р</span>,
                    img:"https://domtut.uz/wp-content/uploads/2021/03/sky_line_logo-350x280.jpg",
                    xonalar:"1,2,3",
                    sanzuel:"1,2",
                    qavat:"9",
                    yil:"2021",
                    build:"Roaf Company"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2019/10/g1-1-810x430.jpg',
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    ipoteka:<span className="ipoteka">{translate("bank")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi4-1')}</span>,
                    a:<a className='aa'>{translate("greenwich")}</a>,
                    address:<span className='address'>г.Ташкент, пересечение улиц Янгизамон и С</span>,
                    img:"https://domtut.uz/wp-content/uploads/2019/09/goldenhouse-zastr-logo-350x280.jpg",
                    xonalar:"1,2,3",
                    sanzuel:"2",
                    qavat:"9",
                    yil:"2021",
                    build:"Golden House"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2020/06/sky-builds_renders-810x430.jpg',
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    kochmas:<span className="kochmas">{translate("kochmas")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi5-1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi5-2")}</span>,
                    a:<a className='aa'>{translate("skybuild")}</a>,
                    address:<span className='address'>ул Карасув №35</span>,
                    img:"https://domtut.uz/wp-content/uploads/2020/01/logo_sky_builds-350x280.jpg",
                    xonalar:"2,3,4,5",
                    sanzuel:"1,2",
                    qavat:"11",
                    yil:"2022",
                    build:"Sky Builds"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2020/09/sagbon_renders6-810x430.jpg',
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    ipoteka:<span className="ipoteka">{translate("bank")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi6-1')}</span>,
                    a:<a className='aa'>{translate("sagbon")}</a>,
                    address:<span className='address'>10-й проезд улицы Сагбан</span>,
                    img:"https://domtut.uz/wp-content/uploads/2019/09/goldenhouse-zastr-logo-350x280.jpg",
                    xonalar:"2,3,4",
                    sanzuel:"1,20",
                    qavat:"8",
                    yil:"2020",
                    build:"Golden House"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2020/03/assalom_renders4-810x430.jpg',
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    ipoteka:<span className="ipoteka">{translate("bank")}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi7-1')}</span>,
                    a:<a className='aa'>{translate("assalom")}</a>,
                    address:<span className='address'>г. Ташкент, ул Махтумкули</span>,
                    img:"https://domtut.uz/wp-content/uploads/2019/09/goldenhouse-zastr-logo-350x280.jpg",
                    xonalar:"2,3,4",
                    sanzuel:"1,20",
                    qavat:"8",
                    yil:"2020",
                    build:"Golden House"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2020/04/kamran_renders2-810x430.jpg',
                    tavsiya:<span className="tavsiya">{translate("tavsiya")}</span>,
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi8-1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi8-2")}</span>,
                    a:<a className='aa'>{translate("kamron")}</a>,
                    address:<span className='address'>ул. M. Kakhkharov</span>,
                    img:"https://domtut.uz/wp-content/uploads/2020/10/ava-pic-4.png.jpg",
                    xonalar:"2,3,4",
                    sanzuel:"1,20",
                    qavat:"8",
                    yil:"2020",
                    build:"Aparto"
                },
                {
                    image:'https://domtut.uz/wp-content/uploads/2020/10/ecodom_renders-810x430.jpg',
                    inshoat:<span className="inshoat">{translate('inshoat')}</span>,
                    muddat:<span className="muddat">{translate("muddat")}</span>,
                    narxi1:<span className='narxi1'>{translate('narxi9-1')}</span>,
                    narxi2:<span className='narxi2'>{translate("narxi9-2")}</span>,
                    a:<a className='aa'>{translate("renommee")}</a>,
                    address:<span className='address'>ул. Турарык 57</span>,
                    img:"https://domtut.uz/wp-content/uploads/2020/10/ecodom_logo-350x350.jpg",
                    xonalar:"1,2,3",
                    sanzuel:"1,2",
                    qavat:"5",
                    yil:"2020",
                    build:"Ecodom"
                }
            ]
        }
    }

    render() {
        return(
            <div className="section2">
                <div className="sectiongrid">
                    {
                        this.state.count.map((item, index) => (
                            <div className="grid-item2">
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
                                                <span><i class="far fa-heart"></i></span>
                                                <span><i class="fas fa-camera"></i></span>
                                                <span><i class="fas fa-plus"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text'>
                                    <div style={{padding:"10px 0"}} className='d-flex flex-column'>
                                        {item.a}
                                        {item.address}
                                    </div>
                                    <div>
                                        <ul className="ulsection2">
                                            <li className="imgli"><img src={item.img}/></li>
                                            <li><h><span>{item.xonalar}</span>Xonalar</h></li>
                                            <li><h><span>{item.sanzuel}</span>Sanzuel</h></li>
                                            <li><h><span>{item.qavat}</span>Qavat</h></li>
                                            <li><h><span>{item.yil}</span>Yil</h></li>
                                        </ul>
                                    </div>
                                    <div className="item-plans">
                                        <div className="item-plan">
                                            <div className="plan-type">{translate("plantype")}</div>
                                            <div className="plan-price">{translate("planprice")}</div>
                                        </div>
                                        <div className="item-plan">
                                            <div className="plan-type">{translate("plantype")}</div>
                                            <div className="plan-price">{translate("planprice")}</div>
                                        </div>
                                        <div className="item-plan">
                                            <div className="plan-type">{translate("plantype")}</div>
                                            <div className="plan-price">{translate("planprice")}</div>
                                        </div>
                                        <div className="item-plan">
                                            <div className="plan-type">{translate("plantype")}</div>
                                            <div className="plan-price">{translate("planprice")}</div>
                                        </div>
                                        <div className="item-plan">
                                            <div className="plan-type">{translate("plantype")}</div>
                                            <div className="plan-price">{translate("planprice")}</div>
                                        </div>
                                    </div>
                                    <a className="build"><i className='fas fa-user'></i> {item.build}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="btnbarchasi">
                    <button>{translate("Barchasini ko'rish")}</button>
                </div>
                <div className="reklama">
                    <img src="https://domtut.uz/wp-content/uploads/2021/04/banner_modera_desktop.jpg"/>
                </div>
            </div>
        )
    }
}
export default Section2