import React, { useState } from "react";
import Router from "next/router";

export default function NewWorkspace() {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const body = form;
      await fetch("/api/workspace/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setForm({
        name: "",
        description: "",
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>New Workspace</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          value={form.name}
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          id="description"
          name="description"
          value={form.description}
        ></input>
        <button type="submit">Create Workspace</button>
      </form>
    </div>
  );
}
