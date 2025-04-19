# Planetário - Explorador Espacial

**Planetário** é uma aplicação interativa que permite explorar dados e imagens espaciais diretamente da API pública da NASA. O projeto vai além de uma simples galeria, oferecendo uma experiência rica, informativa e visualmente imersiva sobre o universo.

🌍 **Acesse o projeto:** [planetario](https://planetario.vercel.app)

## Funcionalidades

- **Página de Exploração:** Visualização de imagens do espaço capturadas por sondas e rovers da NASA.
- **Página Sobre:** Explica o propósito do projeto, o uso da API e como os dados são organizados.
- **Design responsivo e imersivo:** Interface moderna com background animado de estrelas e layout adaptado para todos os dispositivos.
- **Consumo de múltiplos endpoints:** Utiliza diferentes recursos da NASA API para fornecer conteúdo atualizado e variado.

## Endpoints Utilizados (NASA API)

### 📷 Astronomy & Imagens

- **APOD - Astronomy Picture of the Day**  
  `GET https://api.nasa.gov/planetary/apod`  
  Retorna a imagem astronômica do dia com título, explicação e créditos.

- **Mars Rover Photos**  
  `GET https://api.nasa.gov/mars-photos/api/v1/rovers/:rover/photos`  
  Imagens capturadas pelos rovers Curiosity, Opportunity e Spirit.

- **EPIC - Earth Polychromatic Imaging Camera**  
  `GET https://api.nasa.gov/EPIC/api/natural`  
  Imagens da Terra em alta resolução tiradas pelo satélite DSCOVR.

---

### 🌌 Dados Astronômicos & Missões

- **DONKI - Space Weather Database Of Notifications, Knowledge, Information**  
  `GET https://api.nasa.gov/DONKI/`  
  Dados sobre eventos solares como CMEs, flares, tempestades geomagnéticas etc.

- **NeoWs - Near Earth Object Web Service**  
  `GET https://api.nasa.gov/neo/rest/v1/feed`  
  Objetos próximos da Terra (asteroides), com órbitas, diâmetro e aproximação.

- **TechTransfer - Patentes e tecnologias espaciais**  
  `GET https://api.nasa.gov/techtransfer/patent/`  
  Lista de tecnologias e patentes públicas desenvolvidas pela NASA.

- **Exoplanet Archive**  
  `GET https://exoplanetarchive.ipac.caltech.edu/TAP/sync`  
  (Não requer `api_key`) Banco de dados de planetas fora do sistema solar.

---

### 🌍 Dados da Terra

- **Earth Assets**  
  `GET https://api.nasa.gov/planetary/earth/assets`  
  Retorna imagens de satélite para uma localização e data específicas.

- **Earth Imagery**  
  `GET https://api.nasa.gov/planetary/earth/imagery`  
  Imagens do Landsat 8 com base em coordenadas e datas específicas.

---

O **Planetário** foi criado com foco na acessibilidade do conhecimento científico, tornando dados astronômicos disponíveis de forma simples e envolvente para qualquer pessoa. Além de servir como vitrine para uso de tecnologias modernas, o projeto reforça o potencial de APIs públicas em aplicações reais.

> ℹ️ Todo o conteúdo do projeto está atualmente em **inglês**, pois os dados da API da NASA são fornecidos nesse idioma. No entanto, pretendo oferecer traduções para os dados e descrições em breve.
