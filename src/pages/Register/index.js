import React, { useState } from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();
  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const respose = await api.post("/ongs", data);
      history.push("/");
      alert(`Seu ID de acesso ${respose.data.id}`);
    } catch (error) {
      alert(`Erro no cadastro, tente novamente`);
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casas da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Whatsap"
            onChange={(event) => setWhatsapp(event.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              onChange={(event) => setCity(event.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              onChange={(event) => setUf(event.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
