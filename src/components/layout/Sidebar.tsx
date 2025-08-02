import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/contexts/AppContext';
import { usePreferences } from '@/contexts/PreferencesContext';
import { useUserRole } from '@/hooks/useUserRole';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import {
  LayoutDashboard, Receipt, BarChart3, Target,
  User, Settings, FolderOpen, Calendar, Crown, LogOut, Shield
} from 'lucide-react';

interface SidebarProps {
  onProfileClick?: () => void;
  onConfigClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onProfileClick, onConfigClick }) => {
  const { user, logout } = useAppContext();
  const { t } = usePreferences();
  const { isAdmin } = useUserRole();
  const navigate = useNavigate();
  const location = useLocation();
  const companyName = 'Minha Cifra';

  const isAdminPage = location.pathname === '/admin';

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleProfileClick = () => {
    if (isAdmin && isAdminPage && onProfileClick) {
      onProfileClick();
    } else {
      navigate('/profile');
    }
  };

  if (isAdmin && isAdminPage) {
    const adminMenuItems = [
      {
        icon: Settings,
        label: 'Configurações',
        action: () => {
          if (onConfigClick) onConfigClick();
        }
      }
    ];

    return (
      <div className="hidden md:flex h-screen w-64 lg:w-64 xl:w-72 flex-col bg-background border-r">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {adminMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-3 px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={item.action}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={handleProfileClick}
          >
            <User className="h-5 w-5" />
            Perfil
          </Button>
        </nav>
        <div className="p-4 border-t space-y-2">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-muted-foreground">Tema</span>
            <ThemeToggle variant="ghost" size="sm" />
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Sair
          </Button>
        </div>
      </div>
    );
  }

  const defaultMenuItems = [
    { icon: LayoutDashboard, label: t('nav.dashboard'), href: '/dashboard' },
    { icon: Receipt, label: t('nav.transactions'), href: '/transactions' },
    { icon: FolderOpen, label: t('nav.categories'), href: '/categories' },
    { icon: Target, label: t('nav.goals'), href: '/goals' },
    { icon: Calendar, label: t('schedule.title'), href: '/schedule' },
    { icon: BarChart3, label: t('nav.reports'), href: '/reports' },
    { icon: Crown, label: t('nav.plans'), href: '/plans' }
  ];

  if (isAdmin && !isAdminPage) {
    defaultMenuItems.push({ icon: Shield, label: 'Admin', href: '/admin' });
  }

  const bottomMenuItems = [
    { icon: User, label: t('nav.profile'), href: '/profile' },
    { icon: Settings, label: t('nav.settings'), href: '/settings' },
  ];

  if (!user) return null;

  return (
    <div className="hidden md:flex h-screen w-64 lg:w-64 xl:w-72 flex-col bg-background border-r overflow-hidden">
      <div className="p-6 border-b flex-shrink-0">
        <div className="flex items-center justify-center">
          <img
            src="/logo-clara.png"
            alt="Logo clara"
            className="block dark:hidden h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] object-contain"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = 'none';
              const fallback = img.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <img
            src="/logo-escura.png"
            alt="Logo escura"
            className="hidden dark:block h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] object-contain"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = 'none';
              const fallback = img.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            className="hidden h-10 w-10 bg-primary rounded-lg items-center justify-center"
          >
            <span className="text-primary-foreground font-bold text-sm">
              {companyName.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {defaultMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t space-y-2 flex-shrink-0 bg-background">
          {bottomMenuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-muted-foreground">Tema</span>
            <ThemeToggle variant="ghost" size="sm" />
          </div>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {t('settings.logout')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
