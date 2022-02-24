import React from "react";
import translate from "../i18n/messages/translate";
import '../css/section4.css'

class Section4 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count:[
                {
                    image:"https://domtut.uz/wp-content/uploads/2020/12/sale-prop.png",
                    text1:<h3>Продвигайте недвижимость</h3>,
                    text2:<p className="text2">Премиум-размещение увеличивает количество звонков в 3 раза.</p>,
                    button:<button className="section5button"><a href="https://domtut.uz/uz?page_id=613">Продвинуть недвижимость</a></button>
                },
                {
                    image:"https://domtut.uz/wp-content/uploads/2020/12/add-file-1.png",
                    text1:<h3>Размещайте недвижимость</h3>,
                    text2:<p className="text2">Свяжитесь с нашим менеджером и ваша недвижимость взлетит!</p>,
                    button:<button className="section5button"><a href="https://t.me/domtut_admin">Разместить недвижимость</a></button>
                },
                {
                    image:"https://domtut.uz/wp-content/uploads/2020/12/map-find.png",
                    text1:<h3>Ищите на карте</h3>,
                    text2:<p className="text2">Ищите объявления рядом с работой, парком или родственниками</p>,
                    button:<button className="section5button"><a href="https://domtut.uz/uz?page_id=1672">Найти на карте</a></button>
                }
            ]
        }
    }


    render() {
        return(
            <div className="section4">
                <div className="helps">
                    <div className="text4">
                        <h2>{translate("Sizga qanday yordam berishimiz mumkin?")}</h2>
                        <p><span className="helptext"><strong>{translate("help1strong")}</strong> {translate("help1")}</span></p>
                        <p><span className="helptext">{translate("help2")}</span></p>
                        <p><span className="helptext"><strong>{translate("help3strong")}</strong> {translate("help3")}</span></p>
                        <p><span className="helptext">{translate("help4")}</span></p>
                        <p><span className="helptext">{translate("help5")}</span></p>
                        <p><span className="helptext"><a href="Odam.uz">Odam.uz</a> {translate("help6")}</span></p>
                    </div>
                    <div className="text5">
                        {
                            this.state.count.map((item, index) =>(
                                <div className="text-5">
                                   
                                        <div className="img"><img className="imgsection5" src={item.image}/></div>
                                        <div className="texts">
                                            {item.text1}
                                            {item.text2}
                                            {item.button}
                                        </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Section4