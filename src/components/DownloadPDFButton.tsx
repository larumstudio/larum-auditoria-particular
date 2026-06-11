import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { AuditoriaPDFDocument } from './AuditoriaPDF';
import type { AuditDataParticular } from '../types';

interface Props {
  data: AuditDataParticular;
}

// En local usa el proxy de Vite, en producción usa la Edge Function de Vercel
function proxyUrl(url: string): string {
  if (!url) return '';
  return `/api/proxy?url=${encodeURIComponent(url)}`;
}

async function urlToBase64(url: string): Promise<string> {
  if (!url) return '';
  try {
    const proxied = proxyUrl(url);
    const res = await fetch(proxied);
    if (!res.ok) return '';
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve('');
      reader.readAsDataURL(blob);
    });
  } catch {
    return '';
  }
}

async function resolveImages(data: AuditDataParticular) {
  const allUrls = [
    data.imagenes.hero,
    ...data.imagenes.antes,
    ...data.imagenes.despues,
    'https://larumstudio.com/wp-content/uploads/2026/06/wmremove-transformed-3.webp',
    'https://larumstudio.com/wp-content/uploads/2026/06/gpt-image-2_artistic_portrait_photography_of_Use_the_first_image_as_the_person_s_face_and_id-0.jpg',
  ];

  const resolved = await Promise.all(allUrls.map(urlToBase64));

  const hero = resolved[0];
  const antes = resolved.slice(1, 1 + data.imagenes.antes.length);
  const despues = resolved.slice(1 + data.imagenes.antes.length, 1 + data.imagenes.antes.length + data.imagenes.despues.length);
  const ecosistemaImg = resolved[resolved.length - 2];
  const firmaImg = resolved[resolved.length - 1];

  return {
    ...data,
    imagenes: { hero, antes, despues },
    _pdfExtras: { ecosistemaImg, firmaImg },
  };
}

export default function DownloadPDFButton({ data }: Props) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    try {
      setProgress('Cargando imágenes...');
      const dataConImagenes = await resolveImages(data);

      setProgress('Generando PDF...');
      const blob = await pdf(<AuditoriaPDFDocument data={dataConImagenes as any} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Larum-${data.propietario.nombre.replace(/\s+/g, '-')}-${data.meta.numeroInforme}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generando PDF:', err);
      setProgress('Error al generar');
    } finally {
      setLoading(false);
      setProgress('');
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '32px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 24px',
        background: loading ? 'rgba(201,169,110,0.08)' : 'rgba(201,169,110,0.12)',
        border: '1px solid rgba(201,169,110,0.35)',
        color: loading ? 'rgba(201,169,110,0.45)' : '#c9a96e',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '10px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={e => {
        if (!loading) {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,169,110,0.2)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.6)';
        }
      }}
      onMouseLeave={e => {
        if (!loading) {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,169,110,0.12)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.35)';
        }
      }}
    >
      {loading ? (
        <>
          <span style={{
            display: 'inline-block', width: '14px', height: '14px',
            border: '1px solid rgba(201,169,110,0.3)', borderTopColor: '#c9a96e',
            borderRadius: '50%', animation: 'spin 0.8s linear infinite',
          }} />
          {progress || 'Generando...'}
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <path d="M7 1v8M7 9l-3-3M7 9l3-3M1 11h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Descargar Informe
        </>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}
