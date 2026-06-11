import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import type { AuditDataParticular } from '../types';

// Fuentes del sistema — siempre disponibles en @react-pdf/renderer
// Serif: Times-Roman / Times-Bold / Times-Italic
// Sans:  Helvetica / Helvetica-Bold

// ─── Paleta ──────────────────────────────────────────────────────────────────
const C = {
  bg:        '#0a0a0a',
  bg2:       '#0e0e0e',
  bg3:       '#111111',
  gold:      '#c9a96e',
  goldFade:  'rgba(201,169,110,0.55)',
  cream:     '#f5f1ea',
  creamFade: 'rgba(245,241,234,0.7)',
  red:       'rgba(245,100,100,0.6)',
  border:    'rgba(245,241,234,0.08)',
  borderGold:'rgba(201,169,110,0.25)',
};

// ─── Estilos base ─────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    fontFamily: 'Helvetica',
    color: C.cream,
  },
  // Layout
  row: { flexDirection: 'row' },
  col: { flexDirection: 'column' },
  half: { width: '50%' },
  third: { width: '33.33%' },
  // Tipografía display — Times como serif elegante
  serif_xl: { fontFamily: 'Times-Roman', fontSize: 44, color: C.cream, lineHeight: 1.05 },
  serif_lg: { fontFamily: 'Times-Roman', fontSize: 32, color: C.cream, lineHeight: 1.1 },
  serif_md: { fontFamily: 'Times-Roman', fontSize: 22, color: C.cream, lineHeight: 1.15 },
  serif_sm: { fontFamily: 'Times-Roman', fontSize: 16, color: C.cream },
  serif_gold_xl: { fontFamily: 'Times-Roman', fontSize: 52, color: C.gold, lineHeight: 1 },
  serif_gold_lg: { fontFamily: 'Times-Roman', fontSize: 36, color: C.gold, lineHeight: 1 },
  serif_gold_md: { fontFamily: 'Times-Roman', fontSize: 24, color: C.gold, lineHeight: 1 },
  serif_italic: { fontFamily: 'Times-Italic', fontSize: 14, color: C.cream, lineHeight: 1.6 },
  // Tipografía texto — Helvetica
  label: { fontFamily: 'Helvetica', fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(201,169,110,0.7)' },
  label_dim: { fontFamily: 'Helvetica', fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(245,241,234,0.4)' },
  body: { fontFamily: 'Helvetica', fontSize: 10, color: C.cream, lineHeight: 1.8 },
  body_sm: { fontFamily: 'Helvetica', fontSize: 9, color: C.creamFade, lineHeight: 1.7 },
  caption: { fontFamily: 'Helvetica', fontSize: 7, color: 'rgba(245,241,234,0.55)', letterSpacing: 1.5, textTransform: 'uppercase' },
  // Decoración
  divider_gold: { width: 36, height: 1, backgroundColor: C.gold, opacity: 0.4, marginVertical: 16 },
  divider: { width: '100%', height: 1, backgroundColor: 'rgba(245,241,234,0.07)', marginVertical: 12 },
  border_box: { border: 1, borderColor: C.border, padding: 20 },
  border_gold_box: { border: 1, borderColor: C.borderGold, padding: 20, backgroundColor: 'rgba(201,169,110,0.04)' },
  dot_gold: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.gold, marginRight: 10, marginTop: 2 },
  dot_dim: { width: 7, height: 7, borderRadius: 4, backgroundColor: 'rgba(245,241,234,0.3)', marginRight: 10, marginTop: 2 },
});

// ─── Componentes pequeños ────────────────────────────────────────────────────
const Logo = () => (
  <View style={{ marginBottom: 48 }}>
    <Text style={{ fontFamily: 'Cormorant', fontSize: 20, fontWeight: 300, letterSpacing: 8, color: C.cream }}>LARUM</Text>
    <Text style={[s.caption, { marginTop: 2, letterSpacing: 6 }]}>STUDIO</Text>
  </View>
);

const SectionNumber = ({ n }: { n: string }) => (
  <Text style={[s.label, { marginBottom: 8 }]}>{n}</Text>
);

const GoldDot = () => <View style={[s.dot_gold, { flexShrink: 0 }]} />;
const DimDot = () => <View style={[s.dot_dim, { flexShrink: 0 }]} />;

