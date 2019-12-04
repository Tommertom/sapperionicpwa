export const stuff = "sdas";



export const presentIonicActionSheet =
    (options) => {
        const { header, buttons } = options;
        const actionSheet = document.createElement('ion-action-sheet');
        actionSheet.header = header;
        actionSheet.buttons = buttons;
        document.body.appendChild(actionSheet);
        return actionSheet.present();
    }

export const IonicMenuController =
    () => {
        return document.querySelector('ion-menu-controller');
    }

export const presentToast =
    (options) => {

        console.log('gett toast')

        const { header, message, position, buttons } = options;
        const toast = document.createElement('ion-toast');
        toast.header = header;
        toast.message = message;
        toast.position = position;
        toast.buttons = buttons;

        /*
        [
            {
                side: 'start',
                icon: 'star',
                text: 'Favorite',
                handler: () => {
                    console.log('Favorite clicked');
                }
            }, {
                text: 'Done',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }
        ];
        */
        document.body.appendChild(toast);
        return toast.present();
    }

export const presentPopover =
    (options) => {
        const { event, component } = { options };
        const popover = Object.assign(document.createElement('ion-popover'), {
            component: component,
            event: event,
            translucent: true
        });
        document.body.appendChild(popover);
        return popover.present();
    }

export const presentAlert =
    (options) => {
        const { header, subHeader, message, buttons } = options;
        const alert = document.createElement('ion-alert');
        alert.header = header;
        alert.subHeader = subHeader;
        alert.message = message;
        alert.buttons = buttons;

        document.body.appendChild(alert);
        return alert.present();
    }

export const presentModal =
    (options) => {

        const { component } = options;

        // create the modal with the `modal-page` component
        const modalElement = document.createElement('ion-modal');
        modalElement.component = component;

        // present the modal
        document.body.appendChild(modalElement);
        return modalElement.present();
    }
