import React from 'react';
import Painter from '../assets/pape.jpg';
import './YMB.css';

function YMB(props) {
  return (
    <div>
      <h3 className="YMB-title">REALITES POETIQUES</h3>
      <img className="img-painter" src={Painter} alt="peintre" />
      <p className="YMB-text">
        Yves MERIEL-BUSSY, formé par les Beaux Arts de PARIS (Atelier Legeult),
        conserve, dans ses huiles et ses aquarelles, la réalité pour base de sa
        solide construction, mais il la transpose, l'idéalise par une synthèse
        personnelle. Peintre au tempérament raffiné, tout est contrôlé par le
        dessin, mais il l'enrobe de poésie et d'effets de couleurs, jouant avec
        les transparences et les effets de lumière. Ensemble bien composé, où la
        recherche d'atmosphère s'allie à la poésie de la couleur. Yves
        Mériel-Bussy est un intimiste, il laisse parler son cœur et ses
        sentiments lorsqu'il peint : "Ce que je recherche avant tout, c'est
        l'harmonie". L'intuition guide la main de ce peintre, et de cette main
        sort des images dans un baptême de clarté. Un visage de femme ou
        d'enfant est un voile léger, un rêve de douceur. Il n'y a pas de
        discours, pas de faces voilées devant la peur qui est devenue raison
        sociologique de notre monde. Il y a par contre, la représentation
        figurative, et non puérile, du bonheur modelé dans des atmosphères
        claires où la fleur rejoint la bulle translucide. Le peintre s'est
        parfois arrêté sur un visage, sur un geste dont il a voulu souligner la
        douceur ou la grâce au travers d'une symphonie de tons qu'il utilise
        avec bonheur. Les sujets de ses tableaux sont très diversifiés puisqu'il
        s'inspire de paysages bretons, de personnages, et peint également des
        portraits et des natures mortes. Mais Yves Mériel-Bussy est surtout
        amoureux de la femme, comme on le voit dans ses nus, assez chastes
        cependant, et dans ses "Plougastelen". "J'adore peindre la femme nue ou
        habillée", s'enthousiasme le peintre. Si l'artiste se définit par le
        caractère unique de ce qu'il crée, alors Yves Mériel-Bussy peut, à bon
        droit, revendiquer ce titre enviable. Sa manière de peindre, en effet,
        n'appartient qu'à lui.
      </p>
    </div>
  );
}

export default YMB;
