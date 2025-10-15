import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, CircularProgress, IconButton } from '@mui/material';
import { Lock, MailOutline, Visibility, VisibilityOff } from '@mui/icons-material';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For show/hide password

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password123') {
        setLoading(false);
        setError('');
        alert('Login successful!');
      } else {
        setLoading(false);
        setError('Invalid credentials. Please try again.');
      }
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      {/* Left Side - Animated Background */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="absolute top-10 left-0 animate-pulse opacity-20">
          <div className="h-32 w-32 bg-blue-300 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse opacity-15">
          <div className="h-24 w-24 bg-yellow-200 rounded-full"></div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <Paper className="w-full max-w-md p-10 rounded-lg shadow-2xl bg-white">
          <Typography
            variant="h5"
            className="text-center font-bold text-gray-800 mb-6"
            sx={{
              fontSize: '2rem', // Larger heading
              color: '#4A4A4A', // Darker color for better visibility
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for text depth
            }}
          >
            Admin Portal Login
          </Typography>

          {error && (
            <div className="mb-4 text-red-500 text-center text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <MailOutline sx={{ color: 'gray', marginLeft: 1 }} />
                ),
              }}
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'gray',
                  fontWeight: 600,
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '&:hover fieldset': {
                    borderColor: '#6366f1', // Blue border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6366f1', // Focused border color
                  },
                },
                '& .MuiInputBase-input': {
                  paddingLeft: '40px', // Adds space for the icon
                },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ color: 'gray', marginLeft: 1 }} />
                ),
                endAdornment: (
                  <IconButton
                    position="end"
                    onClick={togglePasswordVisibility}
                    edge="end"
                    sx={{ color: 'gray' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'gray',
                  fontWeight: 600,
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '&:hover fieldset': {
                    borderColor: '#6366f1', // Blue border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#6366f1', // Focused border color
                  },
                },
                '& .MuiInputBase-input': {
                  paddingLeft: '40px', // Adds space for the icon
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-6 py-3 text-lg font-semibold transition-all bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default AdminLogin;
