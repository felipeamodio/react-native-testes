import {formataBrasileiroParaDecimal, formataDecimalParaReal} from '../../../src/negocio/formatadores/moeda';

//começando o teste

//função global DESCRIBE
//todos os testes do formatadores/moeda estão dentro do describe

describe("negocio/formatadores/moeda", () => {
    describe("formataBrasileiroParaDecimal", () => {
        test("deve retornar 8.59 quando o valor for '8,59'", () => {
            const result = formataBrasileiroParaDecimal("8,59");
            
            expect(result).toBe(8.59)
            // console.log(result)
        })
    })

    describe("formataDecimalParaReal", () => {
        test("deve retornar R$ 8,59 quando o valor for 8.59", () => {
            const result = formataDecimalParaReal(8.59);

            // expect(result).toBe('R$8,59') //vai dar erro de espaçamento
            expect(result).toMatch(/R\$\s8,59/) //tem q fazer uma regex pra dar espaço \ transforma em string... \s força o espaço em formato regex
        })
    })
})