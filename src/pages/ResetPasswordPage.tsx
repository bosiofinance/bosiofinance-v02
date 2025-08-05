import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { usePreferences } from '@/contexts/PreferencesContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Key, EyeOff, Eye, Loader2 } from 'lucide-react';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const { t } = usePreferences();
  const { logoUrl, logoAltText } = useBrandingConfig();
  const navigate = useNavigate();

  // Verificar se o usuário tem um token válido de redefinição de senha
  useEffect(() => {
    const validateResetToken = async () => {
      console.log('Validating reset token...');
      console.log('Current URL:', window.location.href);
      console.log('Hash:', window.location.hash);
      
      // Verificar se há indicadores de token de recuperação na URL
      const hasRecoveryToken = window.location.hash.includes('type=recovery') || 
                               window.location.hash.includes('access_token=') ||
                               window.location.search.includes('type=recovery');
      
      if (!hasRecoveryToken) {
        console.log('No recovery token found in URL');
        toast({
          title: 'Link inválido',
          description: 'O link de redefinição de senha é inválido ou expirou.',
          variant: 'destructive',
        });
        navigate('/forgot-password');
        return;
      }

      // Dar tempo para o Supabase processar o token
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        const { data } = await supabase.auth.getSession();
        console.log('Session data:', data);
        
        if (!data.session) {
          console.log('No session found after processing token');
          toast({
            title: 'Sessão expirada',
            description: 'Por favor, solicite um novo link de redefinição de senha.',
            variant: 'destructive',
          });
          navigate('/forgot-password');
          return;
        }
        
        console.log('Valid session found, user can reset password');
        setIsValidating(false);
      } catch (error) {
        console.error('Error validating session:', error);
        toast({
          title: 'Erro de validação',
          description: 'Erro ao validar o link. Tente novamente.',
          variant: 'destructive',
        });
        navigate('/forgot-password');
      }
    };

    // Configurar listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session);
      if (event === 'SIGNED_IN' && session) {
        setIsValidating(false);
      }
    });

    validateResetToken();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: t('common.error'),
        description: 'As senhas não coincidem',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: t('common.error'),
        description: 'A senha deve ter pelo menos 6 caracteres',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) throw error;
      
      toast({
        title: t('common.success'),
        description: 'Senha atualizada com sucesso!',
      });
      
      // Redirecionar para o login após alguns segundos
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      console.error('Error updating password:', error);
      toast({
        title: t('common.error'),
        description: 'Erro ao atualizar senha. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side with image/branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <img 
            src={logoUrl} 
            alt={logoAltText} 
            className="mx-auto mb-8 h-16"
          />
          <h1 className="text-4xl font-bold text-white mb-4">{t('auth.welcomeBack')}</h1>
          <p className="text-white/80">
            {t('auth.journeyDescription')}
          </p>
        </div>
      </div>
      
      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-card">
        <div className="w-full max-w-md">
          {/* Logo for mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <img 
              src={logoUrl} 
              alt={logoAltText} 
              className="h-12"
            />
          </div>
          
          {isValidating ? (
            <div className="text-center py-12">
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Validando Link</h2>
              <p className="text-muted-foreground">
                Verificando o link de redefinição de senha...
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Redefinir Senha</h2>
                <p className="text-muted-foreground mt-2">
                  Digite sua nova senha abaixo
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Nova Senha
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword} 
                      onChange={e => setNewPassword(e.target.value)} 
                      placeholder="••••••••" 
                      required 
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword} 
                      onChange={e => setConfirmPassword(e.target.value)} 
                      placeholder="••••••••" 
                      required 
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-5 bg-primary text-white" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Atualizando...' : 'Atualizar Senha'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
