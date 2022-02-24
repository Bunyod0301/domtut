import React, { useState } from "react";
import './dropdown.css';
import translate from "../i18n/messages/translate";
function Dropdown() {

    const [ToggleBtn, SetToggleBtn] = useState(false)
    const [ToggleBtn2, SetToggleBtn2] = useState(false)
    const [ToggleBtn3, SetToggleBtn3] = useState(false)
    const [ToggleBtn4, SetToggleBtn4] = useState(false)

    return(
        <div className="d-flex dropdown1">
            <div onClick={()=>{SetToggleBtn(!ToggleBtn);SetToggleBtn2(false);SetToggleBtn3(false);SetToggleBtn4(false)}} title="Barcha tumanlar" className="menu1">
                <span>{translate("tumanlar")}</span>
                <i className="fas fa-sort"></i>
            </div>
            {ToggleBtn
            ? <div id="contentt1" className="contentt1">
            <div className="tumanlar">
                <a>Mirobod</a>
                <a>Mirzo Ulug'bek</a>
                <a>Olmazor</a>
                <a>Sergeli</a>
                <a>Shayxontohur</a>
                <a>Uchtepa</a>
                <a>Yakkasaroy</a>
                <a>Yashnaobod</a>
                <a>Yunusobod</a>
                <a>Бектемирский</a>
                <a>Кибрайский</a>
                <a>Янгихаётский</a>
            </div>
            </div>
            : null
            }
            <div onClick={()=>{SetToggleBtn2(!ToggleBtn2);SetToggleBtn(false);SetToggleBtn3(false);SetToggleBtn4(false)}} title="Qurilish tashkilotini tanlang" className="menu2">
                <span>{translate("tashkilot")}</span>
                <i className="fas fa-sort"></i>
            </div>
            {ToggleBtn2
            ? <div id="contentt2" className="contentt2">
                <div className="tashkilot">
                    <div className="qur1">
                        <a>AkayCity</a>
                        <a>Aparto</a>
                        <a>Asklepiy svift</a>
                        <a>Baraka Residence</a>
                        <a>Bekzod Bek Baraka</a>
                        <a>Bogi Shamol</a>
                        <a>Comfort House</a>
                        <a>Dream House</a>
                        <a>Eco House</a>
                        <a>Edison</a>
                        <a>Favorit House</a>
                        <a>Future Growth</a>
                        <a>Golden Castles</a>
                        <a>Grand Estate</a>
                        <a>Hi-Tech</a>
                        <a>Irbis Stroy</a>
                        <a>Kafil Invest</a>
                        <a>KOSHONA</a>
                        <a>Luxury House</a>
                        <a>Modern Sergeli</a>
                        <a>Namuna Development</a>
                        <a>New Unique Service</a>
                        <a>Obi Hayot</a>
                        <a>Oltin Baliq</a>
                        <a>Prestige Stroy</a>
                        <a>Real House</a>
                        <a>Sayram Tower</a>
                        <a>Simplex Buildings</a>
                        <a>Solidity Group</a>
                        <a>Star House</a>
                        <a>Sun City</a>
                        <a>The Tower Build</a>
                        <a>VEK</a>
                        <a>WellHome</a>
                        <a>Мyhouse</a>
                    </div>
                    <div className="qur2">
                        <a>Alliance Business Center</a>
                        <a>Aristocrat Home</a>
                        <a>Aristocrat Home</a>
                        <a>Asser Stroy Servis</a>
                        <a>BB-Stroy</a>
                        <a>Best Capital Group</a>
                        <a>CHINABAD</a>
                        <a>Diamond Villa</a>
                        <a>Ducat Company</a>
                        <a>Eco Sergili Qurilish</a>
                        <a>Ested</a>
                        <a>FDG</a>
                        <a>Future House</a>
                        <a>Golden House</a>
                        <a>Grand House</a>
                        <a>Huvaydo</a>
                        <a>Ishonch Stroy Building</a>
                        <a>Karvuch Mega Stroy</a>
                        <a>LANDLORD</a>
                        <a>Medeg – Asiya</a>
                        <a>Modern Stroy</a>
                        <a>New City Stroy</a>
                        <a>Nova Stroy</a>
                        <a>Obod Plaza</a>
                        <a>Osiyo Stroy</a>
                        <a>PSK-2</a>
                        <a>Roaf Company</a>
                        <a>Sayram Village</a>
                        <a>Sky Build</a>
                        <a>Somang</a>
                        <a>STRONG EDIFICE</a>
                        <a>Suxiem</a>
                        <a>Trust Invest</a>
                        <a>Virsaviya Projekt</a>
                        <a>Yunusobod</a>
                    </div>
                    <div className="qur3">
                        <a>Anol Group</a>
                        <a>Arjun</a>
                        <a>AZIYA INVEST FAVORIT</a>
                        <a>BEKOLE-BIZNES</a>
                        <a>Bizning Uylar</a>
                        <a>City Life</a>
                        <a>Dream City Development</a>
                        <a>Eco Dream</a>
                        <a>Ecodom</a>
                        <a>Etalon Building</a>
                        <a>Full Stroy</a>
                        <a>Genesys</a>
                        <a>Grand Capital</a>
                        <a>Green Park</a>
                        <a>INNOVA MAX</a>
                        <a>Jet Profit</a>
                        <a>Komfort</a>
                        <a>Luxe house</a>
                        <a>MJ Developers</a>
                        <a>Murad Building</a>
                        <a>New Life</a>
                        <a>Nrg</a>
                        <a>Olmos Residence</a>
                        <a>Perfect House</a>
                        <a>Real City</a>
                        <a>Saroy Invest</a>
                        <a>Silk Road</a>
                        <a>Solid Stroy</a>
                        <a>Sputnik</a>
                        <a>Stroy Paritet</a>
                        <a>Territoriya Group</a>
                        <a>Urban Stroy</a>
                        <a>Vita Alliance</a>
                        <a>Zarafshan Golden Group</a>
                        <a>Янги Камолон</a>
                    </div>
                </div>
            </div>
            : null
            }
            <div className="menu3" title="Xonalar" onClick={()=>{SetToggleBtn3(!ToggleBtn3); SetToggleBtn2(false); SetToggleBtn4(false); SetToggleBtn(false)}}>
                <span>{translate("xona")}</span>
                <i className="fas fa-sort"></i>
            </div>
            {ToggleBtn3
                ? <div id="contentt3" className="contentt3">
                    <div className="soni">
                        <a>1</a>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a>5</a>
                        <a>6</a>
                        <a>7</a>
                        <a>8</a>
                    </div>
                    <div className="d-flex flex-column">
                        <a>Свободная планировка</a>
                        <a>Barchasi</a>
                    </div>
                </div>
                : null
            }
            

            <div className="menu4" title="Ipoteka, bo'lib to'lash" onClick={()=>{SetToggleBtn4(!ToggleBtn4);SetToggleBtn(false);SetToggleBtn2(false);SetToggleBtn3(false)}}>
                <span>{translate("ipoteka")}</span>
                <i className="fas fa-sort"></i>
            </div>
            {ToggleBtn4
                ? <div className="contentt4" id="contentt4">
                    <div className="d-flex flex-column">
                        <a>Ipoteka, bo'lib to'lash</a>
                        <a>10%</a>
                        <a>15%</a>
                        <a>5%</a>
                        <a>Ipoteka</a>
                        <a>Maxsus taklif</a>
                        <a>Muddatli to'lov</a>
                        <a>Tayyor</a>
                        <a>Специальное предложение</a>
                    </div>
                </div>
                : null
                }
        </div>
    )
}
export default Dropdown