import React from 'react';
import {render} from '@testing-library/react-native';
import EnviaLance from '../../../../src/telas/Leilao/componentes/EnviaLance';
import {ENVIADO} from '../../../../src/negocio/constantes/estadosLance';

describe('telas/Leilao/components/Envialance', () => {
    test('deve enviar o lance quando botão for pressionado', () => {
        const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO))) //chamando uma função mockada
        const {toJSON} = render(
            <EnviaLance 
                enviaLance={enviaLance}
                cor="blue"
            />
        );
        console.log(toJSON())
    })
})