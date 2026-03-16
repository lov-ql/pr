function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-white font-medium ${
      type === 'error' ? 'bg-red-600' : 'bg-green-600'
    } shadow-2xl`;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3200);
  }
  
  function getCurrentUser() {
    const data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null;
  }
  
  function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
    showToast('Вы вышли из системы');
    setTimeout(() => location.href = 'index.html', 1200);
  }
  
  function getOrganizations() {
    return JSON.parse(localStorage.getItem('orgs') || '[]');
  }
  
  function saveOrganizations(orgs) {
    localStorage.setItem('orgs', JSON.stringify(orgs));
  }
  
  function getDepartments(orgId) {
    const all = JSON.parse(localStorage.getItem('departments') || '{}');
    return all[orgId] || [];
  }
  
  function saveDepartments(orgId, deps) {
    const all = JSON.parse(localStorage.getItem('departments') || '{}');
    all[orgId] = deps;
    localStorage.setItem('departments', JSON.stringify(all));
  }
  
  function getEmployees(orgId) {
    const all = JSON.parse(localStorage.getItem('employees') || '{}');
    return all[orgId] || [];
  }
  
  function saveEmployees(orgId, emps) {
    const all = JSON.parse(localStorage.getItem('employees') || '{}');
    all[orgId] = emps;
    localStorage.setItem('employees', JSON.stringify(all));
  }
  
  function getDocuments() {
    return JSON.parse(localStorage.getItem('documents') || '[]');
  }
  
  function saveDocuments(docs) {
    localStorage.setItem('documents', JSON.stringify(docs));
  }
  
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const user = getCurrentUser();
    if (user) {
      document.querySelectorAll('.current-user').forEach(el => el.textContent = user.phone);
  
      if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });