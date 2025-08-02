import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { usePreferences } from '@/contexts/PreferencesContext';
import { loginUser } from '@/services/authService';
import { useAppContext } from '@/contexts/AppContext';
import { supabase } from '@/integrations/supabase/client';

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = usePreferences();
  const { user, isLoading: authLoading } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!authLoading && user) checkUserRoleAndRedirect(user.id);
  }, [user, authLoading, navigate]);

  const checkUserRoleAndRedirect = async (userId: string) => {
    try {
      const { data: response, error } = await supabase.functions.invoke('verify-admin-access');
      if (error) {
        console.error('Error checking user role:', error);
        navigate('/dashboard', { replace: true });
        return;
      }
      if (response?.success && response?.isAdmin) {
        navigate('/admin', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      console.error('Error checking user role:', error);
      navigate('/dashboard', { replace: true });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: t('common.error'),
        description: t('errors.fillAllFields'),
        variant: 'destructive'
      });
      return;
    }

    try {
      setIsLoading(true);
      const authData = await loginUser(email, password);
      if (authData?.user && authData?.session) {
        toast({
          title: t('auth.loginSuccess') || 'Login realizado com sucesso',
          description: t('auth.redirecting') || 'Redirecionando...',
        });
        await checkUserRoleAndRedirect(authData.user.id);
      } else {
        throw new Error('Login successful but no session established');
      }
    } catch (error: any) {
      setIsLoading(false);
      let errorMessage = error.message || t('auth.loginError');
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = t('errors.emailIncorrect');
      } else if (error.message?.includes('Email not confirmed')) {
        errorMessage = t('errors.confirmEmail');
      }
      toast({
        title: t('common.error'),
        description: errorMessage,
        variant: 'destructive'
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side with illustration and text */}
      <div className="hidden lg:flex flex-col w-1/2 bg-background p-10 justify-center">
        <div className="max-w-md mx-auto">
          <div className="mb-16">
            <img
              src="/logo-clara.png"
              alt="Logo clara"
              className="block dark:hidden h-24 w-auto max-w-[320px]"
            />
            <img
              src="/logo-escura.png"
              alt="Logo escura"
              className="hidden dark:block h-24 w-auto max-w-[320px]"
            />
          </div>
          <div className="flex gap-8 items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                {t('auth.timeToTransform')}
              </h1>
              <p className="text-muted-foreground">
                {t('auth.journeyDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-card">
        <div className="w-full max-w-md">
          {/* Logo para mobile */}
          <div className="lg:hidden flex justify-center mt-0 pt-0 mb-8">
            <img
              src="/logo-clara.png"
              alt="Logo clara"
              className="block dark:hidden h-28 w-auto max-w-[300px]"
            />
            <img
              src="/logo-escura.png"
              alt="Logo escura"
              className="hidden dark:block h-28 w-auto max-w-[300px]"
            />
          </div>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    {t('auth.email')}
                  </label>
                  <Input
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium leading-none">
                      {t('auth.password')}
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      {t('auth.forgotPassword')}
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('auth.passwordPlaceholder')}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      className="pr-10"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={togglePasswordVisibility}
                      tabIndex={-1}
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full py-5 bg-primary text-white" disabled={isLoading}>
                  {isLoading ? 'Carregando...' : t('auth.login')}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  {t('auth.termsAgreement')}{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    {t('auth.termsOfUse')}
                  </Link>{' '}
                  {t('auth.andThe')}{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    {t('auth.privacyPolicy')}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
