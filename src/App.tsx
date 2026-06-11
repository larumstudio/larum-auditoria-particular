import auditData from './data/audit-data-particular.json';
import type { AuditDataParticular } from './types';
import Cover from './components/Cover';
import S01ElProblema from './components/S01_ElProblema';
import S02AntesYDespues from './components/S02_AntesYDespues';
import S03CosteDeTiempo from './components/S03_CosteDeTiempo';
import S04LaNarrativa from './components/S04_LaNarrativa';
import S05ElEcosistema from './components/S05_ElEcosistema';
import S06LaCuenta from './components/S06_LaCuenta';
import S07Cierre from './components/S07_Cierre';
import Ases from './components/S_Ases';
import DownloadPDFButton from './components/DownloadPDFButton';

const data = auditData as AuditDataParticular;

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', color: '#f5f1ea', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
      <Cover data={data} />
      <S01ElProblema data={data} />
      <S02AntesYDespues data={data} />
      <S03CosteDeTiempo data={data} />
      <S04LaNarrativa data={data} />
      <S05ElEcosistema data={data} />
      <S06LaCuenta data={data} />
      <Ases data={data} />
      <S07Cierre data={data} />
      <DownloadPDFButton data={data} />
    </div>
  );
}
