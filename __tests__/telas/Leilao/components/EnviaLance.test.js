import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';
import {ENVIADO, NAO_ENVIADO} from '../../../../src/negocio/constantes/estadosLance';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('telas/Leilao/components/Envialance', () => {
    test('deve enviar o lance quando botão for pressionado', async () => {
        const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO))) //chamando uma função mockada
        const {getByPlaceholderText, getByA11yHint, getByText} = render(
            <EnviaLance 
                enviaLance={enviaLance}
                cor="blue"
            />
        );

        const input = getByPlaceholderText("R$");
        const botao = getByA11yHint("Enviar lance");

        fireEvent.changeText(input, '10');
        fireEvent.press(botao);

        expect(enviaLance).toHaveBeenCalledWith('10');
        await waitFor(() => {
            expect(getByText(ENVIADO)).toBeTruthy();
        });
        expect(() => getByText(NAO_ENVIADO)).toThrow();
    })
})