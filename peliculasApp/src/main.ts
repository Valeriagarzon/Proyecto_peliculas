import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importo el swiper
import 'swiper/element/bundle';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
