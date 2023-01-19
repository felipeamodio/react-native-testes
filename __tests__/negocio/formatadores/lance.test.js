import {formataMaiorLanceDoLeilao} from '../../../src/negocio/formatadores/lance';

describe("negocio/formatadores/lance", () => {
    describe('formataMaiorLanceDoLeilao', () => {
        test('deve retornar o maior lance do leilão', () => {
            const lances = [
                {
                    valor: 10,
                },
                {
                    valor: 30,
                },
                {
                    valor: 20,
                },
            ];
            const valorInicial = 5;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(30);
            console.log('maiorLance', maiorLance);
        });

        describe('deve retornar o valor inicial caso não existir lances', () => {
            const lances = [];
            const valorInicial = 5;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(5);
            console.log('maior lance', maiorLance);
        })
    })
})