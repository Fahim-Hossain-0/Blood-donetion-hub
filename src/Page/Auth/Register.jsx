import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

// import { auth } from '../../firebase/auth.config';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
    const { creatUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    



    const handleRegister = (e) => {
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
        console.log("Password:", password);

        creatUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Account created!',
                            text: 'Welcome to the app.',
                            timer: 1500,
                            showConfirmButton: false,
                        });

                        navigate(`${location.state ? location.state : "/"}`);
                    })
                    .catch((error) => {
                        setError("Profile update failed");
                    });

                form.reset();
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setError("An account with this email already exists.");
                } else if (error.code === 'auth/weak-password') {
                    setError("Password is too weak.");
                } else {
                    setError(error.message);
                }
            });
    };

    return (
        <div className="py-22 flex items-center justify-center bg-gray-100 px-4 mt-6">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center">Register</h2>

                <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full" required />
                <input type="url" name="photoURL" placeholder="Profile Photo URL" className="input input-bordered w-full" required />
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />

                <select name="bloodGroup" className="input input-bordered w-full" required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>

                <select name="district" className="input input-bordered w-full" required>
                    <option value="">Select District</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Khulna">Khulna</option>
                    {/* Add all districts */}
                </select>

                <select name="upazila" className="input input-bordered w-full" required>
                    <option value="">Select Upazila</option>
                    <option value="Savar">Savar</option>
                    <option value="Dhanmondi">Dhanmondi</option>
                    <option value="Kotwali">Kotwali</option>
                    {/* Add all upazilas as per selected district later */}
                </select>

                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        required
                        placeholder="Password"
                        className="input input-bordered w-full pr-10"
                        minLength="6"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be at least 6 characters, including a number, a lowercase and an uppercase letter"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                    >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>

                <button type="submit" className="btn btn-primary w-full">Register</button>

                <div className="text-center">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link>
                </div>

                {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
            </form>
        </div>
    );
};

export default Register;
