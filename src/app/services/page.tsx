
'use client';

import { useState } from 'react';
import Link from 'next/link';

const pricing = {
  en: {
    title: "Our Services & Pricing",
    list: [
      "Citizenship Application (N-400) – $200 to $250",
      "Divorce Papers (No Children) – $250",
      "Divorce with Child Support – $300",
      "Small Claims Court Filing Assistance – $50",
      "Name Change – $50",
      "Green Card – Family-Based (I-485) – $400 + $50 per additional family member",
    ],
  },
  es: {
    title: "Nuestros Servicios y Precios",
    list: [
      "Solicitud de ciudadanía (N-400) – $200 a $250",
      "Documentos de divorcio (sin hijos) – $250",
      "Divorcio con manutención de menores – $300",
      "Asistencia para presentación en la Corte de Reclamos Menores – $50",
      "Cambio de nombre – $50",
      "Tarjeta Verde – Familiar (I-485) – $400 + $50 por familiar adicional",
    ],
  },
  ko: {
    title: "서비스 및 요금 안내",
    list: [
      "시민권 신청서 (N-400) – $200 ~ $250",
      "이혼 서류 (자녀 없음) – $250",
      "자녀 포함 이혼 및 양육비 – $300",
      "소액 청구 법원 서류 지원 – $50",
      "이름 변경 – $50",
      "영주권 신청 (가족 기반, I-485) – $400 + 추가 가족당 $50",
    ],
  },
  zh: {
    title: "我们的服务与价格",
    list: [
      "入籍申请 (N-400) – $200 到 $250",
      "离婚文件（无子女）– $250",
      "涉及子女抚养的离婚 – $300",
      "小额索赔法院文件协助 – $50",
      "更改姓名 – $50",
      "绿卡 – 家庭类 (I-485) – $400 + 每位额外家庭成员 $50",
    ],
  },
  fr: {
    title: "Nos Services et Tarifs",
    list: [
      "Demande de citoyenneté (N-400) – 200 $ à 250 $",
      "Papiers de divorce (sans enfants) – 250 $",
      "Divorce avec pension alimentaire – 300 $",
      "Assistance au dépôt en Cour des petites créances – 50 $",
      "Changement de nom – 50 $",
      "Carte Verte – Fondée sur la famille (I-485) – 400 $ + 50 $ par membre supplémentaire",
    ],
  },
};

export default function Services() {
  const [lang, setLang] = useState('en');
  const t = pricing[lang];

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{t.title}</h1>
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="border p-1 rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ko">한국어</option>
            <option value="zh">中文</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <ul className="list-disc ml-6 space-y-2">
          {t.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link href="/" className="text-blue-500 underline mt-8 block">← Back to Home</Link>
      </div>
    </div>
  );
}
