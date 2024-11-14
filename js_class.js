document.querySelectorAll('.class-card-1, .class-card-2, .class-card-3, .class-card-4, .class-card-5').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.add('clicked');

        if (this.classList.contains('class-card-1')) {
            window.location.href = 'data_kelas_10TAV1.html';
        } else if (this.classList.contains('class-card-2')) {
            window.location.href = 'data_kelas_10TAV2.html';
        } else if (this.classList.contains('class-card-3')) {
            window.location.href = 'data_kelas_11TAV1.html';
        } else if (this.classList.contains('class-card-4')) {
            window.location.href = 'data_kelas_11TAV2.html';
        } else if (this.classList.contains('class-card-5')) {
            window.location.href = 'data_kelas_12TAV.html';
        }

        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
    });
});
