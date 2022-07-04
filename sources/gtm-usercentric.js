import { DomUtils } from './DomUtils.js';
class GTMUsercentric {
    constructor() {
        function hookUpUI() {
            let acceptYoutube = document.getElementById('acceptYoutube');
            acceptYoutube === null || acceptYoutube === void 0 ? void 0 : acceptYoutube.addEventListener('click', onAcceptYoutube);
            let openConsentWall = document.getElementById('openConsentWall');
            openConsentWall === null || openConsentWall === void 0 ? void 0 : openConsentWall.addEventListener('click', onOpenConsentWall);
        }
        function onAcceptYoutube() {
            //call this use user clicked load ALL youtube vids.
            UC_UI.acceptService("BJz7qNsdj-7").then(() => console.log('do Youtube loading magic now, alos like and subscribe!'));
        }
        function onOpenConsentWall() {
            UC_UI.showSecondLayer();
        }
        function exec() {
            console.info('gmt-usercentric is up and running');
            console.dir(dataLayer);
            window.UC_UI && console.dir(UC_UI);
            hookUpUI();
        }
        DomUtils.docReady(exec);
    }
}
new GTMUsercentric();
//# sourceMappingURL=gtm-usercentric.js.map