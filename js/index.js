const labels = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Cortes da semana',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: 'Vendas',
        backgroundColor: 'rgb(0, 208, 255)',
        borderColor: 'rgb(0, 208, 255)',
        data: [0, 20, 5, 15, 30, 20, 5],
      }

]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

//   
const labelsPie = [
    'Pomada',
    'Minoxidil',
    'Oleo barba',
    'Spay cabelo',

  ];

  const dataPie = {
    labels: labelsPie,
    datasets: [{
      label: 'Produtos',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(0, 208, 255)', 'rgb(144, 0, 255)', 'rgb(0, 255, 166)' ],
      data: [1, 5, 3, 4],
    },

]
  };

  const configPie = {
    type: 'doughnut',
    data: dataPie,
    options: {}
  };
  const myChartPie = new Chart(
    document.getElementById('myChart-pie'),
    configPie
  );

  // simulando dados requisição

  const users = [
    {
      id: 1,
      nome: 'João da Silva',
      email: 'joão@gmail'
    },
    {
      id: 2,
      nome: 'Miguel Oliveira',
      email: 'miguel@gmail'
    },
    {
      id: 3,
      nome: 'Guilherme Pedroso',
      email: 'miguel@gmail'
    },
    {
      id: 4,
      nome: 'Carlos Silveira',
      email: 'carlos@gmail'
    },
  ]

  const containerUsers = document.querySelector('.container-usuarios')

  users.forEach(({nome})=>{
    const card = document.createElement('div')
    card.classList.add('usuarios')
    card.innerText = nome
    containerUsers.append(card)
  })
  const cards = document.querySelectorAll('.usuarios')

//#region busca usuario

const inpPesquisa = document.getElementById('inpPesquisa')
inpPesquisa.addEventListener('input', function(){
  cards.forEach(card =>{
    const nomeUser = card.innerText.toLowerCase()
    if(nomeUser.includes(this.value.toLowerCase())){
      card.style.display = 'flex'
      return
    }
    card.style.display = 'none'
  })
})
//#endregion


  


