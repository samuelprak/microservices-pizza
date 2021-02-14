import {Injectable} from '@angular/core';
declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    public alerts = [];

    constructor() { }

    showNotification(from, align, type, text) {
        const iconsList = {'danger': 'close', 'warning': 'warning', 'success' : 'check', 'info': 'info', 'primary' : 'notifications'};

        $.notify({
            icon: 'notifications',
            message: text

        }, {
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            icons: iconsList[type],
            template:
        '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">' +
        '<i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">' + iconsList[type] + '</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ' +
        'style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
        });
    }
}
