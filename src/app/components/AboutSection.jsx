"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Webdesign</li>
        <li>Business intelligence</li>
        <li>Intelligence artificielle</li>
        <li>Planification et gestion de projet</li>
        <li>Datawarehouse, ETL, analyse de donnée</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Diplôme baccalauréat | 2018
        <ul className="list-none pl-4">
          <li>Lycée wafa - Ariana</li>
        </ul>
        </li>
        <li>
          Licence Sciences de l’Informatique – Génie Logiciel |2023
        <ul className="list-none pl-4">
          <li>Institut Supérieur d’Informatique (ISI)</li>
        </ul>
        </li>
      </ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>A4Q Certified Selenium Tester FL
          <ul className="list-none pl-4">
            <li>Septembre 2022 GASQ Tunis</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "activity",
    id: "activity",
    content: (
      <ul className="list-disc pl-2">
        <li>Conseillère Média, JCI
          <ul className="list-none pl-4">
            <li>Réalisation affiche/ Gestion des projets et de l’équipe média</li>
          </ul>
        </li>
        <li>VICE -Présidente, CHANGE MAKER
          <ul className="list-none pl-4">
            <li>Gestion du club et aide de présidente</li>
          </ul>
        </li>
        <li>VICE-Responsable de département Média, IEEE
          <ul className="list-none pl-4">
            <li>Tâches effectuées: Aide de responsable en quelque affiche </li>
          </ul>
        </li>
        <li>Responsable de département Média, ARTBOX
          <ul className="list-none pl-4">
            <li>Tâches effectuées: Réalisation affiche/ Gestion de projets et de l’équipe design </li>
          </ul>
        </li>
        <li>Responsable de département Design, CHANGE MAKER
          <ul className="list-none pl-4">
            <li>Tâches effectuées: Réalisation affiche/ Formation en Photoshop CC 2020/ Gestion des
              projets et de l’équipe design </li>
          </ul>
        </li>
        <li>Membre Actif- département Média , ACM
          <ul className="list-none pl-4">
            <li>Réalisation affiche et aide dans la médiatisation des événements </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Étudiante en première année du cycle ingénieur en Informatique à l’ESPRIT, passionnée de développement web et de nouvelle technologie, j’ai pour ambition d’apprendre et de découvrir le monde professionnel. Je considère que le travail est une valeur et que l’expérience s’acquière au sein d’une équipe professionnelle.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("activity")}
              active={tab === "activity"}
            >
              {" "}
              Activity Extra-Univ{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
