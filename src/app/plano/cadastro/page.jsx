'use client'

import React from 'react';

const ServicosOferecidos = () => {
  return (
    <div className="container">
      <h1>Serviços Oferecidos</h1>
      <p>Nossa academia oferece uma variedade de serviços para ajudá-lo a alcançar seus objetivos de fitness:</p>
      <ul>
        <li>Personal Training</li>
        <li>Aulas em Grupo (Yoga, Pilates, Zumba, etc.)</li>
        <li>Área de Cardio</li>
        <li>Musculação</li>
        <li>Aulas de Dança</li>
        <li>E mais!</li>
      </ul>

      <h2>Preços</h2>
      <div className="pricing-table">
        <div className="plan">
          <h3>Plano Mensal</h3>
          <p>R$ 100,00</p>
          <h4>Benefícios:</h4>
          <ul>
            <li>Acesso ilimitado</li>
            <li>Personal Training opcional (custo adicional)</li>
            <li>Aulas em Grupo incluídas</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Plano Semestral</h3>
          <p>R$ 500,00</p>
          <p>Economize R$ 100,00!</p>
          <h4>Benefícios:</h4>
          <ul>
            <li>Acesso ilimitado</li>
            <li>Personal Training incluído</li>
            <li>Aulas em Grupo incluídas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicosOferecidos;