import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        icon: 'success',
        title: 'Account created!',
        text: 'Welcome to BloodConnect.',
        timer: 1500,
        showConfirmButton: false,
      });

      form.reset();
      navigate(location.state || "/");
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        setError("An account with this email already exists.");
      } else if (error.code === 'auth/weak-password') {
        setError("Password is too weak.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="py-12 flex items-center justify-center bg-gray-100 px-4 mt-6">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-primary">Register</h2>

        <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
        <input type="url" name="photoURL" placeholder="Profile Photo URL" className="input input-bordered w-full" required />
        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />

        <select name="bloodGroup" className="input input-bordered w-full" required>
          <option value="">Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>

        <select name="district" className="input input-bordered w-full" required>
          <option value="">Select District</option>
          <option>Dhaka</option>
          <option>Chattogram</option>
          <option>Khulna</option>
        </select>

        <select name="upazila" className="input input-bordered w-full" required>
          <option value="">Select Upazila</option>
          <option>Savar</option>
          <option>Dhanmondi</option>
          <option>Kotwali</option>
        </select>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            placeholder="Password"
            className="input input-bordered w-full pr-10"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="At least 6 characters, including a number, lowercase and uppercase letter"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>

        <div className="text-center">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>

        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
