import { Spell, Spell3d, Spell3dModule, SpellUI, SpellUIModule, SpellData, SpellEvents, SpellAIModule } from '/lib/spell/index.js'
import { LoginComponent } from './views/login.js'
import { DashboardComponent } from './views/dashboard.js'
import "../lib/spell/style/spell.css"
// import "../public/style/space-hud.css"



async function main() {

    const spell_ui = new SpellUIModule()



    Spell.load_module(spell_ui)

    

    // spell_ui.engine.import_objects(LoginComponent)
    spell_ui.engine.import_objects(DashboardComponent)


    Spell.start()

    
    const spell_app = {
        spell: {
            version: 1
        },
        views: {
            // "login-view": {
            //     _type: "login",
            //     _id: "login-view",
            //     animation: "fade",
            // },
            "side-panel-view": {
                _type: "side-panel",
                _id: "side-panel-view",
                animation: "fade",
            }
        },
        defaults: {
            view: "side-panel-view"
        },
        player: {
            html_element: "spell-player"
        }

    }


    SpellUI.load_app(spell_app)

    SpellUI.vm.show_view("side-panel-view")

    

}

main().then()