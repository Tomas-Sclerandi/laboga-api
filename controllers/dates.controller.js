const path = require('path');
const fs = require('fs');

const fechasTodasPath = path.join(__dirname, '..', 'data', 'general_dates.json');
const fechasLaBogaPath = path.join(__dirname, '..', 'data', 'laboga_dates.json');

exports.getDates = async (req, res) => {
    console.log('el get request da esto: ', req);
    try {
        const data = fs.readFileSync(fechasTodasPath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'No se pudieron cargar las fechas completas' });
    }
}

exports.getDatesLaBoga = async (req, res) => {
    try {
        const data = fs.readFileSync(fechasLaBogaPath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'No se pudieron cargar los partidos de LA BOGA FC' });
    }
}

exports.getProximosPartidosLaBoga = async (req, res) => {
    try {
        const data = fs.readFileSync(fechasLaBogaPath, 'utf8');
        const partidos = JSON.parse(data);

        const hoy = new Date();

        const proximos = partidos.filter(p => {
            const fechaPartido = new Date(p.fecha);
            return fechaPartido >= hoy;
        });

        res.json(proximos);
    } catch (err) {
        res.status(500).json({ error: 'No se pudieron cargar los próximos partidos de LA BOGA FC' });
    }
};