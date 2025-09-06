import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Shield, RefreshCw } from 'lucide-react';

interface OTPVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => Promise<void>;
  email: string;
  onResendOTP: () => void;
  isLoading: boolean;
}

export const OTPVerificationModal = ({ 
  isOpen, 
  onClose, 
  onVerify, 
  email, 
  onResendOTP,
  isLoading 
}: OTPVerificationModalProps) => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isOpen, timeLeft]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP code.",
      });
      return;
    }

    try {
      await onVerify(otp);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Verification Failed",
        description: "Invalid OTP code. Please try again.",
      });
    }
  };

  const handleResend = () => {
    onResendOTP();
    setTimeLeft(60);
    setCanResend(false);
    setOtp('');
    toast({
      title: "OTP Resent",
      description: "A new verification code has been sent to your email.",
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-large">
        <DialogHeader className="text-center pb-6">
          <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gradient-primary">
            Verify Your Email
          </DialogTitle>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to
          </p>
          <p className="text-sm font-medium text-foreground">
            {email}
          </p>
        </DialogHeader>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-center">
              <InputOTP 
                maxLength={6} 
                value={otp} 
                onChange={setOtp}
                disabled={isLoading}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="text-center space-y-2">
              {!canResend ? (
                <p className="text-sm text-muted-foreground">
                  Resend code in {formatTime(timeLeft)}
                </p>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleResend}
                  className="text-sm text-primary hover:text-primary/80"
                  disabled={isLoading}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Resend verification code
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full"
              variant="hero"
              disabled={otp.length !== 6 || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            For demo purposes, use OTP: <span className="font-mono font-bold text-primary">123456</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};