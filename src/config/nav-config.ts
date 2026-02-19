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
    title: 'Screenshots',
    url: '/dashboard/screenshots',
    icon: 'media',
    shortcut: ['s', 's'],
    isActive: false,
    items: []
  }
];
