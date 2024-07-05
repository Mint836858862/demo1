import type {PluginOption, ViteDevServer} from 'vite';

import colors from"picocolors";
export default function (): PluginOption {
    return {
        name: 'printLogo',
        apply: 'serve',
        enforce: 'pre',
        configureServer(server: ViteDevServer) {
            const print = server.printUrls;
            server.printUrls = () => {
                console.info(colors.green(
                    '' +
                    ' ____      ____   ___         _____ \n' +
                    '|_  _|    |_  _|.\'   `.      |_   _|\n' +
                    '  \\ \\  /\\  / / /  .-.  \\       | |  \n' +
                    '   \\ \\/  \\/ /  | |   | |   _   | |  \n' +
                    '    \\  /\\  /   \\  `-\'  \\_ | |__\' |  \n' +
                    '     \\/  \\/     `.___.\\__|`.____.\'  \n' +
                    '                                    \n' ))
                print();
            }
        }
    }
}

