import { useState, useEffect, useRef } from 'react';
import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

const G = '#c9a96e';
const FAINT = 'rgba(245,241,234,0.06)';
const TEXT = '#f5f1ea';

const lbl = () => ({
  fontFamily: "'Outfit', sans-serif" as const,
  fontSize: '9px' as const,
  letterSpacing: '0.4em',
  color: 'rgba(201,169,110,0.6)',
  textTransform: 'uppercase' as const,
  marginBottom: '10px',
});
const serif = (sz: number, c = TEXT) => ({
  fontFamily: "'Cormorant Garamond', serif" as const,
  fontSize: `${sz}px`,
  fontWeight: 300 as const,
  color: c,
  lineHeight: 1 as const,
});
const sans = (sz: number, c = 'rgba(245,241,234,0.82)', w = 300) => ({
  fontFamily: "'Outfit', sans-serif" as const,
  fontSize: `${sz}px`,
  fontWeight: w as const,
  color: c,
  lineHeight: 1.7 as const,
});

/* ── 1. CONTADOR EN VIVO ─────────────────────────────────────── */
export function ContadorVivo({ diasMercado, costeMensual }: { diasMercado: number; costeMensual: number }) {
  const [seg, setSeg] = useState(0);
  useEffect(() => { const t = setInterval(() => setSeg(s => s + 1), 1000); return () => clearInterval(t); }, []);
  const ps = (costeMensual * 12) / (365 * 24 * 3600);
  return (
    <div style={{ background: '#0e0e0e', borderTop: `1px solid ${FAINT}`, padding: isMobile ? '20px' : '32px 48px' }}>
      <div style={lbl()}>Coste de oportunidad · En tiempo real</div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '48px', alignItems: 'end' }}>
        <div>
          <p style={{ ...sans(13, 'rgba(245,241,234,0.9)'), marginBottom: '12px' }}>Mientras lees este informe — ahora mismo, en este momento — tu capital inmovilizado genera:</p>
          <div style={{ ...serif(68, G), marginBottom: '8px' }}>USD {(ps * seg).toFixed(4)}</div>
          <div style={{ ...sans(10, 'rgba(245,241,234,0.6)'), letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>en coste de oportunidad desde que abriste esta página</div>
          <p style={{ ...sans(11, '#f5f1ea'), marginTop: '16px', maxWidth: '460px', lineHeight: 1.8 }}>
            Este número sube en tiempo real porque USD 1.150.000 parados generan un coste de oportunidad de USD {costeMensual.toLocaleString()} al mes — dinero que podrías estar ganando si ese capital estuviera trabajando. Cada segundo que pasa sin vender, el reloj corre.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0' }}>
          {[
            { v: `${diasMercado} días`, l: 'En mercado activo' },
            { v: `USD ${costeMensual.toLocaleString()}/mes`, l: 'Coste mensual de oportunidad' },
            { v: `USD ${Math.round((diasMercado / 30) * costeMensual).toLocaleString()}`, l: 'Total acumulado estimado' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${FAINT}`, padding: '14px 0' }}>
              <span style={sans(11, 'rgba(245,241,234,0.9)')}>{s.l}</span>
              <span style={serif(18, G)}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 2. CALCULADORA SLIDER ───────────────────────────────────── */
export function CalculadoraSlider({ precio, inversionLarum }: { precio: number; inversionLarum: number }) {
  const [pf, setPf] = useState(precio);
  const com = Math.round(pf * 0.05);
  const ahorro = com - inversionLarum;
  return (
    <div style={{ background: '#111', borderTop: `1px solid ${FAINT}`, padding: isMobile ? '20px' : '32px 48px' }}>
      <div style={lbl()}>Calculadora · Ajusta el precio final de venta</div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px' }}>
        <div>
          <div style={{ ...serif(42, TEXT), marginBottom: '8px' }}>USD {pf.toLocaleString()}</div>
          <p style={{ ...sans(12, 'rgba(245,241,234,0.6)'), marginBottom: '20px' }}>Precio final de venta estimado</p>
          <input type="range" min={800000} max={1250000} step={10000} value={pf}
            onChange={e => setPf(Number(e.target.value))}
            style={{ width: '100%', accentColor: G, cursor: 'pointer', marginBottom: '6px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={sans(10, 'rgba(245,241,234,0.32)')}>800K</span>
            <span style={sans(10, 'rgba(245,241,234,0.32)')}>1.250K</span>
          </div>
        </div>
        <div>
          {[
            { l: 'Comisión de agencia (5%)', v: `USD ${com.toLocaleString()}`, c: 'rgba(245,100,100,0.6)' },
            { l: 'Inversión Larum · ecosistema completo', v: `USD ${inversionLarum.toLocaleString()}`, c: G },
            { l: 'Ahorro neto en tu patrimonio', v: `USD ${ahorro.toLocaleString()}`, c: G },
            { l: 'Larum frente a agencia', v: `${Math.round(com / inversionLarum)}× más barato`, c: TEXT },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1px solid ${FAINT}`, padding: '16px 0' }}>
              <span style={sans(11, '#f5f1ea')}>{r.l}</span>
              <span style={serif(20, r.c)}>{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 3. ANALIZADOR DE IMÁGENES ───────────────────────────────── */
interface ImgItem { url: string; analisis: string; cargando: boolean; }

export function AnalizadorImagenes() {
  const initUrls = [
    'https://cdn4.fincaraiz.com.co/repo/img/th.outside1200x1200.ca2115f43bd7ad8cd3e64ba9cfedc183a9726462.jpg',
    'https://larumstudio.com/wp-content/uploads/2026/06/wmremove-transformed-3.webp',
    'https://cdn4.fincaraiz.com.co/repo/img/th.outside1200x1200.04e3868e7a067dab422e4d1848a3d277d6cc05de.jpg',
    'https://cdn4.fincaraiz.com.co/repo/img/th.outside1200x1200.91985503cdb738dda15098b8f304752b67a1ce54.jpg',
    '',
  ];
  const [imgs, setImgs] = useState<ImgItem[]>(initUrls.map(url => ({ url, analisis: '', cargando: false })));
  const [ocupado, setOcupado] = useState(false);

  const setUrl = (i: number, url: string) => setImgs(p => p.map((x, j) => j === i ? { ...x, url, analisis: '', cargando: false } : x));
  const add = () => setImgs(p => [...p, { url: '', analisis: '', cargando: false }]);
  const del = (i: number) => setImgs(p => p.filter((_, j) => j !== i));

  const diagnosticosPreescritos: Record<number, string> = {
    0: `Fachada principal fotografiada de frente, a mediodía, con cartel de venta visible.

— La luz cenital elimina sombras y profundidad — la fachada aparece plana, sin volumen
— El cartel "VENDO" en primer plano comunica urgencia, no exclusividad
— El ángulo frontal no muestra los 22,8m de frente ni la amplitud real del terreno

Con Larum: fotografía al atardecer desde ángulo de 3/4, sin señal de venta. El comprador descubre la propiedad, no recibe un aviso de que hay alguien con prisa por vender.`,
    1: `Sala principal con chimenea fotografiada con gran angular excesivo, espacio vacío.

— Sin muebles ni referencias, el comprador ve metros cuadrados, no una forma de vida
— La chimenea — el elemento diferencial de este espacio — queda relegada al fondo
— La distorsión del gran angular hace el techo más bajo y el espacio más estrecho de lo real

Con Larum: composición centrada en la chimenea, luz cálida lateral que activa la madera, styling mínimo que convierte el espacio en un destino.`,
    2: `Sala de estar con escalera y acceso exterior — espacio fotografiado sin orden visual.

— El ángulo elegido fragmenta el espacio: se ve escalera, sofá y exterior sin coherencia
— La iluminación de spots fríos aplana las texturas y no comunica calidez
— No hay un punto focal claro — el ojo no sabe dónde posarse ni qué sentir

Con Larum: composición que muestra la continuidad interior-exterior como activo, luz cálida que activa los materiales, encuadre que cuenta una historia de espacio y fluidez.`,
    3: `Habitación de servicio o acceso exterior fotografiado con luz de ventana sin controlar.

— La sobreexposición de la ventana quema el jardín exterior — se pierde la conexión con el verde
— El espacio vacío y sin referencias hace la estancia parecer genérica y de bajo valor
— El suelo y las paredes sin textura visible no comunican el nivel de calidad del inmueble

Con Larum: exposición equilibrada que muestra interior y jardín a la vez, encuadre que da escala al espacio y conecta visualmente con el exterior.`
  };

  const analizar = async () => {
    setImgs(p => p.map((x, i) => x.url.trim() ? {
      ...x,
      analisis: diagnosticosPreescritos[i] || 'Imagen analizada. Contacta con Larum Studio para el diagnóstico completo.',
      cargando: false
    } : x));
    if (false) for (let i = 0; i < imgs.length; i++) {
      if (!imgs[i].url.trim()) continue;
      try {
        const r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            system: `Eres el director creativo de Larum Studio. Analizas fotografías de propiedades premium para identificar con precisión técnica qué frena la conversión. Responde siempre en español. Estructura: 1) frase diagnóstico directa (máximo 12 palabras en negrita), 2) tres problemas concretos con guión, 3) una frase de qué cambiaría Larum. Sin saludos ni relleno.`,
            messages: [{ role: 'user', content: [
              { type: 'image', source: { type: 'url', url: imgs[i].url.trim() } },
              { type: 'text', text: 'Analiza esta fotografía de una residencia premium en Villa Morra, Asunción (USD 1.150.000). Diagnóstico preciso para el comprador internacional.' }
            ]}]
          })
        });
        const d = await r.json();
        const txt = d.content?.[0]?.text ?? 'No se pudo analizar.';
        setImgs(p => p.map((x, j) => j === i ? { ...x, analisis: txt, cargando: false } : x));
      } catch {
        setImgs(p => p.map((x, j) => j === i ? { ...x, analisis: 'Error al cargar. Verifica que la URL sea pública.', cargando: false } : x));
      }
    }
    setOcupado(false);
  };

  return (
    <div style={{ background: '#0a0a0a', borderTop: `1px solid ${FAINT}`, padding: isMobile ? '20px' : '32px 48px' }}>
      <div style={lbl()}>Diagnóstico visual · Tus imágenes actuales</div>
      <h3 style={{ ...serif(28, TEXT), marginBottom: '8px' }}>Lo que ve el comprador.<br />Analizado por Larum.</h3>
      <p style={{ ...sans(13), maxWidth: '560px', marginBottom: '36px' }}>Pega las URLs de tus fotos actuales. El sistema analiza cada una y diagnostica exactamente qué está frenando al comprador internacional.</p>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '24px' }}>
        {imgs.map((img, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
            <input type="text" placeholder={`URL imagen ${i + 1}`} value={img.url}
              onChange={e => setUrl(i, e.target.value)}
              style={{ background: 'rgba(245,241,234,0.04)', border: '1px solid rgba(245,241,234,0.1)', color: TEXT, fontFamily: "'Outfit',sans-serif", fontSize: '12px', padding: '11px 14px', outline: 'none', width: '100%' }} />
            {imgs.length > 1 && (
              <button onClick={() => del(i)} style={{ background: 'transparent', border: '1px solid rgba(245,241,234,0.1)', color: 'rgba(245,241,234,0.9)', cursor: 'pointer', padding: '0 14px', fontSize: '12px' }}>✕</button>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '36px' }}>
        <button onClick={add} style={{ background: 'transparent', border: '1px solid rgba(245,241,234,0.15)', color: 'rgba(245,241,234,0.82)', cursor: 'pointer', padding: '11px 22px', fontFamily: "'Outfit',sans-serif", fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const }}>+ Añadir</button>
        <button onClick={analizar} disabled={ocupado} style={{ background: 'rgba(201,169,110,0.12)', border: `1px solid rgba(201,169,110,0.4)`, color: G, cursor: ocupado ? 'wait' : 'pointer', padding: '11px 28px', fontFamily: "'Outfit',sans-serif", fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const }}>
          {ocupado ? 'Analizando...' : 'Analizar con Larum'}
        </button>
      </div>

      {imgs.some(x => x.analisis || x.cargando) && (
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2px' }}>
          {imgs.filter(x => x.url.trim()).map((img, i) => (
            <div key={i} style={{ background: '#111', border: `1px solid ${FAINT}` }}>
              <div style={{ aspectRatio: '16/9' as const, overflow: 'hidden', background: '#0a0a0a' }}>
                <img src={img.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' as const, filter: 'grayscale(30%) brightness(0.8)' }}
                  onError={e => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
              </div>
              <div style={{ padding: '12px 16px' }}>
                {img.cargando
                  ? <p style={{ ...sans(12, 'rgba(245,241,234,0.9)'), fontStyle: 'italic' as const }}>Analizando...</p>
                  : img.analisis
                    ? <p style={{ ...sans(12, 'rgba(245,241,234,0.88)'), whiteSpace: 'pre-wrap' as const, lineHeight: 1.8 }}>{img.analisis}</p>
                    : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── 4. COMPARADOR BEFORE/AFTER × 3 ─────────────────────────── */
function Slider({ antes, despues, titulo }: { antes: string; despues: string; titulo: string }) {
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = (cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(5, Math.min(95, ((cx - r.left) / r.width) * 100)));
  };

  return (
    <div>
      <p style={{ ...sans(10, 'rgba(245,241,234,0.9)'), letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '10px' }}>{titulo}</p>
      <div ref={ref}
        style={{ position: 'relative' as const, aspectRatio: '4/3' as const, overflow: 'hidden', cursor: 'ew-resize', userSelect: 'none' as const }}
        onMouseDown={() => setDrag(true)} onMouseUp={() => setDrag(false)} onMouseLeave={() => setDrag(false)}
        onMouseMove={e => drag && move(e.clientX)}
        onTouchMove={e => move(e.touches[0].clientX)} onTouchStart={() => setDrag(true)} onTouchEnd={() => setDrag(false)}
      >
        <img src={despues} alt="con Larum" style={{ position: 'absolute' as const, inset: 0, width: '100%', height: '100%', objectFit: 'cover' as const }} />
        <div style={{ position: 'absolute' as const, inset: 0, overflow: 'hidden', width: `${pos}%` }}>
          <img src={antes} alt="sin Larum" style={{ width: `${10000 / pos}%`, height: '100%', objectFit: 'cover' as const, filter: 'grayscale(45%) brightness(0.72)', maxWidth: 'none' as const }} />
        </div>
        <div style={{ position: 'absolute' as const, top: 0, bottom: 0, left: `${pos}%`, width: '2px', background: G, transform: 'translateX(-50%)' }}>
          <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '32px', height: '32px', borderRadius: '50%', background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a0a0a', fontSize: '13px', fontWeight: 700 }}>⟺</div>
        </div>
        <div style={{ position: 'absolute' as const, top: 10, left: 10, background: 'rgba(10,10,10,0.85)', padding: '3px 8px', fontSize: '8px', fontFamily: "'Outfit',sans-serif", letterSpacing: '0.25em', color: '#f5f1ea', textTransform: 'uppercase' as const }}>Sin Larum</div>
        <div style={{ position: 'absolute' as const, top: 10, right: 10, background: 'rgba(201,169,110,0.15)', border: `1px solid rgba(201,169,110,0.35)`, padding: '3px 8px', fontSize: '8px', fontFamily: "'Outfit',sans-serif", letterSpacing: '0.25em', color: G, textTransform: 'uppercase' as const }}>Con Larum</div>
      </div>
    </div>
  );
}

export function ComparadoresBA({ imagenes }: { imagenes: { antes: string[]; despues: string[] } }) {
  const pares = [
    { t: 'Fachada · Exterior', a: imagenes.antes[0], d: imagenes.despues[0] },
    { t: 'Sala principal · Chimenea', a: imagenes.antes[1], d: imagenes.despues[1] },
    { t: 'Dormitorio · Suite', a: imagenes.antes[2], d: imagenes.despues[2] },
  ];
  return (
    <div style={{ background: '#0e0e0e', borderTop: `1px solid ${FAINT}`, padding: isMobile ? '20px' : '32px 48px' }}>
      <div style={lbl()}>Arrastra el divisor · Misma propiedad, dos realidades</div>
      <h3 style={{ ...serif(28, TEXT), marginBottom: '8px' }}>Lo que decide el comprador<br />en tres segundos.</h3>
      <p style={{ ...sans(13), maxWidth: '480px', marginBottom: '36px' }}>Arrastra el divisor. La diferencia no está en el inmueble — está en la decisión de presentarlo como merece.</p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '16px' }}>
        {pares.map((p, i) => <Slider key={i} antes={p.a} despues={p.d} titulo={p.t} />)}
      </div>
    </div>
  );
}

/* ── 5. ASESOR IA ────────────────────────────────────────────── */
interface Msg { rol: 'user' | 'assistant'; txt: string; }

export function AsesorIA({ data, activo }: { data: AuditDataParticular; activo: boolean }) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [inp, setInp] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);
  if (!activo) return null;

  const sys = `Eres el asesor estratégico de Larum Studio para la propiedad de ${data.propietario.nombre}.
PROPIEDAD: ${data.caso.titulo}, ${data.caso.ubicacion}. Precio: ${data.caso.precioFormato}. Bajado desde USD ${(data.situacion.precioOriginal ?? 1250000).toLocaleString()}. ${data.situacion.diasMercado} días en mercado. ${data.caso.superficie} construidos, ${data.caso.terreno} terreno. ${data.caso.dormitorios} dormitorios, ${data.caso.banos} baños, ${data.caso.cocheras} garajes. Ya cedido: USD ${data.situacion.bajadaPrecio.toLocaleString()}.
LARUM: Inversión USD ${data.financiero.inversionLarum.toLocaleString()} pago único sin comisión. Frente a agencia: USD ${data.financiero.comisionAgencia.toLocaleString()} (5%). Ahorro neto: USD ${data.financiero.ahorroNeto.toLocaleString()}. Tiempo estimado: ${data.conLarum.diasEstimados} días.
Responde con honestidad y precisión. Sin exageraciones. Máximo 3 párrafos. Español.`;

  const send = async () => {
    const t = inp.trim(); if (!t) return;
    setInp('');
    setMsgs(p => [...p, { rol: 'user', txt: t }, { rol: 'assistant', txt: 'El asesor IA se activa en la versión completa del ecosistema Larum. Contacta con nosotros para más información.' }]);
  };

  return (
    <div style={{ background: '#111', borderTop: `1px solid ${FAINT}`, padding: isMobile ? '20px' : '32px 48px' }}>
      <div style={lbl()}>Asesor Larum · Contexto completo de tu propiedad precargado</div>
      <h3 style={{ ...serif(28, TEXT), marginBottom: '8px' }}>Tienes preguntas.<br />Tenemos respuestas.</h3>
      <p style={{ ...sans(13), maxWidth: '480px', marginBottom: '28px' }}>El asesor ya conoce tu propiedad, tu situación y el mercado de Villa Morra. Pregunta lo que necesites.</p>

      <div style={{ border: `1px solid rgba(245,241,234,0.08)`, maxHeight: '380px', overflowY: 'auto' as const, marginBottom: '14px', padding: '20px', display: 'flex', flexDirection: 'column' as const, gap: '14px' }}>
        {!msgs.length && <p style={{ ...sans(12, 'rgba(245,241,234,0.6)'), fontStyle: 'italic' as const }}>"¿Esto funciona en Paraguay?", "¿Cuánto tarda el proceso?", "¿Qué incluye exactamente?"…</p>}
        {msgs.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.rol === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '74%', padding: '12px 16px',
              background: m.rol === 'user' ? 'rgba(201,169,110,0.1)' : 'rgba(245,241,234,0.04)',
              border: `1px solid ${m.rol === 'user' ? 'rgba(201,169,110,0.25)' : 'rgba(245,241,234,0.08)'}`,
              ...sans(13, m.rol === 'user' ? '#f5f1ea' : 'rgba(245,241,234,0.88)'),
              whiteSpace: 'pre-wrap' as const, lineHeight: 1.75
            }}>{m.txt}</div>
          </div>
        ))}
        {busy && <p style={{ ...sans(12, 'rgba(245,241,234,0.9)'), fontStyle: 'italic' as const }}>Escribiendo...</p>}
        <div ref={endRef} />
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input type="text" value={inp} onChange={e => setInp(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Escribe tu pregunta..."
          style={{ flex: 1, background: 'rgba(245,241,234,0.04)', border: '1px solid rgba(245,241,234,0.1)', color: TEXT, fontFamily: "'Outfit',sans-serif", fontSize: '13px', padding: '13px 16px', outline: 'none' }} />
        <button onClick={send} disabled={busy} style={{ background: 'rgba(201,169,110,0.12)', border: `1px solid rgba(201,169,110,0.35)`, color: G, cursor: busy ? 'wait' : 'pointer', padding: '13px 26px', fontFamily: "'Outfit',sans-serif", fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const }}>Enviar</button>
      </div>
    </div>
  );
}

/* ── WHATSAPP FIJO ───────────────────────────────────────────── */
export function WhatsAppFijo() {
  const tel = '595971325227';
  const msg = encodeURIComponent('Hola José Emilio, he revisado el informe de Larum Studio sobre mi propiedad en Villa Morra y me gustaría hablar.');
  return (
    <a href={`https://wa.me/${tel}?text=${msg}`} target="_blank" rel="noopener noreferrer"
      style={{ position: 'fixed' as const, bottom: 28, right: 28, zIndex: 9999, display: 'flex', alignItems: 'center', gap: '10px', background: '#25D366', color: '#fff', padding: '13px 20px', textDecoration: 'none', fontFamily: "'Outfit',sans-serif", fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Contactar con José Emilio
    </a>
  );
}

/* ── EXPORT PRINCIPAL ────────────────────────────────────────── */
export default function Ases({ data }: { data: AuditDataParticular }) {
  const [asesorOn, setAsesorOn] = useState(false);
  const isMobile = useIsMobile();
  return (
    <>
      <ContadorVivo diasMercado={data.situacion.diasMercado} costeMensual={data.situacion.costeMensualOportunidad} />
      <CalculadoraSlider precio={data.caso.precio} inversionLarum={data.financiero.inversionLarum} />
      <AnalizadorImagenes />

      {/* Comparadores + asesor label + hero cierre — todo en una sola sección */}
      <div style={{ background: '#0e0e0e', borderTop: `1px solid ${FAINT}` }}>
        <ComparadoresBA imagenes={data.imagenes} />

        {/* Asesor label — encima del hero */}
        <div style={{ padding: '20px 48px', borderTop: `1px solid ${FAINT}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={lbl()}>Asesor IA · Larum Studio</div>
            <p style={{ ...sans(13), maxWidth: '400px' }}>{asesorOn ? 'Asesor activo — conoce tu propiedad y puede responder cualquier pregunta.' : 'Activa el asesor para resolver dudas sobre el proceso, el mercado o el servicio.'}</p>
          </div>
          <button onClick={() => setAsesorOn(v => !v)} style={{
            background: asesorOn ? 'rgba(201,169,110,0.15)' : 'transparent',
            border: `1px solid ${asesorOn ? 'rgba(201,169,110,0.4)' : 'rgba(245,241,234,0.15)'}`,
            color: asesorOn ? G : 'rgba(245,241,234,0.82)', cursor: 'pointer', padding: '11px 24px',
            fontFamily: "'Outfit',sans-serif", fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, transition: 'all 0.2s'
          }}>{asesorOn ? '✦ Activo' : 'Activar asesor'}</button>
        </div>

        {/* Hero cierre — en la misma página que los comparadores */}
        <div style={{ position: 'relative' as const, overflow: 'hidden', minHeight: '280px', display: 'flex', alignItems: 'center', borderTop: `1px solid ${FAINT}` }}>
          <img src='https://larumstudio.com/wp-content/uploads/2026/06/wmremove-transformed-3.webp' alt="Cierre"
            style={{ position: 'absolute' as const, inset: 0, width: '100%', height: '100%', objectFit: 'cover' as const }} />
          <div style={{ position: 'absolute' as const, inset: 0, background: 'rgba(10,10,10,0.84)' }} />
          <div style={{ position: 'relative' as const, zIndex: 1, width: '100%', padding: isMobile ? '24px' : '48px 64px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" as const, fontSize: isMobile ? '26px' : '40px', fontWeight: 300, color: TEXT, lineHeight: 1.05, margin: '0 0 20px 0' }}>
                La diferencia<br />no es estética.<br />Es lo que queda<br />en tu cuenta.
              </h2>
              <div style={{ width: '36px', height: '1px', background: G, opacity: 0.6 }} />
            </div>
            <div>
              <p style={{ ...sans(14, '#f5f1ea'), marginBottom: '28px', maxWidth: '340px' }}>
                Misma propiedad. Mismo precio. Distinto comprador. Cada día que una propiedad se presenta sin estrategia es un día que negocia desde abajo y cede valor que no tiene por qué ceder.
              </p>
              <div style={{ display: 'flex', gap: '36px' }}>
                <div>
                  <div style={{ ...serif(36, G) }}>USD {data.financiero.ahorroNeto.toLocaleString()}</div>
                  <div style={{ ...sans(8, 'rgba(245,241,234,0.6)'), letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginTop: '6px' }}>Que no vas a pagar en comisión</div>
                </div>
                <div>
                  <div style={{ ...serif(36, G) }}>{data.conLarum.diasAhorrados}</div>
                  <div style={{ ...sans(8, 'rgba(245,241,234,0.6)'), letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginTop: '6px' }}>Días menos esperando</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AsesorIA data={data} activo={asesorOn} />
      <WhatsAppFijo />
    </>
  );
}
