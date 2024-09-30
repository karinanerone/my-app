import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: email,
        name: name,
        surname: surname,
        birthDate: birthDate
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/login");

    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Registrar</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Registrar;
