
import { Xpell, XUtils, XData, XUI, XEventManager as XEM ,XUIObject, XObjectPack} from 'xpell'







// let localCss = /*css*/ `
// .login-form {
//     width:"120px";
//     background-color: #fff;
    
// }
// `





export class SidePanel extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "side-panel",
            _html_tag: "div",
            class: "side-panel"

        }
        super(data, defaults);

        let sidePanel = /*html*/ `
            <div id="panel" class="panel">
                <div id="topSection" class="topSection">
                    <div id="analytics" class="analytics">
                        <div class="side-panel-button analytics-btn">
                            <img src="/svg/side-button-selected.svg" alt="button-img"/>
                        </div>
                        <div class="side-panel-button analytics-btn">
                            <img src="/svg/side-button.svg" alt="button-img"/>
                        </div>
                    </div>
                    </div>
                    <div id="bottom" class="bottomSection">
                    <div id="worlds" class="worlds">
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world.png" alt="world-img"/>
                            </div>
                            <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world2.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world3.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world3.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world2.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world3.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world2.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world2.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world3.png" alt="world-img"/>
                        </div>
                        <div class="side-panel-button worlds-btn">
                            <img src="/images/dashboard/world.png" alt="world-img"/>
                        </div>
                        </div>
                        
                    <div class="time-fps">
                        <div class="side-panel-button"><label id="high-fps-real-time-label" _data_source="sys-time" text="${Date.now()}"/></div>
                        <div class="side-panel-button"><label id="fps" _data_source="fps" _format="FPS: _$" text="${Date.now()}"/></div>
                    </div>
                </div>
            </div>`

        let domParser = new DOMParser();
        // domParser.parseFromString(template, "text/html")
        let xmlNode = domParser.parseFromString(sidePanel.replaceAll("\n", ""), "text/xml").firstChild
        // console.log(xmlNode.normalize());
        const sj = Xpell.parser.xml2Xpell(xmlNode);
        const sjObj = XUI.create(sj)
        console.log("sjo", sjObj);
        this.append(sjObj)

    }


    /**
     * onFrame implementation to update the data source for the time label in the template :)
     * @param {Number} frame_number 
     */
    async onFrame(frame_number) {
        const d = new Date()
        const zp = (num, places) => String(num).padStart(places, '0') //leading zero pad function 

        //update SpellData to update the data source
        XData.variables["sys-time"] = zp(d.getHours(), 2) + ":" + zp(d.getMinutes(), 2) + ":" + zp(d.getSeconds(), 2)

        // call super onFrame to bubble the event to the child spells
        super.onFrame(frame_number)
    }


}




export class HeaderPanel extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "header-panel",
            _html_tag: "div",
            class: "header-panel"

        }
        super(data, defaults);

        let header = /*html*/ `
        <div class="header">
            <div class="header-panel-left">
                <div id="logo" class="logo">
                    <img src="/svg/aime-logo.svg" alt="button-img"/>
                </div>
                <div class="header-search">
                    <img src="/images/dashboard/search.png" alt="search-icon"/>
                    <input id="header-search-input" type="text" placeholder="Search"/>
                </div>
            </div>
    
            <div class="header-panel-right">
                <button id="store-button">
                    <img src="/images/dashboard/store.png" alt="store-icon"/>
                    <span>Store</span>
                </button>
                <div id="notification-button">
                    <img src="/images/dashboard/mail.png" alt="mail-icon"/>
                </div>
                <div id="settings-button">
                    <img src="/images/dashboard/settings.png" alt="settings-icon"/>
                    </div>

                    <div id="user-button">
                        <h2>Hey user!</h2>
                        <div class="user-image"></div>
                    </div>
            </div>
                
        </div>`

        // let domParser = new DOMParser();
        // domParser.parseFromString(template, "text/html")
        // let xmlNode = domParser.parseFromString(header.replaceAll("\n", ""), "text/xml").firstChild
        // console.log(xmlNode.normalize());
        const sj = Xpell.parser.xmlString2Xpell(header);
        const sjObj = XUI.create(sj)
        this.append(sjObj)

    }
}

