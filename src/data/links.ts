import type { IconName } from '../models/icon-name';
import type { LinkKey } from '../models/link-key';

interface Link {
  key?: LinkKey;
  href: string;
  name: string;
  iconName: IconName;
}

export const links: Link[] = [
  {
    key: 'website',
    href: 'https://nharox.com/',
    name: 'Website',
    iconName: 'code',
  },
  {
    key: 'games',
    href: 'https://nharox.games/',
    name: 'Game Shelf',
    iconName: 'joystick',
  },
  {
    key: 'photos',
    href: 'https://nharox.photos/',
    name: 'Photos',
    iconName: 'photo',
  },
  {
    key: 'music',
    href: 'https://music.nharox.com/',
    name: 'Favourite Music',
    iconName: 'music',
  },
  {
    href: 'https://bsky.app/profile/nharox.com',
    name: 'Bluesky',
    iconName: 'bluesky',
  },
  {
    href: 'https://mastodon.social/@nharox',
    name: 'Mastodon',
    iconName: 'mastodon',
  },
];
