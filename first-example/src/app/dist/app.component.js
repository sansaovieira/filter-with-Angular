"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.displayedColumns = ['id', 'title', 'author'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllData();
    };
    AppComponent.prototype.getAllData = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.dataShow = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.dataShow);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AppComponent.prototype.filterChange = function (event) {
        var filvalue = event.target.value;
        this.dataSource.filter = filvalue;
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], AppComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], AppComponent.prototype, "sort");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
