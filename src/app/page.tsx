
'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    header: "Common Sense Document Services",
    tagline: "Powered by AI + Experience",
    intro: "Affordable help for everyday people. We combine smart AI tools with 15+ years of real legal experience to assist you with immigration and court paperwork — without the high cost of an attorney.",
    postPay: "✔️ You only pay after the service is completed. No upfront fees.",
    contactHeader: "Contact Us",
    contactNote: "Have a question or ready to get started? Fill out the form below or reach out directly.",
    phone: "Phone: 425-584-8159",
    email: "Email: commonsensedocs@gmail.com",
    disclaimer: "We are not attorneys and do not provide legal advice...",
    send: "Send Message",
    name: "Your Name",
    yourEmail: "Your Email",
    message: "Your Message",
    contactSuccess: "Your message has been sent. We'll get back to you shortly.",
  },
  es: {
    header: "Servicios de Documentos Sentido Común",
    tagline: "Impulsado por IA + Experiencia",
    intro: "Ayuda asequible para personas comunes...",
    postPay: "✔️ Solo paga después de completar el servicio...",
    contactHeader: "Contáctenos",
    contactNote: "¿Tiene preguntas o listo para comenzar?...",
    phone: "Teléfono: 425-584-8159",
    email: "Correo electrónico: commonsensedocs@gmail.com",
    disclaimer: "No somos abogados y no ofrecemos asesoramiento legal...",
    send: "Enviar Mensaje",
    name: "Su Nombre",
    yourEmail: "Su Correo Electrónico",
    message: "Su Mensaje",
    contactSuccess: "Su mensaje ha sido enviado...",
  },
  ko: {
    header: "상식적인 문서 서비스",
    tagline: "AI + 경험 기반 서비스",
    intro: "일반 사람들을 위한 저렴한 지원...",
    postPay: "✔️ 서비스가 완료된 후에만 지불합니다...",
    contactHeader: "문의하기",
    contactNote: "질문이 있거나 시작할 준비가 되셨나요?...",
    phone: "전화: 425-584-8159",
    email: "이메일: commonsensedocs@gmail.com",
    disclaimer: "우리는 변호사가 아니며 법률 자문을 제공하지 않습니다...",
    send: "메시지 보내기",
    name: "이름",
    yourEmail: "이메일",
    message: "메시지",
    contactSuccess: "메시지가 성공적으로 전송되었습니다...",
  },
  zh: {
    header: "常识文书服务",
    tagline: "由 AI 和经验驱动",
    intro: "为普通人提供负担得起的帮助...",
    postPay: "✔️ 服务完成后才付款。无需预付款。",
    contactHeader: "联系我们",
    contactNote: "有问题或准备好开始了吗？请填写以下表格或直接联系我们。",
    phone: "电话: 425-584-8159",
    email: "电子邮件: commonsensedocs@gmail.com",
    disclaimer: "我们不是律师，不能提供法律建议...",
    send: "发送消息",
    name: "您的姓名",
    yourEmail: "您的电子邮件",
    message: "您的留言",
    contactSuccess: "您的信息已发送，我们将尽快与您联系。",
  },
  fr: {
    header: "Services de Documents de Bon Sens",
    tagline: "Propulsé par l'IA + l'expérience",
    intro: "Aide abordable pour les gens ordinaires...",
    postPay: "✔️ Vous ne payez qu'après la prestation du service...",
    contactHeader: "Contactez-nous",
    contactNote: "Vous avez une question ou êtes prêt à commencer ?...",
    phone: "Téléphone : 425-584-8159",
    email: "E-mail : commonsensedocs@gmail.com",
    disclaimer: "Nous ne sommes pas des avocats et ne donnons pas de conseils juridiques...",
    send: "Envoyer le message",
    name: "Votre nom",
    yourEmail: "Votre email",
    message: "Votre message",
    contactSuccess: "Votre message a été envoyé. Nous vous répondrons sous peu.",
  },
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{t.header}</h1>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="text-black rounded p-1">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="ko">한국어</option>
              <option value="zh">中文</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <h2 className="text-xl mb-4">{t.tagline}</h2>
          <p className="mb-4">{t.intro}</p>
          <p className="mb-6 text-green-300 font-semibold">{t.postPay}</p>

          <Link href="/services" className="underline text-blue-300 mb-6 block">See All Services →</Link>

          <p className="text-sm mt-12">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
