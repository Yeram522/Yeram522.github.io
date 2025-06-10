// js/projectTemplate.js
export function createProjectDetailHTML(projectData) {
    return `
        <div class="project-detail">
            <div class="project-detail-header">
                <div class="project-meta">
                    <span class="project-detail-period">${projectData.period}</span>
                    <span class="project-detail-team">${projectData.team}</span>
                    <span class="project-detail-role">${projectData.role}</span>
                </div>
            </div>
            
            <div class="project-detail-content">
                <section class="detail-section">
                    <h4>📋 프로젝트 개요</h4>
                    <p>${projectData.overview}</p>
                </section>

                <section class="detail-section">
                    <h4>✨ 주요 기능</h4>
                    <ul>
                        ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </section>

                <section class="detail-section">
                    <h4>🛠 기술 스택</h4>
                    <div class="tech-stack-grid">
                        ${Object.entries(projectData.techStack).map(([category, techs]) => `
                            <div class="tech-category">
                                <h5>${category}</h5>
                                <div class="tech-tags">
                                    ${techs.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="detail-section">
                    <h4>🔥 주요 성과</h4>
                    <ul class="results-list">
                        ${projectData.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </section>

                <section class="detail-section">
                    <h4>🚀 기술적 도전과 해결</h4>
                    <div class="challenges-list">
                        ${projectData.challenges.map(challenge => `
                            <div class="challenge-item">
                                <div class="challenge-problem">
                                    <strong>문제:</strong> ${challenge.problem}
                                </div>
                                <div class="challenge-solution">
                                    <strong>해결:</strong> ${challenge.solution}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="detail-section">
                    <h4>🔗 관련 링크</h4>
                    <div class="project-links-detail">
                        ${projectData.links.github ? `<a href="${projectData.links.github}" target="_blank" class="detail-link github">GitHub</a>` : ''}
                        ${projectData.links.demo ? `<a href="${projectData.links.demo}" target="_blank" class="detail-link demo">Live Demo</a>` : ''}
                        ${projectData.links.notion ? `<a href="${projectData.links.notion}" target="_blank" class="detail-link notion">Notion</a>` : ''}
                    </div>
                </section>
            </div>
        </div>
    `;
}