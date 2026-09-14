import { useState } from "react";

function LoginForm ({onLogin}) {
    const [ formData, setFormData] = useState({ email: "", password: "" });
    const [ errors, setErrors ] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.email) {
            tempErrors.email = "Email is required.";
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = "Password is required.";
            isValid = false;
        }

        if (formData && formData.email) {
            if (formData.email !== "admin@admin.com") {
                tempErrors.email = "Incorrect credentials.";
                isValid = false;
            }
        }

         if (formData && formData.password) {
            if (formData.password !== "1234") {
                tempErrors.password = "Incorrect credentials.";
                isValid = false;
            }
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onLogin(formData);

        }
    };

return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email (admin@admin.com):</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div style={{ marginTop: '15px' }}>
          <label>Password (1234):</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: '20px' }}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;