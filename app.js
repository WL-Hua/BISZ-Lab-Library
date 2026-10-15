function renderGradeList() {
  const gradeList = document.querySelector("#grade-list");
  if (!gradeList) return;

  const grades = [...new Set(experiments.map((experiment) => experiment.grade))];
  gradeList.innerHTML = grades.map((grade, index) => {
    const gradeExperiments = experiments.filter((experiment) => experiment.grade === grade);
    return `
      <section class="grade-group">
        <div class="grade-title">
          <span class="grade-number">0${index + 1}</span>
          <h3>${grade}</h3>
          <span class="experiment-count">${gradeExperiments.length} ${gradeExperiments.length === 1 ? "experiment" : "experiments"}</span>
        </div>
        <div class="experiment-grid">
          ${gradeExperiments.map((experiment) => `
            <a class="experiment-card" href="detail.html?id=${encodeURIComponent(experiment.id)}">
              <div class="card-topline"><span>${experiment.subject}</span><span>↗</span></div>
              <h4>${experiment.title}</h4>
              <p>${experiment.summary}</p>
            </a>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function getImageStyle(image) {
  if (!image || typeof image === "string") return "";

  const styles = [];
  if (image.width) styles.push(`width: ${image.width}`);
  if (image.height) styles.push(`height: ${image.height}`);
  if (image.fit) styles.push(`object-fit: ${image.fit}`);
  if (image.position) styles.push(`object-position: ${image.position}`);
  return styles.length ? ` style="${styles.join("; ")}"` : "";
}

function getImageSource(image) {
  return typeof image === "string" ? image : image?.src || "";
}

function renderMaterialsImages(images, title) {
  if (!images) return "";

  const imageList = Array.isArray(images) ? images : [images];
  if (imageList.length === 1 && !imageList[0].caption) {
    const image = imageList[0];
    return `<img class="materials-image" src="${getImageSource(image)}" alt="${image.alt || `${title} materials`}"${getImageStyle(image)}>`;
  }

  return `
    <div class="materials-overview-gallery">
      ${imageList.map((image, index) => `
        <figure>
          <img src="${getImageSource(image)}" alt="${image.alt || `${title} materials ${index + 1}`}"${getImageStyle(image)}>
          ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  `;
}

function renderVideo(video, title) {
  if (!video) return "";

  const source = typeof video === "string" ? video : video.src;
  if (!source) return "";

  const type = typeof video === "string" ? "file" : (video.type || "file");
  const poster = typeof video === "object" && video.poster ? ` poster="${video.poster}"` : "";
  const width = typeof video === "object" && video.width ? ` style="width: min(100%, ${video.width})"` : "";

  if (type === "youtube" || type === "vimeo" || type === "embed") {
    return `<div class="video-frame"${width}><iframe src="${source}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }

  return `<video class="detail-video" controls preload="metadata"${poster}${width}><source src="${source}">Your browser does not support the video tag.</video>`;
}

function renderTextWithBreaks(text) {
  return String(text).replace(/\r?\n/g, "<br>");
}

function renderNote(note) {
  const paragraphs = Array.isArray(note) ? note : [note];
  return paragraphs.map((paragraph) => `<p>${renderTextWithBreaks(paragraph)}</p>`).join("");
}

function renderTable(table) {
  return `<div class="procedure-table-wrapper"><table class="procedure-table">
    <thead><tr>${table.headers.map((header) => `<th scope="col">${header}</th>`).join("")}</tr></thead>
    <tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function renderResultItem(result, title) {
  if (typeof result === "string") return renderTextWithBreaks(result);
  if (!result || typeof result !== "object") return "";

  const text = result.text ? `<p>${renderTextWithBreaks(result.text)}</p>` : "";
  const video = result.video ? renderVideo(result.video, `${title} results video`) : "";
  const image = result.image
    ? `<figure class="result-figure"><img src="${getImageSource(result.image)}" alt="${result.image.alt || `${title} results`}"${getImageStyle(result.image)}>${result.image.caption ? `<figcaption>${result.image.caption}</figcaption>` : ""}</figure>`
    : "";
  const table = result.table ? renderTable(result.table) : "";

  return `${text}${image}${table}${video}`;
}

function renderResults(results, title) {
  if (!results || (Array.isArray(results) && results.length === 0)) return "";

  if (Array.isArray(results)) {
    const content = [];
    const images = [];

    results.forEach((result) => {
      if (result && typeof result === "object" && result.image && !result.text && !result.video) {
        images.push(result.image);
        return;
      }

      content.push(renderResultItem(result, title));
    });

    const gallery = images.length
      ? `<div class="results-gallery">${images.map((image, index) => `
          <figure class="result-figure">
            <img src="${getImageSource(image)}" alt="${image.alt || `${title} result ${index + 1}`}"${getImageStyle(image)}>
            ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}
          </figure>
        `).join("")}</div>`
      : "";

    return `<div class="results-content">${content.join("")}${gallery}</div>`;
  }

  return `<div class="results-content">${renderResultItem(results, title)}</div>`;
}

function renderProcedureStep(step, index, experiment) {
  const stepText = typeof step === "string" ? step : step.text;
  const stepImage = typeof step === "string"
    ? procedureImages[experiment.id]?.[index]
    : step.image;
  const stepVideo = typeof step === "string" ? "" : step.video;
  const stepTable = typeof step === "string" || !step.table
    ? ""
    : renderTable(step.table);
  const stepImageMarkup = stepImage
    ? `<img src="${typeof stepImage === "string" ? stepImage : stepImage.src}" alt="${experiment.title} procedure step ${index + 1}"${getImageStyle(stepImage)}>`
    : "";
  const stepTableAndImage = stepTable && stepImageMarkup
    ? `<div class="procedure-step-media">${stepTable}${stepImageMarkup}</div>`
    : `${stepTable}${stepImageMarkup}`;

  return `
    <li class="procedure-step">
      ${stepText ? `<p>${renderTextWithBreaks(stepText)}</p>` : ""}
      ${stepTableAndImage}
      ${renderVideo(stepVideo, `${experiment.title} procedure step ${index + 1} video`)}
    </li>
  `;
}

function renderProcedure(procedure, experiment) {
  const items = [];
  let currentHeading = "";
  let sectionSteps = [];

  const closeSection = () => {
    if (!currentHeading) return;
    items.push(`
      <li class="procedure-group">
        <strong>${currentHeading}</strong>
        <ol class="procedure-sublist">${sectionSteps.join("")}</ol>
      </li>
    `);
    currentHeading = "";
    sectionSteps = [];
  };

  procedure.forEach((step, index) => {
    if (typeof step === "object" && step.heading) {
      closeSection();
      currentHeading = step.heading;
      return;
    }

    const renderedStep = renderProcedureStep(step, index, experiment);
    if (currentHeading) {
      sectionSteps.push(renderedStep);
    } else {
      items.push(renderedStep);
    }
  });

  closeSection();
  return `<ol class="procedure-list">${items.join("")}</ol>`;
}

function renderExperimentDetail() {
  const detail = document.querySelector("#experiment-detail");
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const experiment = experiments.find((item) => item.id === id);
  document.title = experiment ? `${experiment.title} | BISZ Lab Resources` : "Experiment not found | BISZ Lab Resources";

  if (!experiment) {
    detail.innerHTML = `
      <div class="empty-state">
        <p class="eyebrow">NOT FOUND</p>
        <h1>Experiment not found</h1>
        <p>Return to the experiment list and choose a valid experiment.</p>
        <a class="button button-primary" href="index.html">Back to experiments</a>
      </div>
    `;
    return;
  }

  detail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${experiment.grade} · ${experiment.subject}</p>
      <h1>${experiment.title}</h1>
      <p class="detail-summary">${experiment.summary}</p>
    </div>
    ${experiment.image ? `<img class="detail-image" src="${getImageSource(experiment.image)}" alt="${experiment.title}"${getImageStyle(experiment.image)}>` : ""}
    ${renderVideo(experiment.video, `${experiment.title} video`)}
    <div class="detail-layout">
      <article>
        <section class="detail-section">
          <h2>Objective</h2>
          <p>${experiment.objective}</p>
        </section>
        <section class="detail-section">
          <h2>Materials</h2>
          <ul class="materials-list">${experiment.materials.map((material) => {
            const materialText = typeof material === "string" ? material : material.text;
            const materialImage = typeof material === "string" ? "" : material.image;
            const materialImages = typeof material === "string" ? [] : (material.images || []);
            return `
              <li>
                <p>${materialText}</p>
                ${materialImage ? `<img src="${typeof materialImage === "string" ? materialImage : materialImage.src}" alt="${experiment.title} material: ${materialText}"${getImageStyle(materialImage)}>` : ""}
                ${materialImages.length ? `
                  <div class="material-image-gallery">
                    ${materialImages.map((image, index) => `
                      <figure>
                        <img src="${getImageSource(image)}" alt="${image.alt || `${experiment.title} material ${index + 1}`}"${getImageStyle(image)}>
                        ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}
                      </figure>
                    `).join("")}
                  </div>
                ` : ""}
              </li>
            `;
          }).join("")}</ul>
          ${renderMaterialsImages(experiment.materialsImage, experiment.title)}
        </section>
        <section class="detail-section">
          <h2>Procedure</h2>
          ${experiment.procedureImage ? `<img class="procedure-overview-image" src="${getImageSource(experiment.procedureImage)}" alt="${experiment.title} procedure overview"${getImageStyle(experiment.procedureImage)}>` : ""}
          ${renderProcedure(experiment.procedure, experiment)}
          ${experiment.procedureGallery?.length ? `
            <div class="procedure-gallery">
              ${experiment.procedureGallery.map((image, index) => `
                <img src="${getImageSource(image)}" alt="${image.alt || `${experiment.title} procedure photo ${index + 1}`}"${getImageStyle(image)}>
              `).join("")}
            </div>
          ` : ""}
        </section>
        ${experiment.results ? `
          <section class="detail-section">
            <h2>Results</h2>
            ${renderResults(experiment.results, experiment.title)}
          </section>
        ` : ""}
        <section class="detail-section">
          <h2>Cleaning tips</h2>
          <ul class="cleaning-list">${experiment.cleaningTips.map((tip, index) => {
            if (typeof tip === "string") return `<li>${tip}</li>`;
            return `
              <li>
                ${tip.text ? `<p>${tip.text}</p>` : ""}
                ${tip.image ? `<img src="${getImageSource(tip.image)}" alt="${tip.image.alt || `${experiment.title} cleaning tip ${index + 1}`}"${getImageStyle(tip.image)}>` : ""}
              </li>
            `;
          }).join("")}</ul>
        </section>
      </article>
      <aside>
        <section class="safety-box">
          <h2>Note</h2>
          ${renderNote(experiment.note)}
        </section>
      </aside>
    </div>
  `;
}

renderGradeList();
renderExperimentDetail();
