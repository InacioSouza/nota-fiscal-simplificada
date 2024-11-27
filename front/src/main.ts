import themes from 'devextreme/ui/themes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { locale, loadMessages } from 'devextreme/localization';
import * as ptMessages from 'devextreme/localization/messages/pt.json';

loadMessages(ptMessages);

locale('pt-BR');


themes.initialized(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
