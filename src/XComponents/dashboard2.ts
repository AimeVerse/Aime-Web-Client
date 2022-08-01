
import { Xpell, XUtils, XData, XUI, XEventManager as XEM, XUIObject, XObjectPack } from 'xpell'






export class DashboardLeft extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-left",
            _html_tag: "div",
            class: "dashboard-left"

        }
        super(data, defaults);

        let dashboardLeft = /* html */`
        <aside>
            <div id="result"></div>
            <div class="top">
                <div class="logo">
                    <img src="/images/aime-logo.svg" alt="AIME logo"/>
                    <h2>AIME</h2>
                </div>
                <div class="close" id="close-btn">
                    <span _html_tag="span" class="material-icons material-symbols-sharp">close</span>
                </div>
            </div>
            <div class="sidebar">
                <a href="#" class="active">
                    <span class="material-icons material-symbols-sharp">person_outline</span>
                    <h3>Customers</h3>
                </a>
                <a href="#" class="">
                    <span class="material-icons material-symbols-sharp">insights</span>
                    <h3>Analytics</h3>
                </a>
                <a href="#" class="">
                    <span class="material-icons material-symbols-sharp">settings</span>
                    <h3>Settings</h3>
                </a>
                <a href="#" class="">
                    <span class="material-icons material-symbols-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>`


        const sj = Xpell.parser.xmlString2Xpell(dashboardLeft);
        const sjObj = XUI.create(sj)
        this.append(sjObj)
    }

    async onMount() {
        const sideMenu = document.querySelector("aside");
        const menuBtn = document.querySelector("#menu-btn");
        const closeBtn = document.querySelector("#close-btn");
        
        menuBtn.addEventListener('click', () => {
            sideMenu.style.display = 'block';
        })
        
        closeBtn.addEventListener('click', () => {
            sideMenu.style.display = 'none';
        })
    }

    
}

export class DashboardMain extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-main",
            _html_tag: "main",
            class: "main"

        }
        super(data, defaults);

        let dashboardMain = /* html */`
        <div>
            <h1>AIME Dashboard</h1>

            <div class="date">
                <input type="date"/>
            </div>
  

            <div class="insights">
      
                <div class="sales">
                    <span class="material-icons material-symbols-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Online Users</h3>
                            <h1>37</h1>
                        </div>

                    </div>
                    <small class="text-muted">Last 24 hours</small>
                </div>

                <div class="expenses">
                    <span _html_tag="span" class="material-icons material-symbols-sharp">bar_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Expenses</h3>
                            <h1>$1,487</h1>
                        </div>

                        <div class="progress">
                            <svg>
                                <circle cx="40" cy="40" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>65%</p>
                            </div>
                        </div>

                    </div>
                    <small class="text-muted">Last 24 hours</small>
                </div>
  
                <div class="income">
                    <span _html_tag="span" class="material-icons material-symbols-sharp">stacked_line_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Income</h3>
                            <h1>$13,476</h1>
                        </div>

                        <div class="progress">
                            <svg>
                                <circle cx="40" cy="40" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>87%</p>
                            </div>
                        </div>

                    </div>
                    <small class="text-muted">Last 24 hours</small>
                </div>
            </div>
    

            <div class="recent-activities">
                <h2>Recent Activities</h2>
<table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Activity</th>
                            <th>Server</th>
                            <th>Parcel</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jacob</td>
                            <td>Clicked on player</td>
                            <td>Atlas</td>
                            <td>13,4</td>
                            <td>14.6,2.2,16.81</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Expression: Hand wave</td>
                            <td>Atlas</td>
                            <td>13,4</td>
                            <td>14.6,2.2,16.81</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Guest #5733</td>
                            <td class="danger">Disconnected</td>
                            <td>Atlas</td>
                            <td>4,17</td>
                            <td>14.6,2.2,16.81</td>
                            <td class="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Olly02</td>
                            <td>Bought an item</td>
                            <td>Atlas</td>
                            <td>11,5</td>
                            <td>14.6,2.2,16.81</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </div>`

        
        const sj = Xpell.parser.xmlString2Xpell(dashboardMain);
        const sjObj = XUI.create(sj)
        this.append(sjObj)
    }
    
}

