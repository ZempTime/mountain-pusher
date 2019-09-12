import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { MountainPusher } from '../src/MountainPusher.js';
import '../mountain-pusher.js';

storiesOf('mountain-pusher', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(MountainPusher))
  .add(
    'Alternative Title',
    () => html`
      <mountain-pusher .title=${'Something else'}></mountain-pusher>
    `,
  );