// ─── Página 1: Portada ───────────────────────────────────────────────────────
function PageCover({ data }: { data: AuditDataParticular }) {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={[s.row, { height: '100%' }]}>
        {/* Izquierda */}
        <View style={[s.half, { backgroundColor: C.bg, padding: 48, justifyContent: 'space-between' }]}>
          <View>
            <Logo />
            <View style={{ border: 1, borderColor: 'rgba(201,169,110,0.3)', padding: '6 14', marginBottom: 24, alignSelf: 'flex-start' }}>
              <Text style={s.label}>{data.meta.tipo}</Text>
            </View>
            <Text style={[s.serif_xl, { marginBottom: 20 }]}>
              Tu propiedad{'\n'}lleva {data.situacion.diasMercado} días{'\n'}esperando{'\n'}al comprador.
            </Text>
            <View style={s.divider_gold} />
            <Text style={[s.body, { maxWidth: 280, color: C.creamFade }]}>
              El problema no es el precio. No es la ubicación. No es el inmueble. Es lo que ve el comprador antes de decidir si te llama.
            </Text>
          </View>
          <View>
            <View style={s.divider} />
            <View style={[s.row, { justifyContent: 'space-between', alignItems: 'flex-end' }]}>
              <View>
                <Text style={[s.caption, { marginBottom: 4 }]}>Preparado para</Text>
                <Text style={[s.body, { color: C.cream }]}>{data.propietario.nombre}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[s.label, { color: C.gold, marginBottom: 3 }]}>{data.meta.fecha}</Text>
                <Text style={[s.label, { color: C.gold }]}>{data.meta.numeroInforme}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Derecha — imagen hero */}
        <View style={[s.half, { position: 'relative', overflow: 'hidden' }]}>
          <Image src={data.imagenes.hero} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* Overlay oscuro */}
          <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', backgroundColor: 'rgba(10,10,10,0.75)' }} />
          {/* Stats */}
          <View style={{ position: 'absolute', bottom: 40, left: 32, right: 32 }}>
            <View style={[s.border_gold_box, { marginBottom: 10, backgroundColor: 'rgba(201,169,110,0.12)' }]}>
              <Text style={[s.serif_gold_lg, { marginBottom: 4 }]}>{data.caso.precioFormato}</Text>
              <Text style={s.label}>{data.caso.titulo}</Text>
            </View>
            <View style={[s.row, { gap: 10 }]}>
              <View style={{ flex: 1, backgroundColor: 'rgba(10,10,10,0.85)', border: 1, borderColor: C.border, padding: 14 }}>
                <Text style={[s.serif_md, { color: C.creamFade, marginBottom: 4 }]}>{data.situacion.diasMercado} días</Text>
                <Text style={s.caption}>En mercado</Text>
              </View>
              <View style={{ flex: 1, backgroundColor: 'rgba(10,10,10,0.85)', border: 1, borderColor: C.border, padding: 14 }}>
                <Text style={[s.serif_md, { color: 'rgba(245,100,100,0.85)', marginBottom: 4 }]}>−USD {data.situacion.bajadaPrecio.toLocaleString()}</Text>
                <Text style={[s.caption, { color: 'rgba(220,60,60,0.7)' }]}>Ya bajado de precio</Text>
              </View>
            </View>
          </View>
          <Text style={{ position: 'absolute', top: 20, right: 20, fontFamily: 'Helvetica', fontSize: 7, letterSpacing: 3, color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase' }}>
            LARUMSTUDIO.COM
          </Text>
        </View>
      </View>
    </Page>
  );
}

