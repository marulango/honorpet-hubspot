function switchTab(tabId) {
    // Hide all tab contents
  document.querySelectorAll('[data-tab]').forEach(el => el.classList.add('hidden'));

    // Update all tab buttons to inactive state
  document.querySelectorAll('[data-tab-button]').forEach(el => {
    el.classList.remove('bg-blue', 'text-white');
    el.classList.add('bg-blue-300', 'text-blue');
  });

    // Show the selected tab
  document.getElementById(tabId).classList.remove('hidden');

    // Set the clicked tab button to active state
  const activeButton = document.querySelector(`[data-tab-button="${tabId}"]`);
  activeButton.classList.remove('bg-blue-300', 'text-blue');
  activeButton.classList.add('bg-blue', 'text-white');
}