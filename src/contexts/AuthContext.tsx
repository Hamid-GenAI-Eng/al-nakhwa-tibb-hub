import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface PendingUser {
  email: string;
  password: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  pendingUser: PendingUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  resendOTP: () => void;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [pendingUser, setPendingUser] = useState<PendingUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('al_nakhwa_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('al_nakhwa_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      
      setUser(mockUser);
      localStorage.setItem('al_nakhwa_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call for sending OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store pending user data for OTP verification
      setPendingUser({ email, password, name });
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async (otp: string) => {
    if (!pendingUser) {
      throw new Error('No pending verification');
    }

    setIsLoading(true);
    try {
      // Simulate OTP verification - accept "123456" as valid OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (otp !== '123456') {
        throw new Error('Invalid OTP');
      }

      // Create user after successful OTP verification
      const mockUser = {
        id: '1',
        email: pendingUser.email,
        name: pendingUser.name
      };
      
      setUser(mockUser);
      setPendingUser(null);
      localStorage.setItem('al_nakhwa_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Invalid OTP code');
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = () => {
    // Simulate resending OTP - in real app, this would call the backend
    console.log('OTP resent to:', pendingUser?.email);
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: '1',
        email: 'user@gmail.com',
        name: 'Google User'
      };
      
      setUser(mockUser);
      localStorage.setItem('al_nakhwa_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Google login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('al_nakhwa_user');
  };

  const value = {
    user,
    isLoading,
    pendingUser,
    login,
    signup,
    verifyOTP,
    resendOTP,
    loginWithGoogle,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};