import fixer from 'fixer-api';
import config from '@config'

const access_key = config.fixer_key;

fixer.set({ accessKey: access_key });

class Rates {
    static async lates({ base, symbol }) {
        var exRates = await fixer.latest({ base: base, symbols: symbol });

        const curr_rate = exRates.rates[symbol]

        return curr_rate;
    }

    static async convert({ from, to, amount }) {
        var converted = await fixer.convert({from, to, amount});
        return converted
    }
}
export default Rates