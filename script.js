document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const initialMessage = document.querySelector('.initial-message');

    // Show the chat modal and trigger chat form on button click
    chatButton.addEventListener('click', () => {
        chatModal.style.display = 'block';
        initialMessage.style.display = 'none';
        chatForm.style.display = 'block';
    });

    // Close chat modal and reset form when 'close' is clicked
    closeChat.addEventListener('click', () => {
        chatModal.style.display = 'none';
        chatForm.style.display = 'none';
        initialMessage.style.display = 'block';
    });
});