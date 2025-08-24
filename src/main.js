import './outstyle.css'

document.querySelector('#app').innerHTML = /*html*/`
<header class="absolute top-0 left-0 h-23 w-full bg-white flex flex-row justify-between pt-5.5 pb-5.5 pl-7 pr-7">
  <img src="/icon.svg" alt="" class="">
  <div>
    <button onclick="mudarIdioma('pt-BR')" class="mr-2 p-2 bg-blue-500 text-white rounded">PT-BR</button>
    <button onclick="mudarIdioma('en')" class="p-2 bg-green-500 text-white rounded">EN</button>
  </div>
</header>
<main class="flex flex-col mt-23 mb-8">
  <div class="absolute left-0 top-0 w-full h-120 overflow-hidden z-[-1]">
    <img src="/10816.jpg" alt="" class="object-cover w-full h-full object-center opacity-95">
  </div>
  <div id="pt" class="hidden flex-col gap-2">
    <div class="flex w-full h-97 justify-center items-center">
      <span class="text-4xl font-bold text-white">Aceleradora de negócios da Embraer</span>
    </div>
    <div class="flex flex-col pl-10 pt-10">
      <span class="font-bold text-3xl">Investimentos</span>
      <span class="text-[1.3rem] text-wrap w-200">A Embraer-X está investindo em startups promissoras, como a Eve Air Mobility, uma startup que está trabalhando na tecnologia eVTOL e deve começar a vender suas aeronaves futuristas já em 2026.</span>
    </div>
    <div class="flex flex-col pr-10 items-end">
      <span class="font-bold text-right text-3xl">IPO</span>
      <span class="text-right text-[1.3rem] text-wrap w-200">A Eve Air Mobility teve um IPO impressionante de 337 milhões de dólares em 2022, quando suas ações ficaram disponíveis na Bolsa de Valores de Nova York, e já tem compradores potenciais na América do Norte, Europa e leste da Ásia.</span>
    </div>
    <div class="flex flex-col pl-10">
      <span class="font-bold text-3xl">Previsão</span>
      <span class="text-[1.3rem] text-wrap w-200">Segundo o CEO da Embraer X, a expectativa é que até 2035 o Rio de Janeiro tenha cerca de 250 dessas máquinas em operação e outras quatrocentas operando nos céus de São Paulo.</span>
    </div>
  </div>
  <div id="en" class="flex flex-col gap-2">
    <div class="flex w-full h-97 justify-center items-center">
      <span class="text-4xl font-bold text-white">Embraer’s business accelerator</span>
    </div>
    <div class="flex flex-col pl-10 pt-10">
      <span class="font-bold text-3xl">Investments</span>
      <span class="text-[1.3rem] text-wrap w-200">Embraer-X is investing in promising startups, such as Eve Air Mobility, a startup that is working on eVTOL technology and is scheduled to begin selling its futuristic aircraft as early as 2026.</span>
    </div>
    <div class="flex flex-col pr-10 items-end">
      <span class="font-bold text-right text-3xl">IPO</span>
      <span class="text-right text-[1.3rem] text-wrap w-200">Eve Air Mobility had an impressive IPO of 337 million dollars in 2022, when it’s stocks became available on the New York Stock Exchange, and already has potential buyers in North America, Europe, and east Asia.</span>
    </div>
    <div class="flex flex-col pl-10">
      <span class="font-bold text-3xl">Forecast</span>
      <span class="text-[1.3rem] text-wrap w-200">According to Embraer X’s CEO, by 2035, they expect Rio de Janeiro to have roughly 250 of these machines in operation, and another four hundred operating in the skies above São Paulo.</span>
    </div>
  </div>
</main>
<footer class="flex">

</footer>
`

setupCounter(document.querySelector('#counter'))