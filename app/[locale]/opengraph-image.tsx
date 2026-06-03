import { ImageResponse } from 'next/og';

export const alt = 'José Fernando García Pérez — Geospatial Data Engineer & Data Analyst';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: 64,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: '#0A0A0A',
            }}
          >
            JG
          </div>
          <span style={{ fontSize: 22, color: '#A8A29E', fontWeight: 500 }}>
            Open to remote · USD/EUR
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              maxWidth: 900,
            }}
          >
            Senior Geospatial Data Engineer
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: '#3B5BDB', lineHeight: 1.1 }}>
            & Data Analyst
          </div>
          <div style={{ fontSize: 24, color: '#A8A29E', marginTop: 24, maxWidth: 800 }}>
            20+ yrs GIS · 6+ yrs analytics · 12+ live Power BI · Production RAG
          </div>
        </div>
        <div style={{ fontSize: 20, color: '#57534E' }}>jfgarci206@gmail.com · Medellín, Colombia</div>
      </div>
    ),
    { ...size },
  );
}