export class UserCard extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-widget",
            _html_tag: "div",
            class: "user-card-small",
            _user_data: {
                name: "Marina maximilian",
                online: false,
                favourite: false,
                image: "/images/avatars/girl.png"
            }

        }

        super(data, defaults);

        let widget = /*xml*/ `
        <view _id="user-small-card" class="user-card-registered">
            <view _id="user-small-card-inner" class="user-card-inner">
                <view class="favourite-icon"><image _id="widget-img" src="/images/avatars/favStar2.svg"/></view>
                <view class="online-time">2h</view>

                    <view _id="user-card-image">
                        <image _id="widget-img" src="${data._user_data.image}"/>
                    </view >
                    <view class="user-card-nametag">
                        <view class="online-status"></view>
                        <label title="${data._user_data.name}">${data._user_data.name}</label> 
                    </view >
            </view >
        </view >`

        const sj = Xpell.parser.xmlString2Xpell(widget);
        const sjObj = XUI.create(sj)
        // console.log("sj ",sj);
        // console.log("sjObj ",sjObj);
        this.append(sjObj)
    }
}



class CardPack extends XUIObject  {
    private _cards: Array<UserCard>
    constructor(data) {
        
        const defaults = {
            _type:"card-pack",
            _cards:[],
            _players:{},
            class:"card-pack"
        }
        super(data,defaults)
        this._cards.forEach(crd => {
            const crdObj = XUI.create(crd)
            this.append(crdObj)
        })
    }

    async onFrame(frameNumber: number): Promise<void> {
        const pa = XData.objects["players-list"]
        const keys = Object.keys(pa)
       keys.forEach(key => {
            const player = pa[key]
            if(!this["_players"][player.id]) {
                let iplayer = JSON.parse(JSON.stringify(player))
                
                iplayer["lastSeen"] = frameNumber
                this["_players"][player.id] = iplayer
                
                console.log("adding player " + iplayer.id);
                const crd = {
                            _type:"card",
                            _id:"crd-" + player.id,
                            _user_data:{
                                name: iplayer.name,
                                online: iplayer.online,
                                favourite: iplayer.favourite,
                                image: iplayer.image
                            }
                        }
                this.append(XUI.create(crd))
            } else {
                this["_players"][player.id].lastSeen = frameNumber
            } 
       })
       


        const playersArray = Object.keys(this["_players"])
        if(this["_players"]) {

            
            playersArray.forEach(player => {
                const p1 = this["_players"][player]
                //console.log(p1["name"],p1["lastSeen"]);
                
                if(p1["lastSeen"] != frameNumber) {
                    // console.log("anomaly ", p1["lastSeen"]);
                    const domCard = document.getElementById("crd-" + p1["id"]) 
                    
                    if(domCard)
                    document.getElementById(this._id)?.removeChild(domCard)
                    
                }
            })
        }

        super.onFrame(frameNumber)


    }
}


export class DashboardWidget extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-widget",
            _html_tag: "div",
            class: "aime-widget",
            // _data_source="users" _format="Online users _$"
            _widget_data: {
                
            }

        }
        super(data, defaults);

        // const widget = /*html*/ `
        // <view _id="widget" class="aime-widget">General widget</view >`


        // const sj = Spell.parser.xmlString2Spell(widget);
        // const sjObj = SpellUI.create(sj)
        // this.append(sjObj)
    }

}

export class DashboardBody extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-body",
            _html_tag: "div",
            class: "dashboard-body"

        }
        super(data, defaults);


    }
}

export class DashboardPanel extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-panel",
            _html_tag: "div",
            class: "dashboard-panel"

        }
        super(data, defaults);


        const widgets = XUI.create({ "_type": "view", "_id": "widgets" + ids, "class": "widgets" })

        // const sidePanel = new SidePanel({ _id: "sidePanel" })
        const headerPanel = new HeaderPanel({ _id: "headerPanel" })
        const dashboardBody = new DashboardBody({ _id: "dashboard-body" })
        const dashboardWidget = new DashboardWidget({ _id: "dashboard-users" })
        const cardPack = new CardPack({ _id: "cp" })
        // const userCard2 = new UserCard({ _id: "user2" })

        this.append(headerPanel)
        this.append(dashboardBody)
        // dashboardBody.append(sidePanel)
        dashboardBody.append(widgets)

        widgets.append(dashboardWidget)
        dashboardWidget.append(cardPack)
        // dashboardWidget.append(userCard2)

    }

}


export class DashboardComponent extends XObjectPack  {
    static getObjects() {
        return {
            "side-panel": SidePanel,
            "header-panel": HeaderPanel,
            "dashboard-panel": DashboardPanel,
            "dashboard-body": DashboardBody,
            "dashboard-widget": DashboardWidget,
            "card":UserCard,
            "card-pack":CardPack
        }
    }
}


export default DashboardComponent