document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-btn');
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    const videoPlayer = document.getElementById('videoPlayer');
  
    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video');
        videoPlayer.src = videoUrl;
        videoModal.show();
      });
    });
  
    videoModal._element.addEventListener('hidden.bs.modal', () => {
      videoPlayer.src = '';
    });
  });