// ─── Página 2: El Diagnóstico ────────────────────────────────────────────────
function PageDiagnostico({ data }: { data: AuditDataParticular }) {
  const rows = [
    { metrica: 'Días en mercado', sin: `${data.situacion.diasMercado} días`, con: `${data.conLarum.diasEstimados} días`, sinLabel: 'Hoy', conLabel: 'Con Larum' },
    { metrica: 'Precio', sin: `−USD ${data.situacion.bajadaPrecio.toLocaleString()}`, con: 'Sin ceder más', sinLabel: 'Ya bajado', conLabel: 'Precio protegido' },
    { metrica: 'Comprador objetivo', sin: 'Sin alcance internacional', con: 'Brasil · Argentina · Diáspora', sinLabel: 'Mercado local únicamente', conLabel: 'Ecosistema en 3 idiomas' },
    { metrica: 'Estado', sin: 'Sin oferta en firme', con: data.conLarum.estado, sinLabel: 'Situación actual', conLabel: 'Con ecosistema Larum' },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={[s.row, { height: '100%' }]}>
        {/* Izquierda */}
        <View style={[s.half, { backgroundColor: C.bg2, padding: 48, borderRight: 1, borderColor: C.border }]}>
          <SectionNumber n="01" />
          <Text style={[s.serif_xl, { marginBottom: 24 }]}>El diagnóstico{'\n'}real.</Text>
          <Text style={[s.body, { maxWidth: 300, marginBottom: 16 }]}>
            Misma propiedad. Mismo precio. Dos formas de presentarla. La diferencia no está en el inmueble — está en lo que percibe el comprador antes de llamar.
          </Text>
          <View style={s.divider_gold} />
          {/* Ficha */}
          <View style={s.border_box}>
            <Text style={[s.label, { color: C.gold, marginBottom: 14 }]}>La propiedad</Text>
            <Text style={[s.serif_md, { marginBottom: 4 }]}>{data.caso.titulo}</Text>
            <Text style={[s.body_sm, { marginBottom: 16 }]}>{data.caso.ubicacion} · {data.caso.superficie} · {data.caso.terreno}</Text>
            <View style={[s.row, { flexWrap: 'wrap', gap: 16 }]}>
              {[
                { v: String(data.caso.dormitorios), l: 'Dormitorios' },
                { v: String(data.caso.banos), l: 'Baños' },
                { v: String(data.caso.cocheras), l: 'Garajes' },
                { v: data.caso.precioFormato, l: 'Precio publicado' },
              ].map((item, i) => (
                <View key={i} style={{ width: '45%' }}>
                  <Text style={s.serif_gold_md}>{item.v}</Text>
                  <Text style={[s.caption, { marginTop: 2 }]}>{item.l}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Derecha */}
        <View style={[s.half, { backgroundColor: C.bg3, padding: 48 }]}>
          <View style={{ height: 40 }} />
          <Text style={[s.label, { color: C.gold, marginBottom: 24 }]}>La misma propiedad · Dos realidades</Text>
          {rows.map((row, i) => (
            <View key={i} style={[s.row, { borderBottom: 1, borderColor: 'rgba(245,241,234,0.05)', paddingBottom: 4 }]}>
              <View style={{ width: '30%', paddingVertical: 10 }}>
                <Text style={[s.caption, { color: C.creamFade }]}>{row.metrica}</Text>
              </View>
              <View style={{ width: '35%', padding: 10, backgroundColor: 'rgba(245,241,234,0.02)' }}>
                <Text style={[s.serif_sm, { color: C.creamFade, marginBottom: 2 }]}>{row.sin}</Text>
                <Text style={s.caption}>{row.sinLabel}</Text>
              </View>
              <View style={{ width: '35%', padding: 10, backgroundColor: 'rgba(201,169,110,0.04)' }}>
                <Text style={[s.serif_sm, { color: C.gold, marginBottom: 2 }]}>{row.con}</Text>
                <Text style={[s.caption, { color: 'rgba(201,169,110,0.4)' }]}>{row.conLabel}</Text>
              </View>
            </View>
          ))}
          {/* Días ahorrados */}
          <View style={[s.border_gold_box, { marginTop: 24 }]}>
            <Text style={[s.label, { marginBottom: 8 }]}>Tiempo que se puede recuperar</Text>
            <Text style={s.serif_gold_lg}>{data.conLarum.diasAhorrados} días menos</Text>
            <Text style={[s.body_sm, { marginTop: 6 }]}>entre la situación actual y el resultado con intervención estratégica</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

// ─── Página 3: Antes y Después ───────────────────────────────────────────────
function PageAntesYDespues({ data }: { data: AuditDataParticular }) {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      {/* Header */}
      <View style={[s.row, { borderBottom: 1, borderColor: C.border }]}>
        <View style={[s.half, { padding: '20 48', borderRight: 1, borderColor: C.border }]}>
          <SectionNumber n="02" />
          <Text style={s.serif_xl}>Lo que ve{'\n'}el comprador.</Text>
        </View>
        <View style={[s.half, { padding: '20 48', justifyContent: 'flex-end' }]}>
          <Text style={[s.body, { maxWidth: 320, marginBottom: 8 }]}>
            El comprador de una propiedad de este nivel decide desde la pantalla, desde otro país, en segundos.
          </Text>
          <Text style={[s.body_sm, { maxWidth: 320 }]}>
            La primera imagen no es decoración. Es el filtro. Si no detiene el scroll, el resto del anuncio no existe.
          </Text>
        </View>
      </View>

      {/* Imágenes */}
      <View style={[s.row, { flex: 1 }]}>
        {/* Antes */}
        <View style={[s.half, { borderRight: 1, borderColor: C.border }]}>
          <View style={[s.row, { alignItems: 'center', padding: '12 24', borderBottom: 1, borderColor: C.border, gap: 8 }]}>
            <DimDot />
            <Text style={s.label}>Presentación actual · {data.situacion.diasMercado} días sin comprador</Text>
          </View>
          <View style={[s.row, { flex: 1, gap: 2, padding: 2 }]}>
            {data.imagenes.antes.slice(0, 2).map((src, i) => (
              <View key={i} style={{ flex: 1, position: 'relative' }}>
                <Image src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                {i === 0 && (
                  <Text style={{ position: 'absolute', bottom: 8, left: 10, fontFamily: 'Helvetica', fontSize: 7, color: C.cream, letterSpacing: 2, textTransform: 'uppercase' }}>
                    PORTADA ACTUAL
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>
        {/* Después */}
        <View style={s.half}>
          <View style={[s.row, { alignItems: 'center', padding: '12 24', borderBottom: 1, borderColor: C.border, gap: 8 }]}>
            <GoldDot />
            <Text style={[s.label, { color: 'rgba(201,169,110,0.6)' }]}>Estándar Larum · Estimado {data.conLarum.diasEstimados} días</Text>
          </View>
          <View style={[s.row, { flex: 1, gap: 2, padding: 2 }]}>
            {data.imagenes.despues.slice(0, 2).map((src, i) => (
              <View key={i} style={{ flex: 1, position: 'relative' }}>
                <Image src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {i === 0 && (
                  <Text style={{ position: 'absolute', bottom: 8, left: 10, fontFamily: 'Helvetica', fontSize: 7, color: C.gold, letterSpacing: 2, textTransform: 'uppercase' }}>
                    PORTADA EDITORIAL
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={[s.row, { borderTop: 1, borderColor: C.border }]}>
        <View style={[s.half, { padding: '16 48', borderRight: 1, borderColor: C.border }]}>
          <Text style={[s.serif_lg, { color: C.creamFade }]}>{data.situacion.diasMercado} días</Text>
          <Text style={[s.caption, { marginTop: 4 }]}>Sin el comprador correcto</Text>
        </View>
        <View style={[s.half, { padding: '16 48' }]}>
          <Text style={s.serif_gold_lg}>{data.conLarum.diasEstimados} días</Text>
          <Text style={[s.caption, { marginTop: 4, color: 'rgba(201,169,110,0.55)' }]}>Estimado con ecosistema Larum completo</Text>
        </View>
      </View>
    </Page>
  );
}

// ─── Página 4: Coste de tiempo ───────────────────────────────────────────────
function PageCoste({ data }: { data: AuditDataParticular }) {
  const meses = Math.round(data.situacion.diasMercado / 30);
  const acumulado = meses * data.situacion.costeMensualOportunidad;

  const metricas = [
    { label: 'Coste de oportunidad mensual', value: `USD ${data.situacion.costeMensualOportunidad.toLocaleString()}`, sub: `Capital inmovilizado al 0,55% mensual sobre ${data.caso.precioFormato}`, red: false },
    { label: `Acumulado en ${meses} meses en mercado`, value: `USD ${acumulado.toLocaleString()}`, sub: 'En rentabilidad no generada desde que está publicada', red: false },
    { label: 'Ya cedido en precio de publicación', value: `−USD ${data.situacion.bajadaPrecio.toLocaleString()}`, sub: 'Sin haber cambiado nada en la presentación del inmueble', red: true },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={[s.row, { height: '100%' }]}>
        <View style={[s.half, { backgroundColor: C.bg2, padding: 48, borderRight: 1, borderColor: C.border }]}>
          <SectionNumber n="03" />
          <Text style={[s.serif_xl, { marginBottom: 20 }]}>Lo que cuesta{'\n'}cada mes{'\n'}de espera.</Text>
          <Text style={[s.body, { maxWidth: 300, marginBottom: 32 }]}>
            Una propiedad parada en mercado no es un activo en espera. Es capital inmovilizado que genera un coste de oportunidad real cada mes que no se convierte en venta.
          </Text>
          {metricas.map((m, i) => (
            <View key={i} style={{ paddingVertical: 16, borderBottom: 1, borderColor: 'rgba(245,241,234,0.06)' }}>
              <Text style={[s.body_sm, { marginBottom: 6 }]}>{m.label}</Text>
              <Text style={[s.serif_lg, { color: m.red ? C.red : C.creamFade, marginBottom: 4 }]}>{m.value}</Text>
              <Text style={s.body_sm}>{m.sub}</Text>
            </View>
          ))}
        </View>
        <View style={[s.half, { backgroundColor: C.bg3, padding: 48, justifyContent: 'space-between' }]}>
          <View>
            <View style={{ height: 40 }} />
            <Text style={[s.label, { marginBottom: 24 }]}>La presión que no cede</Text>
            <Text style={[s.body, { marginBottom: 20 }]}>
              Bajar el precio es la respuesta más fácil cuando una propiedad no se mueve. Y también la más cara. Los USD {data.situacion.bajadaPrecio.toLocaleString()} ya cedidos no vinieron de un mercado que rechazó el inmueble — vinieron de una presentación que no lo defendió.
            </Text>
            <Text style={[s.body, { marginBottom: 32 }]}>
              Sin intervención estratégica, la dinámica continúa: más tiempo en mercado, más presión para seguir bajando, más capital cedido.
            </Text>
            <View style={{ borderLeft: 2, borderColor: 'rgba(201,169,110,0.25)', paddingLeft: 20 }}>
              <Text style={s.serif_italic}>"El mercado no rechazó tu propiedad. Rechazó cómo se presentó."</Text>
            </View>
          </View>
          <View style={s.border_gold_box}>
            <Text style={[s.label, { marginBottom: 10 }]}>Lo que te ahorras frente a una agencia</Text>
            <Text style={s.serif_gold_lg}>USD {data.financiero.ahorroNeto.toLocaleString()}</Text>
            <Text style={[s.body_sm, { marginTop: 8 }]}>
              Una agencia cobra USD {data.financiero.comisionAgencia.toLocaleString()} (5% de comisión).{'\n'}
              Larum cuesta USD {data.financiero.inversionLarum.toLocaleString()}.{'\n'}
              La diferencia se queda en tu patrimonio.
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

// ─── Página 5: La Narrativa ──────────────────────────────────────────────────
function PageNarrativa({ data }: { data: AuditDataParticular }) {
  const descripcionMala = `"- Garage para 6 vehículos - Deposito/Bodega Planta Baja - Hall de Entrada - Escritorio - Baño social - Amplia Sala Principal con chimenea - Comedor - Estar Intimo Comedor - Altillo - 1 Habitación en Suite PB - Cocina Amoblada - Despensa - Área de Lavado - 2 Habitaciones de Servicio con Baño Completo - Comedor de Servicio - Amplio Jardín con piscina 40m2 - Amplio Quincho climatizado - Área de Masaje, GYM con Salida al Balcón - Baño completo con Jacuzzi - Sauna Húmedo - 2 Habitaciones en suite con vestidores y Balcón. Precio: USD ***"`;

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      {/* Header */}
      <View style={[s.row, { borderBottom: 1, borderColor: C.border }]}>
        <View style={[s.half, { padding: '20 48', borderRight: 1, borderColor: C.border }]}>
          <SectionNumber n="04" />
          <Text style={s.serif_xl}>Lo que lee{'\n'}el comprador.</Text>
        </View>
        <View style={[s.half, { padding: '20 48', justifyContent: 'flex-end' }]}>
          <Text style={[s.body, { maxWidth: 320 }]}>
            La narrativa es la diferencia entre una propiedad que se describe y una propiedad que se desea. El comprador de alto patrimonio no necesita metros cuadrados — necesita imaginarse viviendo ahí.
          </Text>
        </View>
      </View>

      <View style={[s.row, { flex: 1 }]}>
        {/* Descripción actual */}
        <View style={[s.half, { padding: '28 48', borderRight: 1, borderColor: C.border }]}>
          <View style={[s.row, { alignItems: 'center', gap: 8, marginBottom: 20 }]}>
            <Text style={[s.body, { color: C.creamFade }]}>✗</Text>
            <Text style={s.label}>Descripción publicada hoy</Text>
          </View>
          <View style={[s.border_box, { marginBottom: 20 }]}>
            <Text style={[s.serif_italic, { fontSize: 11, color: C.creamFade }]}>{descripcionMala}</Text>
          </View>
          {data.narrativaActual.problemas.map((p, i) => (
            <View key={i} style={[s.row, { gap: 10, marginBottom: 8 }]}>
              <Text style={{ color: 'rgba(245,100,100,0.5)', fontSize: 9, marginTop: 1 }}>—</Text>
              <Text style={s.body_sm}>{p}</Text>
            </View>
          ))}
        </View>

        {/* Narrativa Larum */}
        <View style={[s.half, { padding: '28 48' }]}>
          <View style={[s.row, { alignItems: 'center', gap: 8, marginBottom: 20 }]}>
            <Text style={{ color: C.gold, fontSize: 9 }}>✦</Text>
            <Text style={[s.label, { color: 'rgba(201,169,110,0.6)' }]}>Narrativa Larum · en 3 idiomas</Text>
          </View>
          <View style={[s.border_gold_box, { marginBottom: 20 }]}>
            <Text style={[s.serif_italic, { fontSize: 13, marginBottom: 12 }]}>
              "Hay propiedades que se compran por sus metros cuadrados. Y hay propiedades que se compran por lo que permiten ser. Esta residencia en Villa Morra pertenece a la segunda categoría."
            </Text>
            <View style={s.divider_gold} />
            <Text style={s.body_sm}>
              Redactada en español, inglés y portugués. Optimizada para el perfil de comprador que esta propiedad merece.
            </Text>
          </View>
          {['Portada que detiene el scroll — elegida por impacto, no por orden de toma',
            'Secuencia de imágenes que construye deseo: exterior → vida → espacios íntimos',
            'Copy que activa la decisión emocional antes de la racional',
            'Distribución en 3 idiomas para mercados con capacidad de compra real',
            'Dossier de presentación para compartir con asesores y familia',
          ].map((item, i) => (
            <View key={i} style={[s.row, { gap: 10, marginBottom: 8 }]}>
              <Text style={{ color: C.gold, opacity: 0.6, fontSize: 9, marginTop: 1 }}>✦</Text>
              <Text style={s.body_sm}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
}

// ─── Página 6: El Ecosistema ─────────────────────────────────────────────────
function PageEcosistema({ data }: { data: AuditDataParticular }) {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      {/* Header */}
      <View style={[s.row, { backgroundColor: C.bg2, padding: '24 48', borderBottom: 1, borderColor: C.border, alignItems: 'flex-end', gap: 48 }]}>
        <View style={{ flex: 1 }}>
          <SectionNumber n="05" />
          <Text style={s.serif_xl}>El ecosistema{'\n'}completo.</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[s.body, { maxWidth: 340 }]}>
            No es fotografía. Es la infraestructura visual completa que convierte una propiedad estancada en un activo con demanda internacional activa — sin agencia, sin comisión, sin ceder precio.
          </Text>
        </View>
      </View>

      {/* Grid 3x2 */}
      <View style={[s.row, { flex: 1, backgroundColor: C.bg3 }]}>
        {data.ecosistema.map((item, i) => (
          <View key={i} style={[s.third, {
            padding: '24 22',
            borderRight: i % 3 !== 2 ? 1 : 0,
            borderBottom: i < 3 ? 1 : 0,
            borderColor: C.border,
          }]}>
            <View style={[s.row, { justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }]}>
              <View style={{ width: 20, height: 1, backgroundColor: C.gold, opacity: 0.4, marginTop: 8 }} />
              <Text style={[s.serif_gold_lg, { opacity: 0.55, fontSize: 32 }]}>{item.numero}</Text>
            </View>
            <Text style={[s.body, { fontWeight: 500, marginBottom: 8, fontSize: 11 }]}>{item.titulo}</Text>
            <Text style={[s.body_sm, { lineHeight: 1.65 }]}>{item.descripcion}</Text>
          </View>
        ))}
      </View>

      {/* Footer resultado */}
      <View style={[s.row, { borderTop: 1, borderColor: C.border, height: 90 }]}>
        <View style={[s.half, { position: 'relative', overflow: 'hidden' }]}>
          {(data as any)._pdfExtras?.ecosistemaImg && (
            <Image src={(data as any)._pdfExtras.ecosistemaImg}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          )}
          <View style={{ position: 'absolute', bottom: 16, left: 32 }}>
            <Text style={s.serif_gold_lg}>{data.conLarum.diasEstimados} días</Text>
            <Text style={[s.caption, { color: 'rgba(201,169,110,0.55)', marginTop: 4 }]}>Estimado con ecosistema completo</Text>
          </View>
        </View>
        <View style={[s.half, { backgroundColor: C.bg2, padding: '16 48', justifyContent: 'center', gap: 10 }]}>
          {[
            { v: `${data.conLarum.diasEstimados} días`, l: 'Tiempo estimado en mercado' },
            { v: data.conLarum.estado, l: 'Estado objetivo' },
            { v: 'Brasil · Argentina · Europa', l: 'Mercados activos' },
          ].map((s2, i) => (
            <View key={i} style={[{ flexDirection: 'row', justifyContent: 'space-between', borderBottom: 1, borderColor: 'rgba(245,241,234,0.05)', paddingBottom: 6 }]}>
              <Text style={[s.body_sm, { fontSize: 9 }]}>{s2.l}</Text>
              <Text style={[s.serif_sm, { color: C.gold, fontSize: 14 }]}>{s2.v}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
}

// ─── Página 7: La Cuenta ────────────────────────────────────────────────────
function PageCuenta({ data }: { data: AuditDataParticular }) {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={[s.row, { height: '100%' }]}>
        {/* Izquierda */}
        <View style={[s.half, { backgroundColor: C.bg2, padding: 48, borderRight: 1, borderColor: C.border }]}>
          <SectionNumber n="06" />
          <Text style={[s.serif_xl, { marginBottom: 20 }]}>La cuenta{'\n'}final.</Text>
          <Text style={[s.body_sm, { marginBottom: 32 }]}>{data.caso.titulo} · {data.caso.precioFormato} · Villa Morra, Asunción</Text>
          {[
            { label: 'Comisión si vende con agencia (5%)', value: `USD ${data.financiero.comisionAgencia.toLocaleString()}`, sub: 'Sale íntegro de tu patrimonio. Sin garantía de presentación superior.', color: C.red },
            { label: 'Inversión con Larum — ecosistema completo', value: `USD ${data.financiero.inversionLarum.toLocaleString()}`, sub: 'Fotografía · Video · 3 reels · Landing · Dossier · Narrativa en 3 idiomas.', color: C.creamFade },
            { label: 'Diferencia que permanece en tu patrimonio', value: `USD ${data.financiero.ahorroNeto.toLocaleString()}`, sub: 'El coste de una intervención estratégica frente al coste de ceder la venta.', color: C.gold },
          ].map((row, i) => (
            <View key={i} style={{ paddingVertical: 16, borderBottom: 1, borderColor: 'rgba(245,241,234,0.06)' }}>
              <Text style={[s.body_sm, { marginBottom: 6 }]}>{row.label}</Text>
              <Text style={[s.serif_lg, { color: row.color, marginBottom: 4 }]}>{row.value}</Text>
              <Text style={s.body_sm}>{row.sub}</Text>
            </View>
          ))}
        </View>

        {/* Derecha */}
        <View style={[s.half, { backgroundColor: C.bg3, padding: 48, justifyContent: 'space-between' }]}>
          <View>
            <View style={{ height: 40 }} />
            <View style={[s.border_gold_box, { marginBottom: 32 }]}>
              <Text style={[s.label, { marginBottom: 12 }]}>La decisión en un número</Text>
              <Text style={[s.serif_gold_xl, { marginBottom: 8 }]}>USD {data.financiero.inversionLarum.toLocaleString()}</Text>
              <Text style={s.body_sm}>
                Por USD {data.financiero.inversionLarum.toLocaleString()} tienes el ecosistema visual completo que una agencia de primer nivel usaría para defender el precio de tu propiedad — y cobrar USD {data.financiero.comisionAgencia.toLocaleString()} por ello.
              </Text>
            </View>
            {/* Barras comparativas */}
            <View style={{ gap: 16 }}>
              <View>
                <View style={[s.row, { justifyContent: 'space-between', marginBottom: 6 }]}>
                  <Text style={s.caption}>Comisión de agencia</Text>
                  <Text style={[s.serif_sm, { color: C.creamFade }]}>USD {data.financiero.comisionAgencia.toLocaleString()}</Text>
                </View>
                <View style={{ height: 4, backgroundColor: 'rgba(245,241,234,0.06)', borderRadius: 2 }}>
                  <View style={{ height: 4, width: '100%', backgroundColor: 'rgba(245,100,100,0.3)', borderRadius: 2 }} />
                </View>
              </View>
              <View>
                <View style={[s.row, { justifyContent: 'space-between', marginBottom: 6 }]}>
                  <Text style={[s.caption, { color: 'rgba(201,169,110,0.6)' }]}>Inversión Larum</Text>
                  <Text style={[s.serif_sm, { color: C.gold }]}>USD {data.financiero.inversionLarum.toLocaleString()}</Text>
                </View>
                <View style={{ height: 4, backgroundColor: 'rgba(245,241,234,0.06)', borderRadius: 2 }}>
                  <View style={{ height: 4, width: `${(data.financiero.inversionLarum / data.financiero.comisionAgencia) * 100}%`, backgroundColor: C.gold, borderRadius: 2, opacity: 0.7 }} />
                </View>
              </View>
            </View>
          </View>
          <View style={{ borderLeft: 2, borderColor: 'rgba(201,169,110,0.25)', paddingLeft: 20 }}>
            <Text style={s.serif_italic}>
              "Bajaste USD {data.situacion.bajadaPrecio.toLocaleString()} del precio. Larum cuesta USD {data.financiero.inversionLarum.toLocaleString()}. La presentación correcta habría evitado la primera cifra."
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

// ─── Página 8: Cierre ────────────────────────────────────────────────────────
function PageCierre({ data }: { data: AuditDataParticular }) {
  const espacios = [
    { titulo: 'Zona de bienestar', detalle: 'Piscina 40m², sauna, jacuzzi, hidromasaje — fotografiados como resort privado, no como extras.' },
    { titulo: 'Quincho climatizado', detalle: 'Un espacio de entretenimiento amoblado que comunica estilo de vida, no solo metros cubiertos.' },
    { titulo: 'Gym con acceso a balcón', detalle: 'La conexión interior-exterior es un activo premium — hay que mostrarlo, no mencionarlo.' },
    { titulo: 'Jardín y privacidad', detalle: '905 m² en Villa Morra es escasez real. La amplitud y el verde hay que convertirlos en protagonistas.' },
    { titulo: 'Orden narrativo de imágenes', detalle: 'La portada detiene el scroll. La secuencia construye deseo. El cierre activa la llamada.' },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={[s.row, { flex: 1 }]}>
        {/* Izquierda — el potencial */}
        <View style={[s.half, { backgroundColor: C.bg2, padding: 48, borderRight: 1, borderColor: C.border, justifyContent: 'space-between' }]}>
          <View>
            <Text style={[s.label, { marginBottom: 8 }]}>Lo que esta propiedad puede comunicar</Text>
            <Text style={[s.serif_lg, { marginBottom: 16 }]}>Esta propiedad{'\n'}no se ha mostrado{'\n'}en serio todavía.</Text>
            <View style={s.divider_gold} />
            <Text style={[s.body, { maxWidth: 300, marginBottom: 16 }]}>
              La piscina de 40 m², el sauna, el jacuzzi, el quincho climatizado, el gym con salida a balcón — ninguno de estos espacios aparece en el listing actual. Son exactamente los elementos que activan al comprador de alto patrimonio.
            </Text>
            <View style={{ gap: 10 }}>
              {espacios.map((e, i) => (
                <View key={i} style={[s.row, { gap: 12, paddingBottom: 10, borderBottom: i < 4 ? 1 : 0, borderColor: 'rgba(245,241,234,0.06)' }]}>
                  <Text style={{ color: C.gold, fontSize: 8, marginTop: 2 }}>✦</Text>
                  <View>
                    <Text style={[s.body, { fontWeight: 500, fontSize: 10, marginBottom: 2 }]}>{e.titulo}</Text>
                    <Text style={s.body_sm}>{e.detalle}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Derecha — CTA + firma */}
        <View style={[s.half, { backgroundColor: C.bg, padding: 48, justifyContent: 'space-between' }]}>
          <View>
            <View style={{ border: 1, borderColor: 'rgba(201,169,110,0.3)', padding: '5 12', marginBottom: 16, alignSelf: 'flex-start' }}>
              <Text style={s.label}>{data.cta.titulo}</Text>
            </View>
            <Text style={[s.serif_lg, { marginBottom: 12 }]}>Analizamos tu propiedad.{'\n'}Te decimos exactamente{'\n'}qué está frenando la venta.</Text>
            <Text style={[s.body_sm, { maxWidth: 280, marginBottom: 16 }]}>{data.cta.descripcion}</Text>
            {data.cta.garantias.map((g, i) => (
              <View key={i} style={[s.row, { gap: 8, marginBottom: 6, alignItems: 'center' }]}>
                <Text style={{ color: C.gold, fontSize: 8 }}>✦</Text>
                <Text style={s.body_sm}>{g}</Text>
              </View>
            ))}
            <View style={[s.border_gold_box, { marginTop: 16 }]}>
              <Text style={[s.label, { marginBottom: 6 }]}>Ecosistema completo · Inversión única</Text>
              <Text style={[s.serif_gold_lg, { marginBottom: 6, fontSize: 28 }]}>USD {data.financiero.inversionLarum.toLocaleString()}</Text>
              <Text style={s.body_sm}>Fotografía editorial · Vídeo · 3 reels · Landing exclusiva · Dossier · Narrativa en 3 idiomas.{'\n'}Sin comisión. Sin porcentaje sobre la venta.</Text>
            </View>
          </View>

          {/* Firma */}
          <View>
            <View style={s.divider} />
            <View style={[s.row, { gap: 16, alignItems: 'flex-start', marginBottom: 20 }]}>
              {(data as any)._pdfExtras?.firmaImg && (
                <Image
                  src={(data as any)._pdfExtras.firmaImg}
                  style={{ width: 52, height: 52, borderRadius: 26, border: 1, borderColor: 'rgba(201,169,110,0.3)' }}
                />
              )}
              <View>
                <Text style={[s.serif_sm, { fontSize: 15, marginBottom: 2 }]}>Jennifer González</Text>
                <Text style={[s.label, { marginBottom: 6, color: 'rgba(201,169,110,0.7)' }]}>Fundadora · Larum Studio</Text>
                <Text style={[s.body_sm, { maxWidth: 220 }]}>Especialista en reposicionamiento de valor percibido inmobiliario.</Text>
              </View>
            </View>
            <View style={[s.row, { justifyContent: 'space-between', alignItems: 'flex-end' }]}>
              <View>
                <Text style={[s.serif_sm, { fontStyle: 'italic', color: 'rgba(245,241,234,0.4)', fontSize: 18, marginBottom: 2 }]}>Larum Studio</Text>
                <Text style={[s.caption, { color: 'rgba(245,241,234,0.2)' }]}>Ingeniería de percepción · Real estate premium</Text>
              </View>
              <Text style={[s.caption, { color: 'rgba(245,241,234,0.2)' }]}>LARUMSTUDIO.COM</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}

// ─── Documento principal ─────────────────────────────────────────────────────
export function AuditoriaPDFDocument({ data }: { data: AuditDataParticular }) {
  return (
    <Document
      title={`Análisis de Percepción — ${data.propietario.nombre} — Larum Studio`}
      author="Larum Studio"
      creator="Larum Studio"
    >
      <PageCover data={data} />
      <PageDiagnostico data={data} />
      <PageAntesYDespues data={data} />
      <PageCoste data={data} />
      <PageNarrativa data={data} />
      <PageEcosistema data={data} />
      <PageCuenta data={data} />
      <PageCierre data={data} />
    </Document>
  );
}
