import React, { useState } from 'react'
import {I18nProvider, LOCALES} from '../i18n'
import translate from '../i18n/messages/translate'
import {Helmet} from 'react-helmet'
import '../App.css'
import '../css/header.css'
import Dropdown from './Dropdown'
import CustomizedSlider from './Slider'
import Trigger from './Trigger'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'


function Body() {
    
    
    const [count, setCount] =useState(LOCALES.UZ)
    const [title, setTitle] = useState("Yangi qurilgan uylar Toshkent | Yangi qurilgan uylar narxi | Domtut")
    const [input,setInput]=useState("Masalan: markazda 3 xonalik kvartira")
    const [scroll, setscroll] = useState(false)
    function translaterus() {
        setCount(LOCALES.RUS)
        setTitle("Новостройки в Ташкенте | Цены на квартиры от застройщиков, ипотека")
        setInput("Например: Жилой комплекс.....")
    }
    function translateuz() {
        setCount(LOCALES.UZ)
        setTitle("Yangi qurilgan uylar Toshkent | Yangi qurilgan uylar narxi | Domtut")
        setInput("Masalan: markazda 3 xonalik kvartira")
    }
    const  scrl=()=> {
        const cnt= window.scrollY
        if(cnt>=300) {
            document.getElementById("navbar").style.position='fixed'
            document.getElementById("navbar").style.width="100%"
            document.getElementById("navbar").style.zIndex='3'
        }
        else{
            document.getElementById("navbar").style.position='relative'
        }
    }
    window.addEventListener('scroll', scrl)
    return(

        <I18nProvider locale={count}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img className='logo' src='https://domtut.uz/wp-content/uploads/2018/12/logo.png' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <div class="dropdownn">
                                        <a class="dropbtn nav-link">{translate('kvartiralar')} <i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown-content">
                                            <div className='item1 d-flex'>
                                                <div>
                                                    <a  href="#"><p>{translate('kvartira')}</p></a>
                                                    <a  href="#">1 {translate('xonalik')}</a>
                                                    <a  href="#">2 {translate('xonalik')}</a>
                                                    <a  href="#">3 {translate('xonalik')}</a>
                                                    <a  href="#">4 {translate('xonalik')}</a>
                                                    <a  href="#">5 {translate('xonalik')}</a>
                                                </div>
                                                <div>
                                                    <a  href="#"><p>{translate('narxi')}</p></a>
                                                    <a  href="#">{translate('300mln')}</a>
                                                    <a  href="#">{translate('500mln')}</a>
                                                    <a  href="#">{translate('800mln')}</a>
                                                    <a  href="#">{translate('800ortiq')}</a>
                                                    <a  href="#">{translate('remont')}</a>
                                                    <a  href="#">{translate('remontsiz')}</a>
                                                </div>
                                                <div>
                                                    <a  href="#"><p>{translate('kvadratura')}</p></a>
                                                    <a  href="#">{translate('50m')}</a>
                                                    <a  href="#">{translate('50mdan')}</a>
                                                    <a  href="#">{translate('75mdan')}</a>
                                                    <a  href="#">{translate('100m')}</a>
                                                    <a  href="#">{translate('200m')}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">{translate('xarita')}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">{translate('qurilish')}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">{translate('reklama')}</a>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdownn2">
                                        <a class="nav-link">{translate('foydali')} <i class="fas fa-caret-down"></i></a>
                                        <div class="dropdown-content2">
                                            
                                            <a class="dropdown-item" href="#">{translate('kalk')}</a>
                                            <a class="dropdown-item" href="#">{translate('kredit')}</a>
                                            <a class="dropdown-item" href="#">{translate('bank')}</a>
                                            <a class="dropdown-item" href="#">{translate('blog')}</a>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className='d-flex'>
                                        <a class="nav-link" onClick={translaterus}><img src='https://domtut.uz/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png'/></a>
                                        <a class="nav-link" onClick={translateuz}><img src='https://domtut.uz/wp-content/plugins/sitepress-multilingual-cms/res/flags/uz.png'/></a>
                                    </div>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <div className="login d-flex">
                                    <button type="button" class="btn btnkirish nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    {translate('kirish')}
                                    </button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header modalheader">
                                                    <a class="modal-title forum foruma" id="exampleModalLabel">{translate("kirish")}</a>
                                                    <a class="modal-title forum" id="exampleModalLabel">{translate("royxat")}</a>
                                                    <button type="button" class="btn-closee" data-bs-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button>
                                                </div>
                                                <div class="modal-body">
                                                    <input placeholder="Username or Email" />
                                                    <input placeholder="Parol" />
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="nav-link kirish">+</a>
                                </div>
                                <a target="/blank" href="https://t.me/joinchat/AAAAAEiumnI0oq_TjIYYXw" className="tglink nav-link"><i class="fab fa-telegram-plane"></i>  {translate('telegram')}</a>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="header" id="header">
                    <div className="content">
                        <h1>{translate("yangi uylar")}</h1>
                        <h2>{translate("qulay")}</h2>
                        <div className="content1" id="content1">
                            <div className="d-flex">
                                <input className="input1" placeholder={input} />
                                <Dropdown/>
                            </div>
                            <div className="d-flex btnplus">
                                <CustomizedSlider/>
                                <Trigger/>
                                <div className='btns'>
                                    <a className="btn4"><i class="fas fa-map-marker-alt"></i> {translate('xaritadan izlash')}</a>
                                    <a className="btn5"><i class="fas fa-search"></i> {translate('izlash')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>


            </div>
        </I18nProvider>
    )
}
export default Body