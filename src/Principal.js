import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const Principal = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("Nenhum dado encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      } else {
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="main-container">
      <h2>Página Principal</h2>
      {userData ? (
        <div className="user-card">
          <p><strong>Nome:</strong> {userData.name}</p>
          <p><strong>Sobrenome:</strong> {userData.surname}</p>
          <p>
            <strong>Data de Nascimento:</strong>
            {new Date(userData.birthDate).toLocaleDateString('pt-BR')}
          </p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>

  );
};

export default Principal;
