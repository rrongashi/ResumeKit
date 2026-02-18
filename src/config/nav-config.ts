import { NavItem } from '@/types';

/**
 * Navigation configuration
 * Used by sidebar and Cmd+K bar.
 */
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: []
  },
  {
    title: 'Html',
    url: '/dashboard/html',
    icon: 'post',
    shortcut: ['t', 't'],
    isActive: false,
    items: []
  },
  {
    title: 'Screenshots',
    url: '/dashboard/screenshots',
    icon: 'media',
    shortcut: ['s', 's'],
    isActive: false,
    items: []
  }
];
