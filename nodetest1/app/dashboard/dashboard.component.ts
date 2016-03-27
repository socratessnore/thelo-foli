import {Component} from "angular2/core";
import {MDL} from "../mdl.directive";
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    selector: 'dashboard-component',
    directives: [MDL, ROUTER_DIRECTIVES],
    template: `
    <div style="padding: 1em;" class="mdl-padding--1em">
        <h4>Pysäkit</h4>

        <ul class="mdl-list">
            <li [routerLink]="['Stop', {id: 15}]" class="mdl-list__item mdl-list__item--three-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">directions_bus</i>
                    <span>Nostoväenkatu #982</span>
                    <span class="mdl-list__item-text-body">Linjat 18, 88</span>
                </span>
                <span class="mdl-list__item-secondary-content">
                    <i class="material-icons">directions</i>
                </span>
            </li>
        </ul>

        <div style="height: 75px; position: absolute; bottom: 75px; width: 100%" class="mdl-layout__header-row foli-background--white">
            <div class="foli-navigaatio__searchbox">
                <form action="#">

                    <div style="width: 100%" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input mdl type="text" id="search" class="mdl-textfield__input foli-color--black">
                        <label for="search" class="mdl-textfield__label">Syötä pysäkin nimi tai numero</label>
                    </div>
                </form>
            </div>

            <div class="mdl-layout-spacer"></div>

            <div class="foli-navigaatio__myplace">
                <a href="#">
                    <i class="material-icons">my_location</i>
                </a>
            </div>
        </div>
    </div>
    `
})
export class DashboardComponent {}