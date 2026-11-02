* { box-sizing: border-box; }
:root {
  --bg: #eff7f4;
  --panel: #ffffff;
  --ink: #12352f;
  --muted: #53756e;
  --line: #dfece8;
  --green: #0d6b55;
  --green-deep: #0a533f;
  --green-light: #e7f6f1;
  --teal: #76cfc2;
  --coral: #ef8b5d;
  --gold: #d9a63c;
  --shadow: 0 18px 40px rgba(13, 107, 85, 0.10);
}
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'DM Sans', 'Noto Sans Gujarati', sans-serif;
  background: linear-gradient(180deg, #f7fbf9 0%, var(--bg) 100%);
  color: var(--ink);
}
a { text-decoration: none; }
button, select { font: inherit; }

.topbar {
  max-width: 1180px;
  margin: 0 auto;
  padding: 18px 24px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-badge {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green), #1f8f73);
  color: white;
  font-size: 24px;
  box-shadow: var(--shadow);
}
.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.brand-text small {
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
}
.toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 8px 12px;
}
.toolbar-label {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
select {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--ink);
  border-radius: 10px;
  padding: 8px 10px;
}

main {
  max-width: 1180px;
  margin: 0 auto;
  padding: 8px 24px 32px;
}
.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
  padding: 32px 22px 26px;
  background: linear-gradient(135deg, #ecf8f4 0%, #e8f3ee 100%);
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.hero-copy { padding: 12px 6px; }
.eyebrow {
  margin: 0 0 16px;
  color: var(--green);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.eyebrow.muted { color: #6a8883; }
.eyebrow.light { color: #c7dfd7; }
.hero h1 {
  margin: 0 0 16px;
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}
.lead {
  margin: 0 0 22px;
  max-width: 580px;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--muted);
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.primary-btn, .secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.primary-btn {
  background: var(--green);
  color: white;
  box-shadow: 0 12px 24px rgba(13, 107, 85, 0.20);
}
.secondary-btn {
  background: transparent;
  color: var(--green);
  border: 1px solid rgba(13, 107, 85, 0.18);
}
.primary-btn:hover, .secondary-btn:hover, .quiz-option:hover, .resource-card:hover { transform: translateY(-2px); }

.hero-visual {
  position: relative;
  min-height: 260px;
  display: grid;
  place-items: center;
}
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(13, 107, 85, 0.22);
}
.ring-a { width: 260px; height: 260px; }
.ring-b { width: 180px; height: 180px; }
.orb {
  position: relative;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 32px;
  background: linear-gradient(135deg, #fff, #e8f7f3);
  font-size: 52px;
  color: var(--green);
  box-shadow: 0 16px 30px rgba(13, 107, 85, 0.12);
  z-index: 2;
}
.pulse {
  position: absolute;
  border-radius: 50%;
  background: rgba(118, 207, 194, 0.18);
}
.pulse-a { width: 180px; height: 180px; }
.pulse-b { width: 220px; height: 220px; }

.notice {
  margin-top: 18px;
  padding: 16px 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid #efd9a8;
  background: #fffaf0;
}
.notice p {
  margin: 0;
  color: #6a4f1d;
  line-height: 1.6;
  font-size: 0.93rem;
}
.notice-icon {
  font-size: 20px;
  color: #ba7c10;
}

.stats {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
.stat-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 10px 20px rgba(18, 53, 47, 0.04);
}
.stat-card strong {
  color: var(--green);
  font-size: 2rem;
  line-height: 1;
}
.stat-card span {
  font-size: 0.9rem;
  color: var(--muted);
}

.section {
  margin-top: 54px;
}
.section-head {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.section-head h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  letter-spacing: -0.04em;
}
.section-index {
  font-weight: 700;
  color: #9eb5af;
  letter-spacing: 0.12em;
}
.resource-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.resource-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 185px;
  padding: 22px 20px 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 14px 24px rgba(18, 53, 47, 0.03);
  color: var(--ink);
}
.resource-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  font-size: 22px;
  margin-bottom: 20px;
}
.teal { background: #e8faf4; color: var(--green); }
.coral { background: #fff1eb; color: #cf704b; }
.gold { background: #fff8e6; color: #b8841b; }
.resource-title {
  margin-bottom: 8px;
  font-size: 1.12rem;
  font-weight: 700;
}
.resource-desc {
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
  max-width: 300px;
}
.external {
  position: absolute;
  top: 20px;
  right: 18px;
  color: #8fa39d;
  font-size: 1rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.info-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 20px;
}
.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.12rem;
}
.info-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.92rem;
}

.vaccine-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}
.vaccine-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 18px 20px;
  box-shadow: 0 12px 20px rgba(18, 53, 47, 0.03);
}
.pill {
  display: inline-block;
  background: var(--green-light);
  color: var(--green);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 6px 10px;
}
.vaccine-card h3 {
  margin: 16px 0 8px;
  font-size: 1.08rem;
}
.vaccine-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.88rem;
}

