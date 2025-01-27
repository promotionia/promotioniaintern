self.addEventListener('push', event => {
    const data = event.data.json();
    console.log('Push received:', data);
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png', // Replace with your actual icon
    });
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Optionally: Handle notification click (e.g., open a URL)
  });
  
