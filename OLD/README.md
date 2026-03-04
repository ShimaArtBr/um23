# UM23 — Numerologia Pitagórica

Mapa numerológico pitagórico completo em português e inglês.  
Single-page app · zero dependências · offline-ready como PWA.

---

## O que é

UM23 calcula seu mapa numerológico baseado no nome completo e data de nascimento, seguindo o método pitagórico clássico.

**Números principais calculados:**
- Motivação (consonantes)
- Impressão (vogais)
- Expressão (todas as letras)
- Caminho de Vida (data completa)
- Número do Dia (dia isolado)
- Atitude (mês + dia)
- Poder (ano de nascimento)
- Equilíbrio (expressão + caminho)

**Números especiais detectados:**
- **Mestres**: 11, 22, 33 (destacados em ouro)
- **Kármicos**: 13, 14, 16, 19 (com explicação de lição)

---

## 6 Abas de Resultados

| Aba | Conteúdo |
|-----|----------|
| **IDENTIDADE** | Motivação, Impressão, Expressão, Caminho de Vida, Dia, Atitude, Poder |
| **JORNADA** | Ciclos (C1/C2/C3), Pínáculos (P1–P4), Desafios |
| **PRESENTE** | Ano Pessoal, Trimestres, Projeção 9 anos |
| **PADRÕES** | Planos de Expressão, Elementos, Tabela Pitagórica |
| **COMPLEMENTAR** | Rational Thought, Subconscious, Hidden Passion, Bridges |
| **PREVISÕES** | Personal Year, Month, Day calculations |

---

## Estrutura de Arquivos

```
um23/
├── index.html         ~141 KB   app completo (single-file)
├── manifest.json      ~500 B    PWA manifest
├── sw.js              ~2.4 KB   Service Worker cache-first
├── icon-192.png                 ícone PWA 192×192
├── icon-512.png                 ícone PWA 512×512
└── README.md
```

---

## Design System

**Filosofia**: SOLLUN — quiet luxury digital  
**Slogan**: feito com tempo

**Cores** (Dark Mode padrão):
- Fundo: `#0b0a0a` (warm charcoal)
- Texto: `#e8e5e0` (branco-lã)
- Destaque: `#c9a84c` (dourado)

**Light Mode**:
- Fundo: `#f5f2ea` (papel algodão)
- Texto: `#1a1814` (preto-grafite)
- Destaque: `#c9a84c` (dourado)

---

## Deploy — Cloudflare Pages

```bash
git init
git add .
git commit -m "UM23 — numerologia pitagórica"
git remote add origin https://github.com/SEU_USER/um23.git
git push -u origin main
```

No Cloudflare Pages:
1. **Create project** → conectar repo
2. **Build command**: (deixar vazio)
3. **Output directory**: `/`

---

## Localização

- 🇧🇷 Português (padrão)
- 🇺🇸 English (automático por navegador)

---

## Acessibilidade

- WCAG AA+ em ambos os temas
- Focus visible em todos interativos
- Respeita `prefers-reduced-motion`
- Sem bold (font-weight 400 apenas)

---

## Créditos

Feito com ❤️ por **SOLLUN**

Textos baseados em literatura de domínio público:
- Balliett, L. D. (1908) — *The Philosophy of Numbers*
- Campbell, F. (1931) — *Your Days are Numbered*
- Sepharial (1913) — *The Kabala of Numbers*
- Kozminsky, I. (1912) — *Numbers, their Meaning and Magic*

---

## Uso Local

```bash
python3 -m http.server 8000
# Abra http://localhost:8000
```

---

**UM23 · feito com tempo** ✨∞
