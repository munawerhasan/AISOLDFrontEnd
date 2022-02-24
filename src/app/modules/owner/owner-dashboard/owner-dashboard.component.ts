import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
/*import {NotificationsService} from 'angular2-notifications';*/

declare const AmCharts: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/usaLow.js';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwnerDashboardComponent implements OnInit, AfterViewInit {

  options: any = {
    position: ['bottom', 'right'],
  };

  public thisMonthData: any;
  public thisMonthOption: any;

  constructor() { // private servicePNotify: NotificationsService
  }

  ngOnInit() {
    setTimeout(() => {
      AmCharts.makeChart('sales-analytics', {
        'type': 'serial',
        'theme': 'light',
        'hideCredits': true,
        'marginRight': 40,
        'marginLeft': 40,
        'autoMarginOffset': 20,
        'dataDateFormat': 'YYYY-MM-DD',
        'valueAxes': [ {
          'id': 'v1',
          'axisAlpha': 0,
          'position': 'left',
          'ignoreAxisWidth': true
        } ],
        'balloon': {
          'borderThickness': 1,
          'shadowAlpha': 0
        },
        'graphs': [ {
          'id': 'g1',
          'balloon': {
            'drop': true,
            'adjustBorderColor': false,
            'color': '#ffffff',
            'type': 'smoothedLine'
          },
          'fillAlphas': 0.5,
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'bulletColor': '#FFFFFF',
          'lineColor': '#11c15b',
          'bulletSize': 5,
          'hideBulletsCount': 50,
          'lineThickness': 3,
          'title': 'red line',
          'useLineColorForBulletBorder': true,
          'valueField': 'value',
          'balloonText': '<span style="font-size:18px;">[[value]]</span>'
        } ],
        'chartCursor': {
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 0,
          'zoomable': false,
          'valueZoomable': true,
          'valueLineAlpha': 0.5
        },
        'chartScrollbar': {
          'autoGridCount': true,
          'graph': 'g1',
          'oppositeAxis': true,
          'scrollbarHeight': 90
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'dashLength': 1,
          'minorGridEnabled': true
        },
        'export': {
          'enabled': true
        },
        'dataProvider': [ {
          'date': '2019-07-27',
          'value': 13
        }, {
          'date': '2019-07-28',
          'value': 11
        }, {
          'date': '2019-07-29',
          'value': 15
        }, {
          'date': '2019-07-30',
          'value': 16
        }, {
          'date': '2019-07-31',
          'value': 18
        }, {
          'date': '2019-08-01',
          'value': 13
        }, {
          'date': '2019-08-02',
          'value': 22
        }, {
          'date': '2019-08-03',
          'value': 23
        }, {
          'date': '2019-08-04',
          'value': 20
        }, {
          'date': '2019-08-05',
          'value': 17
        }, {
          'date': '2019-08-06',
          'value': 16
        }, {
          'date': '2019-08-07',
          'value': 18
        }, {
          'date': '2019-08-08',
          'value': 21
        }, {
          'date': '2019-08-09',
          'value': 26
        }, {
          'date': '2019-08-10',
          'value': 24
        }, {
          'date': '2019-08-11',
          'value': 29
        }, {
          'date': '2019-08-12',
          'value': 32
        }, {
          'date': '2019-08-13',
          'value': 18
        }, {
          'date': '2019-08-14',
          'value': 24
        }, {
          'date': '2019-08-15',
          'value': 22
        }, {
          'date': '2019-08-16',
          'value': 18
        }, {
          'date': '2019-08-17',
          'value': 19
        }, {
          'date': '2019-08-18',
          'value': 14
        }, {
          'date': '2019-08-19',
          'value': 15
        }, {
          'date': '2019-08-20',
          'value': 12
        }, {
          'date': '2019-08-21',
          'value': 8
        }, {
          'date': '2019-08-22',
          'value': 9
        }, {
          'date': '2019-08-23',
          'value': 8
        }, {
          'date': '2019-08-24',
          'value': 7
        }, {
          'date': '2019-08-25',
          'value': 5
        }, {
          'date': '2019-08-26',
          'value': 11
        }, {
          'date': '2019-08-27',
          'value': 13
        }, {
          'date': '2019-08-28',
          'value': 18
        }, {
          'date': '2019-08-29',
          'value': 20
        }, {
          'date': '2019-08-30',
          'value': 29
        }, {
          'date': '2019-08-31',
          'value': 33
        }, {
          'date': '2019-09-01',
          'value': 42
        }, {
          'date': '2019-09-02',
          'value': 35
        }, {
          'date': '2019-09-03',
          'value': 31
        }, {
          'date': '2019-09-04',
          'value': 47
        }, {
          'date': '2019-09-05',
          'value': 52
        }, {
          'date': '2019-09-06',
          'value': 46
        }, {
          'date': '2019-09-07',
          'value': 41
        }, {
          'date': '2019-09-08',
          'value': 43
        }, {
          'date': '2019-09-09',
          'value': 40
        }, {
          'date': '2019-09-10',
          'value': 39
        }, {
          'date': '2019-09-11',
          'value': 34
        }, {
          'date': '2019-09-12',
          'value': 29
        }, {
          'date': '2019-09-13',
          'value': 34
        }, {
          'date': '2019-09-14',
          'value': 37
        }, {
          'date': '2019-09-15',
          'value': 42
        }, {
          'date': '2019-09-16',
          'value': 49
        }, {
          'date': '2019-09-17',
          'value': 46
        }, {
          'date': '2019-09-18',
          'value': 47
        }, {
          'date': '2019-09-19',
          'value': 55
        }, {
          'date': '2019-09-20',
          'value': 59
        }, {
          'date': '2019-09-21',
          'value': 58
        }, {
          'date': '2019-09-22',
          'value': 57
        }, {
          'date': '2019-09-23',
          'value': 61
        }, {
          'date': '2019-09-24',
          'value': 59
        }, {
          'date': '2019-09-25',
          'value': 67
        }, {
          'date': '2019-09-26',
          'value': 65
        }, {
          'date': '2019-09-27',
          'value': 61
        }, {
          'date': '2019-09-28',
          'value': 66
        }, {
          'date': '2019-09-29',
          'value': 69
        }, {
          'date': '2019-09-30',
          'value': 71
        }, {
          'date': '2019-10-01',
          'value': 67
        }, {
          'date': '2019-10-02',
          'value': 63
        }, {
          'date': '2019-10-03',
          'value': 46
        }, {
          'date': '2019-10-04',
          'value': 32
        }, {
          'date': '2019-10-05',
          'value': 21
        }, {
          'date': '2019-10-06',
          'value': 18
        }, {
          'date': '2019-10-07',
          'value': 21
        }, {
          'date': '2019-10-08',
          'value': 28
        }, {
          'date': '2019-10-09',
          'value': 27
        }, {
          'date': '2019-10-10',
          'value': 36
        }, {
          'date': '2019-10-11',
          'value': 33
        }, {
          'date': '2019-10-12',
          'value': 31
        }, {
          'date': '2019-10-13',
          'value': 30
        }, {
          'date': '2019-10-14',
          'value': 34
        }, {
          'date': '2019-10-15',
          'value': 38
        }, {
          'date': '2019-10-16',
          'value': 37
        }, {
          'date': '2019-10-17',
          'value': 44
        }, {
          'date': '2019-10-18',
          'value': 49
        }, {
          'date': '2019-10-19',
          'value': 53
        }, {
          'date': '2019-10-20',
          'value': 57
        }, {
          'date': '2019-10-21',
          'value': 60
        }, {
          'date': '2019-10-22',
          'value': 61
        }, {
          'date': '2019-10-23',
          'value': 69
        }, {
          'date': '2019-10-24',
          'value': 67
        }, {
          'date': '2019-10-25',
          'value': 72
        }, {
          'date': '2019-10-26',
          'value': 77
        }, {
          'date': '2019-10-27',
          'value': 75
        }, {
          'date': '2019-10-28',
          'value': 70
        }, {
          'date': '2019-10-29',
          'value': 72
        }, {
          'date': '2019-10-30',
          'value': 70
        }, {
          'date': '2019-10-31',
          'value': 72
        }, {
          'date': '2019-11-01',
          'value': 73
        }, {
          'date': '2019-11-02',
          'value': 67
        }, {
          'date': '2019-11-03',
          'value': 68
        }, {
          'date': '2019-11-04',
          'value': 65
        }, {
          'date': '2019-11-05',
          'value': 71
        }, {
          'date': '2019-11-06',
          'value': 75
        }, {
          'date': '2019-11-07',
          'value': 74
        }, {
          'date': '2019-11-08',
          'value': 71
        }, {
          'date': '2019-11-09',
          'value': 76
        }, {
          'date': '2019-11-10',
          'value': 77
        }, {
          'date': '2019-11-11',
          'value': 81
        }, {
          'date': '2019-11-12',
          'value': 83
        }, {
          'date': '2019-11-13',
          'value': 80
        }, {
          'date': '2019-11-14',
          'value': 81
        }, {
          'date': '2019-11-15',
          'value': 87
        }, {
          'date': '2019-11-16',
          'value': 82
        }, {
          'date': '2019-11-17',
          'value': 86
        }, {
          'date': '2019-11-18',
          'value': 80
        }, {
          'date': '2019-11-19',
          'value': 87
        }, {
          'date': '2019-11-20',
          'value': 83
        }, {
          'date': '2019-11-21',
          'value': 85
        }, {
          'date': '2019-11-22',
          'value': 84
        }, {
          'date': '2019-11-23',
          'value': 82
        }, {
          'date': '2019-11-24',
          'value': 73
        }, {
          'date': '2019-11-25',
          'value': 71
        }, {
          'date': '2019-11-26',
          'value': 75
        }, {
          'date': '2019-11-27',
          'value': 79
        }, {
          'date': '2019-11-28',
          'value': 70
        }, {
          'date': '2019-11-29',
          'value': 73
        }, {
          'date': '2019-11-30',
          'value': 61
        }, {
          'date': '2019-12-01',
          'value': 62
        }, {
          'date': '2019-12-02',
          'value': 66
        }, {
          'date': '2019-12-03',
          'value': 65
        }, {
          'date': '2019-12-04',
          'value': 73
        }, {
          'date': '2019-12-05',
          'value': 79
        }, {
          'date': '2019-12-06',
          'value': 78
        }, {
          'date': '2019-12-07',
          'value': 78
        }, {
          'date': '2019-12-08',
          'value': 78
        }, {
          'date': '2019-12-09',
          'value': 74
        }, {
          'date': '2019-12-10',
          'value': 73
        }, {
          'date': '2019-12-11',
          'value': 75
        }, {
          'date': '2019-12-12',
          'value': 70
        }, {
          'date': '2019-12-13',
          'value': 77
        }, {
          'date': '2019-12-14',
          'value': 67
        }, {
          'date': '2019-12-15',
          'value': 62
        }, {
          'date': '2019-12-16',
          'value': 64
        }, {
          'date': '2019-12-17',
          'value': 61
        }, {
          'date': '2019-12-18',
          'value': 59
        }, {
          'date': '2019-12-19',
          'value': 53
        }, {
          'date': '2019-12-20',
          'value': 54
        }, {
          'date': '2019-12-21',
          'value': 56
        }, {
          'date': '2019-12-22',
          'value': 59
        }, {
          'date': '2019-12-23',
          'value': 58
        }, {
          'date': '2019-12-24',
          'value': 55
        }, {
          'date': '2019-12-25',
          'value': 52
        }, {
          'date': '2019-12-26',
          'value': 54
        }, {
          'date': '2019-12-27',
          'value': 50
        }, {
          'date': '2019-12-28',
          'value': 50
        }, {
          'date': '2019-12-29',
          'value': 51
        }, {
          'date': '2019-12-30',
          'value': 52
        }, {
          'date': '2019-12-31',
          'value': 58
        }, {
          'date': '2020-01-01',
          'value': 60
        }, {
          'date': '2020-01-02',
          'value': 67
        }, {
          'date': '2013-01-03',
          'value': 64
        }, {
          'date': '2020-01-04',
          'value': 66
        }, {
          'date': '2020-01-05',
          'value': 60
        }, {
          'date': '2020-01-06',
          'value': 63
        }, {
          'date': '2020-01-07',
          'value': 61
        }, {
          'date': '2020-01-08',
          'value': 60
        }, {
          'date': '2020-01-09',
          'value': 65
        }, {
          'date': '2020-01-10',
          'value': 75
        }, {
          'date': '2020-01-11',
          'value': 77
        }, {
          'date': '2020-01-12',
          'value': 78
        }, {
          'date': '2020-01-13',
          'value': 70
        }, {
          'date': '2020-01-14',
          'value': 70
        }, {
          'date': '2020-01-15',
          'value': 73
        }, {
          'date': '2020-01-16',
          'value': 71
        }, {
          'date': '2020-01-17',
          'value': 74
        }, {
          'date': '2020-01-18',
          'value': 78
        }, {
          'date': '2020-01-19',
          'value': 85
        }, {
          'date': '2020-01-20',
          'value': 82
        }, {
          'date': '2020-01-21',
          'value': 83
        }, {
          'date': '2020-01-22',
          'value': 88
        }, {
          'date': '2020-01-23',
          'value': 85
        }, {
          'date': '2020-01-24',
          'value': 85
        }, {
          'date': '2020-01-25',
          'value': 80
        }, {
          'date': '2020-01-26',
          'value': 87
        }, {
          'date': '2020-01-27',
          'value': 84
        }, {
          'date': '2020-01-28',
          'value': 83
        }, {
          'date': '2020-01-29',
          'value': 84
        }, {
          'date': '2020-01-30',
          'value': 81
        } ]
      });

      this.thisMonthData = avgValChart('#11c15b', [30, 15, 25, 35, 30, 20, 25, 30, 15, 1], '#11c15b');
      this.thisMonthOption = buildChartOption();

    }, 75);
  }

  ngAfterViewInit() {
    /* setTimeout(() => {
      this.options  = {
        position : ['bottom', 'right'],
        maxStack: 8,
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        lastOnBottom: true,
        clickToClose: true,
        preventDuplicates: false,
        preventLastDuplicates: false,
        theClass: 'bg-c-red no-icon',
        rtl: false,
        animate: 'rotate'
      };
      this.servicePNotify.html(
        '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="icon-settings"></i> for apply live styles very first time in Angular 5.</p>',
        'success'
      );
    }, 75); */
  }

}

function avgValChart(a, b, f) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#000',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: '#fff',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}
function buildChartOption() {
  return {
    title: {
      display: !1
    },
    tooltips: {
      position: 'nearest',
      mode: 'index',
      intersect: false,
      yPadding: 10,
      xPadding: 10,
    },
    legend: {
      display: !1,
      labels: {
        usePointStyle: !1
      }
    },
    responsive: !0,
    maintainAspectRatio: !0,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: !0
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };
}

import {Directive} from '@angular/core';

@Directive({
  selector: '[appToDoListRead]',
})
export class AppToDoListReadDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement).classList.toggle('done-task');
  }
}

@Directive({
  selector: '[appToDoListRemove]',
})
export class AppToDoListRemoveDirective {
  constructor(public el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event) {
    (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
  }
}