export class DashboardRight extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-right",
            _html_tag: "div",
            class: "right-wrapper"

        }
        super(data, defaults);
        let dashboardRight = /* html */`
        <div class="right">
        <div class="top">
            <button id="menu-btn">
                <span class="material-icons material-symbols-sharp">menu</span>
            </button>
            <div class="theme-toggler">
                <span class="material-icons material-symbols-sharp active">light_mode</span>
                <span class="material-icons material-symbols-sharp">dark_mode</span>
            </div>
            <div class="profile">
                <div class="info">
                    <p><span>hey,</span><b>Pikachu01</b> </p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="/images/pikachu.jpg" alt="Pikachu01"/>
                </div>
            </div>
        </div>

        <div class="recent-updates">
            <h2>Recent Updates</h2>
            <div class="updates">
                <div class="update">
                    <div class="profile-photo">
                        <img src="/images/pikachu2.jpg" alt="Pikachu02"/>
                    </div>
                    <div class="message">
                        <p><b>Pikachu 02</b><p>received 350 Mana Coins</p></p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div>
                <div class="update">
                    <div class="profile-photo">
                        <img src="/images/pikachu3.jpg" alt="Pikachu03"/>
                    </div>
                    <div class="message">
                        <p><b>Pikachu 03</b> <p>received 170 Mana Coins</p></p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div>
                <div class="update">
                    <div class="profile-photo">
                        <img src="/images/pikachu4.jpg" alt="Pikachu04"/>
                    </div>
                    <div class="message">
                        <p><b>Pikachu 04</b> <p>received 230 Mana Coins</p></p>
                        <small class="text-muted">2 Minutes Ago</small>
                    </div>
                </div>
            </div>
        </div>

    <div class="sales-analytics">
        <h2>Sales Analytics</h2>
        <div class="item online">
            <div class="icon">
                <span class="material-icons material-symbols-sharp">shopping_cart</span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>ONLINE SALES</h3>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                <h5 class="success">+41%</h5>
                <h5>3268</h5>
            </div>
        </div>
        <div class="item offline">
            <div class="icon">
                <span class="material-icons material-symbols-sharp">monetization_on</span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>ADS VIEWD</h3>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                <h5 class="danger">-13%</h5>
                <h5>482</h5>
            </div>
        </div>
        <div class="item customer">
            <div class="icon">
                <span class="material-icons material-symbols-sharp">person</span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>NEW USERS</h3>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                <h5 class="success">+27%</h5>
                <h5>23</h5>
            </div>
        </div>
        <div class="item add-product">
            <div>
                <span class="material-icons material-symbols-sharp">add</span>
                <h3>Add Product</h3>
            </div>
        </div>
    </div>
    </div>`


        const sj = Xpell.parser.xmlString2Xpell(dashboardRight);
        const sjObj = XUI.create(sj)
        this.append(sjObj)

    }

    async onMount() {
        const themeToggler = document.querySelector(".theme-toggler");

        // Change theme
        themeToggler?.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme-variables');

            themeToggler?.querySelector('span:nth-child(1)')?.classList.toggle('active');
            themeToggler?.querySelector('span:nth-child(2)')?.classList.toggle('active');
        })
    }
}

// export class DashboardLoader extends XUIObject {
//     constructor(data) {

//         const ids = XUtils.guid()
//         const defaults = {
//             _ids: ids,
//             _type: "dashboard-loader",
//             _html_tag: "div",
//             class: "dashboard-loader"

//         }
//         super(data, defaults);

//         const loaderContainer = XUI.create({ "_type": "view", "_id": "loaderContainer" + ids, "class": "loader-container" })
//         const aimeLoader = XUI.create({ "_type": "view", "_id": "aimeLoader" + ids, "class": "loader" })

//         loaderContainer.append(aimeLoader)

//     }

// }

export class DashboardPanel extends XUIObject {
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _ids: ids,
            _type: "dashboard-panel",
            _html_tag: "div",
            class: "container",


        }
        super(data, defaults);


        const dashboardLeft = new DashboardLeft({ _id: "dashboard-left" })
        const dashboardMain = new DashboardMain({ _id: "dashboard-main" })
        const dashboardRight = new DashboardRight({ _id: "dashboard-right" })
        // const aimeLoader = new DashboardLoader({ _id: "aime-dashboard-loader" })




        // const widgets = XUI.create({ "_type": "view", "_id": "widgets" + ids, "class": "widgets" })
        // const cardPack = new CardPack({ _id: "cp" })



        this.append(dashboardLeft)
        this.append(dashboardMain)
        this.append(dashboardRight)
        // this.append(headerPanel)
        // this.append(dashboardBody)
        // dashboardBody.append(sidePanel)
        // dashboardBody.append(widgets)

        // aimeLoader.append(loaderContainer)

        // widgets.append(dashboardWidget)
        // dashboardWidget.append(cardPack)
        // dashboardWidget.append(userCard2)

    }

}


export class DashboardComponent extends XObjectPack {
    static getObjects() {
        return {
            "dashboard-panel": DashboardPanel,
            "dashboard-left": DashboardLeft,
            "dashboard-main": DashboardMain,
            "dashboard-right": DashboardRight,
            // "dashboard-loader": DashboardLoader
            // "card": UserCard,
            // "card-pack": CardPack
        }
    }
}


export default DashboardComponent