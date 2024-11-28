document.addEventListener('DOMContentLoaded', () => {

    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Atendimentos de Emergência',
                data: [10, 20, 15, 30, 25, 35],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderWidth: 2,
                pointRadius: 5,
                tension: 0.4 
            }]
        },
        options: {
            plugins: {
                legend: { display: true, position: 'top' }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });


    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
            datasets: [{
                label: 'Frequência de Uso',
                data: [5, 15, 30, 10, 20],
                backgroundColor: [
                    '#68cfec', '#87d9f2', '#a6e3f8', '#c5eeff', '#dff7ff'
                ],
                borderColor: '#007bff',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: { display: true, position: 'top' }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});