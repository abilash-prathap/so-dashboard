const stats = [
  { label: 'Open cases', value: 124, delta: '+12.5%', direction: 'up', icon: '📩', tone: 'blue' },
  { label: 'Resolved', value: 89, delta: '+8.1%', direction: 'up', icon: '✅', tone: 'green' },
  { label: 'Avg. response', value: '2.4h', delta: '-0.8h', direction: 'down', icon: '⏱️', tone: 'orange' },
  { label: 'Escalations', value: 17, delta: '-3.2%', direction: 'down', icon: '⚠️', tone: 'red' }
];

const requests = [
  { name: 'Login loop after password reset', owner: 'Ava', status: 'Open', priority: 'High', updated: '10 min ago' },
  { name: 'CSV export timing out', owner: 'Milo', status: 'Review', priority: 'Medium', updated: '31 min ago' },
  { name: 'Dashboard filter not persisting', owner: 'Nia', status: 'Open', priority: 'High', updated: '48 min ago' },
  { name: 'Webhook retries not firing', owner: 'Theo', status: 'Closed', priority: 'Low', updated: '2 hrs ago' }
];

const tags = ['Authentication', 'Billing', 'Integrations', 'Search', 'Reports', 'API', 'SSO', 'UX'];

const activities = [
  { title: 'Database patch released', detail: 'Stability update pushed to the customer-facing environment.', time: '12 min ago' },
  { title: 'New escalation queue', detail: 'Priority tickets were reassigned to the support rotation.', time: '39 min ago' },
  { title: 'Customer health check passed', detail: 'No impact detected across key service metrics.', time: '1 hr ago' }
];

const teamLoad = [
  { name: 'Tier 1', value: 72 },
  { name: 'Tier 2', value: 58 },
  { name: 'Data', value: 36 },
  { name: 'QA', value: 48 }
];

const statsGrid = document.getElementById('statsGrid');
const requestsTable = document.getElementById('requestsTable');
const tagsList = document.getElementById('tagsList');
const activityList = document.getElementById('activityList');
const teamLoadContainer = document.getElementById('teamLoad');

function renderStats() {
  statsGrid.innerHTML = stats.map((stat) => `
    <article class="stat-card">
      <div class="stat-top">
        <p class="eyebrow">${stat.label}</p>
        <span class="stat-icon ${stat.tone}">${stat.icon}</span>
      </div>
      <p class="stat-value">${stat.value}</p>
      <div class="stat-meta">
        <span class="delta ${stat.direction === 'up' ? 'up' : 'down'}">
          ${stat.direction === 'up' ? '▲' : '▼'} ${stat.delta}
        </span>
        <span>vs last week</span>
      </div>
    </article>
  `).join('');
}

function renderRequests() {
  requestsTable.innerHTML = requests.map((item) => `
    <tr>
      <td><span class="request-name">${item.name}</span></td>
      <td>${item.owner}</td>
      <td><span class="status-pill ${item.status.toLowerCase() === 'open' ? 'open' : item.status.toLowerCase() === 'review' ? 'review' : 'closed'}">${item.status}</span></td>
      <td><span class="priority-pill ${item.priority.toLowerCase()}">${item.priority}</span></td>
      <td>${item.updated}</td>
    </tr>
  `).join('');
}

function renderTags() {
  tagsList.innerHTML = tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
}

function renderActivities() {
  activityList.innerHTML = activities.map((item) => `
    <li class="activity-item">
      <span class="activity-dot"></span>
      <div class="activity-text">
        <strong>${item.title}</strong>
        <span>${item.detail}</span>
      </div>
      <span class="activity-time">${item.time}</span>
    </li>
  `).join('');
}

function renderTeamLoad() {
  teamLoadContainer.innerHTML = teamLoad.map((member) => `
    <div class="load-row">
      <strong>${member.name}</strong>
      <div class="load-bar">
        <span class="load-fill" style="width: ${member.value}%"></span>
      </div>
      <span>${member.value}%</span>
    </div>
  `).join('');
}

renderStats();
renderRequests();
renderTags();
renderActivities();
renderTeamLoad();
