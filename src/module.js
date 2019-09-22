import { MetricsPanelCtrl, PanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

import * as _ from "ngMap";


import './css/panel.base.scss';
// Remove next imports if you don't need separate styles for light and dark themes
import './css/panel.dark.scss';
import './css/panel.light.scss';
// Remove up to here

class Ctrl extends MetricsPanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
	this.message = "nice!";
	console.log('hello from console!');
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE";
    this.events.on('data-received', this._onDataReceived.bind(this));
  }
  _onDataReceived(data) {
    console.log(data);
  }
  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    window.System.import(this.panelPath + 'css/panel.base.css!');
    // Remove next lines if you don't need separate styles for light and dark themes
    if (grafanaBootData.user.lightTheme) {
      window.System.import(this.panelPath + 'css/panel.light.css!');
    } else {
      window.System.import(this.panelPath + 'css/panel.dark.css!');
    }
    // Remove up to here
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }
  
}

Ctrl.templateUrl = 'partials/template.html';

export { Ctrl as PanelCtrl }