.two-col {
  display: grid;
  grid-template-columns: 1.18fr 0.82fr;
  gap: 22px;
  align-items: start;
}
.left-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 18px 16px;
}
.no-gap { margin-bottom: 12px; }
.checklist {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 8px;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
}
.check-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  padding: 14px 16px;
  min-height: 56px;
  border-bottom: 1px solid #edf2f0;
  cursor: pointer;
  color: var(--ink);
  font-size: 0.93rem;
}
.check-item:last-child { border-bottom: 0; }
.check-item input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
.check-mark {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1.6px solid #c7d5d0;
  background: #fff;
  display: inline-block;
  position: relative;
  flex-shrink: 0;
}
.check-item input:checked + .check-mark {
  background: var(--green);
  border-color: var(--green);
}
.check-item input:checked + .check-mark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  color: white;
  font-size: 12px;
  font-weight: 700;
}
.check-item input:checked ~ span:last-child {
  text-decoration: line-through;
  color: #789089;
}
.reset-btn {
  margin-top: 14px;
  background: transparent;
  border: 0;
  color: var(--green);
  cursor: pointer;
  font-weight: 700;
  padding: 0;
}
.memory-box {
  background: linear-gradient(180deg, #0e4038, #133b34);
  border-radius: 20px;
  color: white;
  padding: 24px 18px 18px;
  box-shadow: var(--shadow);
}
.memory-badge { font-size: 24px; }
.memory-box h3 {
  margin: 10px 0 18px;
  font-size: 1.55rem;
  letter-spacing: -0.04em;
}
.memory-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid rgba(255,255,255,0.12);
  color: #eaf8f5;
  font-size: 0.9rem;
}
.memory-step b {
  color: #b9dccd;
  min-width: 28px;
}
.memory-foot {
  margin-top: 18px;
  color: #d1e0dc;
  font-size: 0.78rem;
  line-height: 1.6;
}

.quiz-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: center;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 20px;
}
.quiz-box h2 {
  margin: 0 0 10px;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  letter-spacing: -0.04em;
}
.quiz-q {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}
.quiz-options {
  display: grid;
  gap: 10px;
}
.quiz-option {
  width: 100%;
  text-align: left;
  background: white;
  border: 1px solid var(--line);
  padding: 12px 14px;
  border-radius: 12px;
  color: var(--ink);
  cursor: pointer;
  transition: all 180ms ease;
}
.quiz-option.correct {
  background: #ecf9f2;
  border-color: #82c6a0;
  color: #0e5f45;
}
.quiz-option.wrong {
  background: #fff3f2;
  border-color: #efb0a6;
  color: #7d433a;
}
.quiz-feedback {
  min-height: 20px;
  margin: 0;
  color: var(--green);
  font-size: 0.82rem;
  font-weight: 700;
}

footer {
  margin-top: 34px;
  padding: 18px 8px 28px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.6;
}
footer span:first-child {
  color: var(--ink);
  font-weight: 700;
}

@media (max-width: 900px) {
  .resource-grid, .overview-grid, .vaccine-grid, .stats { grid-template-columns: 1fr 1fr; }
  .hero { grid-template-columns: 1fr; }
  .hero-visual { min-height: 200px; }
  .two-col { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .topbar { padding-left: 16px; padding-right: 16px; }
  .toolbar-label { display: none; }
  main { padding-left: 16px; padding-right: 16px; }
  .hero { padding: 22px 16px; }
  .stats, .resource-grid, .overview-grid, .vaccine-grid, .quiz-box { grid-template-columns: 1fr; }
  footer { flex-direction: column; }
  .hero-actions { flex-direction: column; }
  .primary-btn, .secondary-btn { width: 100%; }
}
