

/**
 * @class SpellViewManager
 * @description manage views activities
 * */

import * as _SE from "../spell-event-manager"
import Spell from "../spell"
import * as _SC from "../spell-consts"
import SpellUI from "./spell-ui"
import SpellUtils from "../spell-utils"
import SpellView  from "./spell-core-objects"




class SpellViewManager {
    raw_views: Record<string,string> ={}
    views:Record<string,SpellView>= {}
    active_view: string | null
    active_modal: string |null
    spell_html_elem: string = "spell-player" 

    /**
     * Spell View Manager constructor
     * @member raw_views This object contains the textual JSON representation of views (these are not SpellView objects, uses for caching views before loading)
     * @member views SpellView objects that are ready to use (show, hide...)
     */
    constructor() { 
        
        this.init();
    }

    init() {
        //handle back functionality for browser
        window.addEventListener('hashchange', this.hashchange)
        _SE.SpellEventManager.fire(_SE.SpellEvents.vm_loaded)
    }

    /**
     * Creates new SpellView 
     * @description turns view-data (JSON) to a spell object 
     * @param view_data
     * @param auto_add - if true and the view data {view_data} contains a "name" string the new view will be added automatically to the view manager
     * @return {SpellView}
     */
    createView(view_data, auto_add = true) {

        let new_view = SpellUI.create(view_data);
        if (auto_add && view_data.hasOwnProperty("name")) {
            document.querySelector("#" + this.spell_html_elem)?.append(new_view.getDOMObject());
            new_view.onMount()
            this.addView(new_view, view_data.name)
        }
        return new_view;
    }


    addView(view, view_name) {
        this.views[view_name] = view;
    }

    getView(view_name):SpellView {
        return this.views[view_name];
    }

    hasView(view_name):boolean {
        return this.views.hasOwnProperty(view_name)
    }

    addRawViews(vuz):void {
        let rvuz = Object.keys(vuz);
        rvuz.forEach((vu) => this.raw_views[vu] = vuz[vu]);
    }

    addRawView(view_name, view_data):void {
        this.raw_views[view_name] = view_data
    }

    loadPage(default_view_name):void {
        let anc = window.location.hash
        if (anc && anc.length > 1) {
            this.active_view = anc.substring(1);
        } else {
            this.active_view = default_view_name;
        }
        this.showPage(this.active_view)
    }


    /**
     * handle the hashchange browser event, used to support Back functionality.
     */
    hashchange():void {
        let anc = window.location.hash
        if (anc && anc.length > 1) {
            let v_name = anc.substring(1);
            if (this.active_view != v_name) {
                SpellUI.vm.showPage(v_name)
            }
        }
    }


    
    /**
     * Show view on screen
     * @param {*} view_name 
     */
    showView(view_name:string):void {
        let new_view;
        let oncreate = false;
        if (this.hasView(view_name)) {
            new_view = this.getView(view_name);
        }
        else {
            let vu = this.raw_views[view_name];
            vu.name = view_name;
            new_view = this.createView(vu) 
            oncreate = true;
        }
        new_view.show()
    }


    /**
     * Show view as page (set as active view and dismiss former active)
     * @param {*} view_name 
     */
    showPage(view_name):void {
        let vu = "", new_view;
        let oncreate = false;
        if (this.hasView(view_name)) {
            new_view = this.getView(view_name);
        }
        else {
            vu = this.raw_views[view_name];
            vu.name = view_name;
            new_view = this.createView(vu) 
            oncreate = true;
        }

        //get the active view
        let v_active = this.getView(this.active_view);
        if (v_active) {
            v_active.hide();
        }
        new_view.show();
        this.active_view = view_name;

        if (oncreate) {
            //temporary should be replaced with spell command
            //eval(new_view.oncreate);
        }
        SpellUI.open_url("#" + this.active_view);
    }


    /**
     * Show spell modal dialog
     * @param {*} spell_dialog_data 
     */
    show_dialog(spell_dialog_data) {

        if (!spell_dialog_data._id && spell_dialog_data.id) {
            spell_dialog_data._id = "spell-dialog-" + SpellUtils.guid();
        }
        let dialog = new SpellDialog(spell_dialog_data);
        dialog.show()
    }

    // hide_dialog(dialog_id) {
    //     if (!dialog_id) {
    //         dialog_id = this.active_modal;
    //     }
    //     ("#" + dialog_id).modal('hide')
    //     this.active_modal = null;
    // }

}

export default SpellViewManager