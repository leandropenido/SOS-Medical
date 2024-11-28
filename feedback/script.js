document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const comentario = document.getElementById('comentario');
    const avaliarButton = document.querySelector('.btn-avaliar');
    const commentContainer = document.querySelector('.comment-container');
    let selectedRating = 0;

    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.style.color = '#ffd700';
            } else {
                star.style.color = '#ccc';
            }
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-rating');
            highlightStars(selectedRating);
        });

        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            highlightStars(rating);
        });

        star.addEventListener('mouseout', function() {
            highlightStars(selectedRating);
        });
    });

    avaliarButton.addEventListener('click', function() {
        const comentarioValue = comentario.value;
        const avaliacaoData = {
            rating: selectedRating,
            comentario: comentarioValue
        };

        let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        avaliacoes.push(avaliacaoData);
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

        alert('Avaliação salva com sucesso!');
        displayAvaliacoes();
    });

    function displayAvaliacoes() {
        commentContainer.innerHTML = '';
        const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        avaliacoes.forEach(avaliacao => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <p><strong>Avaliação:</strong>    ${'★'.repeat(avaliacao.rating)}${'☆'.repeat(5 - avaliacao.rating)}</p>
                <p>${avaliacao.comentario}</p>
            `;
            commentContainer.appendChild(commentDiv);
        });
    }

    displayAvaliacoes();
});
