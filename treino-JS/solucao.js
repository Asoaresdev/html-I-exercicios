function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salario = 2000
    const comissaoPorCarro = qtdeCarrosVendidos * 100
    const comissãoTotalDeVendas= valorTotalVendas * 0.05
    return salario +comissaoPorCarro+comissãoTotalDeVendas
   }