import React, { useState } from "react";
import '../css/header.css'
import translate from "../i18n/messages/translate";
let k=0
function Trigger() {
    const [TriggerBtn, SetTrigger] = useState(false)
    
    function ok() {
        k++
        SetTrigger(!TriggerBtn)
        
        if(k%2==1){
            document.getElementById("content1").style.height="297px"
            document.getElementById("header").style.height="600px"
            document.getElementById("header").style.backgroundSize= "160% 140%"
            document.getElementById("i").setAttribute('class', 'fas fa-minus-square')
        }
        else{
            document.getElementById("content1").style.height="187px"
            document.getElementById("header").style.height="517px"
            document.getElementById("header").style.backgroundSize= "100% 100%"
            document.getElementById("i").setAttribute('class', 'fas fa-plus-square')
        }
    }

    return(
        <div>
            <button className="btn3" onClick={ok}><i class="fas fa-plus-square" id="i"></i> {translate('boshqa xususiyatlar')}</button>
            {TriggerBtn
                ? <div id="menus1" className="menus1">
                    <label><input type="checkbox" />Avtomobillar qo’yish joyi</label>
                    <label><input type="checkbox" />Bolalar bog’chasi</label>
                    <label><input type="checkbox" />Bolalar maydonchasi</label>
                    <label><input type="checkbox" />Domofon</label>
                    <label><input type="checkbox" />Internet</label>
                    <label><input type="checkbox" />Kafe va restoranlar</label>
                    <label><input type="checkbox" />Kimyoviy tozalash xizmati</label>
                    <label><input type="checkbox" />Kinoteatr</label>
                    <label><input type="checkbox" />Minimarket</label>
                    <label><input type="checkbox" />Ochiq basseyn</label>
                    <label><input type="checkbox" />Qo’riqlash xizmati</label>
                    <label><input type="checkbox" />Sport klubi</label>
                    <label><input type="checkbox" />Supermarket</label>
                    <label><input type="checkbox" />Terassa</label>
                    <label><input type="checkbox" />Tezyurar lift</label>
                    <label><input type="checkbox" />Videokuzatuv</label>
                </div>
                : null

            }
        </div>
    )
}
export default Trigger