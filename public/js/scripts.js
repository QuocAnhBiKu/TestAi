window.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const textarea = document.getElementById('username');

    // Submit form handler
    userForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        
        const question = textarea.value.trim(); // Lấy nội dung từ textarea và loại bỏ khoảng trắng ở đầu và cuối

        // Gửi yêu cầu HTTP POST đến máy chủ
        fetch('https://us-central1-testai3.cloudfunctions.net/app/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Question submitted successfully');
            // Xử lý phản hồi từ máy chủ (nếu cần)
        })
        .catch(error => {
            console.error('Error submitting question:', error);
            // Xử lý lỗi (nếu cần)
        });

        // Xóa nội dung trong textarea sau khi submit
        textarea.value = '';
    });
});
