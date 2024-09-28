// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Funcție de validare a formularului
  const validateForm = () => {
    if (!email) {
      setErrorMessage('Email-ul este obligatoriu.');
      return false;
    }
    // Regex simplu pentru validarea email-ului
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Te rugăm să introduci o adresă de email validă.');
      return false;
    }
    if (!password) {
      setErrorMessage('Parola este obligatorie.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Parola trebuie să aibă cel puțin 6 caractere.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Funcție de gestionare a trimiterii formularului
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, {
        email,
        password,
      }, {
        // Opțional: setează antetele aici
        // headers: { 'Content-Type': 'application/json' }
      });

      // Presupunând că răspunsul conține un token
      const { token } = response.data;
      // Stochează token-ul în siguranță
      // De exemplu, folosind localStorage (asigură-te de măsurile de securitate)
      localStorage.setItem('authToken', token);

      // Redirecționează către dashboard
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        // Serverul a răspuns cu un status diferit de 2xx
        setErrorMessage(error.response.data.message || 'Autentificarea a eșuat');
      } else if (error.request) {
        // Cererea a fost făcută dar nu s-a primit răspuns
        setErrorMessage('Nu am primit un răspuns de la server. Te rugăm să încerci mai târziu.');
      } else {
        // Altceva a mers prost
        setErrorMessage('A apărut o eroare neașteptată.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src="/logo.svg"
            alt="Skin First Logo"
            className="h-16 w-16"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Skin First</h2>
        <p className="text-gray-600 mb-6 text-center">
          Centrul de Dermatologie
        </p>
        <form onSubmit={handleSubmit} noValidate>
          {errorMessage && (
            <div className="text-red-500 mb-4" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorMessage && !email ? 'border-red-500' : ''
              }`}
              required
              aria-required="true"
              aria-invalid={errorMessage && !email}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Parolă
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorMessage && !password ? 'border-red-500' : ''
              }`}
              required
              aria-required="true"
              aria-invalid={errorMessage && !password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <ClipLoader size={20} color="#ffffff" />
                  <span className="ml-2">Autentificare...</span>
                </>
              ) : (
                'Autentifică-te'
              )}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-blue-500 hover:text-blue-700">
            Înregistrează-te
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
