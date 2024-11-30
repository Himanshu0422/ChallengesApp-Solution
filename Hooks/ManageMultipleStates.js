import React, { useState } from "react";

const MultiStateForm = () => {
    const [form, setForm] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
            />
            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
        </div>
    );
};

export default MultiStateForm;
